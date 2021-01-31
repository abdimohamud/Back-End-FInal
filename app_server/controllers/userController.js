const admin = require('firebase-admin');
const azure = require('azure-storage');
const fs = require('fs');
const keys = require("../config/keys.js");
const db = require("../config/firebase.js");

exports.uploadSong = function(req, res) {
  if (req.body.ownerID === undefined || req.body.ownerID == "") {
    res.status(400).send("ownerID needed");
  }
  var blobName = req.body.name.replace(/[^a-zA-Z0-9]/g, '') + Date.now();
  var blobService = azure.createBlobService(keys.azureName, keys.azureKey);
  blobService.createBlockBlobFromLocalFile('songs', blobName, req.file.path, async function(error, result, response) {
    if (!error) {
      var songs = db.getConnection().collection('Songs');
      var users = db.getConnection().collection('Users');
      const user = await users.doc(req.body.ownerID).get();
      if (!user.exists) {
        res.status(400).send("No user found.");
      }
      else {
        var songData = {
          name: req.body.name,
          url: 'https://fyrestorage.blob.core.windows.net/songs/' + blobName,
          ownerID: req.body.ownerID,
          producerName: user.data().producerName,
          createdDate: admin.firestore.Timestamp.now(),
          likeCount: 0,
          playCount: 0,
          commentCount: 0
        };
        var db_result = await songs.add(songData);
        res.status(200).send("Added song");
        fs.unlinkSync(req.file.path);
      }
    }
    else {
      res.status(400).send('Error uploading to Azure');
    }
  });
};
