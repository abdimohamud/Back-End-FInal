const admin = require('firebase-admin');
const serviceAccount = require('./serviceAccountKey.json');

var db;

exports.initialize = function() {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
  });
  db = admin.firestore();
};

exports.getConnection = function() {
  return db;
};