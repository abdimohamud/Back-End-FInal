const express = require("express");
const router = express.Router();
const userController = require('../controllers/userController');
const multer = require('multer');

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'temp/');
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '.mp3');
  }
})

//User Registration
router.post('/register', userController.register);
router.post('/login', userController.login);

//User songs
router.post('/uploadsong', multer({ storage: storage }).single('file'), userController.uploadSong);

module.exports = router;
