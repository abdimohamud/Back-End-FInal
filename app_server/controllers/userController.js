const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../config/keys.js");
const azure = require('azure-storage');
const fs = require('fs');

// Load input validation
const validateRegisterInput = require("./validation/register");
const validateLoginInput = require("./validation/login");

// Load models
const User = require("../models/User");
const Song = require("../models/Song");
const Site = require("../models/Site");

exports.register = function(req, res) {
  // Form validation
  const { errors, isValid } = validateRegisterInput(req.body);

  // Check validation
  if (!isValid) {
    return res.status(400).json(errors);
  }

  User.findOne({ email: req.body.email }).then(user => {
    if (user) {
      return res.status(400).json({ email: "Email already exists" });
    }
    else {
      const newUser = new User({
        fullname: req.body.fullname,
        email: req.body.email,
        password: req.body.password,
        accountType: req.body.accountType
      });

      // Hash password before saving in database
      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if (err) throw err;
          newUser.password = hash;
          newUser
          .save()
          .then(user => res.json(user))
          .catch(err => console.log(err));
        });
      });
    }
  });
};

exports.login = function(req, res) {
  // Form validation
  const { errors, isValid } = validateLoginInput(req.body);
  // Check validation
  if (!isValid) {
    return res.status(400).json(errors);
  }
  const email = req.body.email;
  const password = req.body.password;
  // Find user by email
  User.findOne({ email }).then(user => {
    // Check if user exists
    if (!user) {
      return res.status(404).json({ emailnotfound: "Email not found" });
    }
    // Check password
    bcrypt.compare(password, user.password).then(isMatch => {
      if (isMatch) {
        // User matched
        // Create JWT Payload
        const payload = {
          id: user.id,
          fullname: user.fullname
        };

        // Sign token
        jwt.sign(
          payload,
          keys.secretOrKey,
          {
            expiresIn: 31556926 // 1 year in seconds
          },
          (err, token) => {
            res.json({
              success: true,
              token: "Bearer " + token
            });
          }
        );
      }
      else {
        return res
        .status(400)
        .json({ passwordincorrect: "Password incorrect" });
      }
    });
  });
};

exports.uploadSong = function(req, res) {
  var blobName = req.body.name.replace(/[^a-zA-Z0-9]/g, '') + Date.now();
  var blobService = azure.createBlobService(keys.azureName, keys.azureKey);
  blobService.createBlockBlobFromLocalFile('songs', blobName, req.file.path, function(error, result, response) {
    if (!error) {
      User.findOne({ id: req.body.id }).then(user => {
        Site.findOne({ id: '1' }).then(site => {
          var songCount = Number(site.songCount) + 1;
          site.songCount = songCount.toString();
          const newSong = new Song({
            id: songCount,
            name: req.body.name,
            url: 'https://fyrestorage.blob.core.windows.net/songs/' + blobName,
            ownerID: req.body.id,
            producerName: user.producerName
          });
          newSong.save();
          site.save();
          fs.unlinkSync(req.file.path);
        });
      });
    }
    else {
      res.status(400).send('Error uploading to Azure');
    }
  });
};
