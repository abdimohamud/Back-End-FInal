const admin = require('firebase-admin');
const azure = require('azure-storage');
const fs = require('fs');
const keys = require("../config/keys.js");
const db = require("../config/firebase.js");

exports.addItem = async function(req, res) {
  if (req.body.ownerID === undefined || req.body.ownerID == "") {
    return res.status(400).send("ownerID needed");
  }
  if (req.body.itemID === undefined || req.body.itemID == "") {
    return res.status(400).send("itemID needed");
  }
  const userRef = db.getConnection().collection('Users').doc(req.body.ownerID);
  const user = await userRef.get();
  if (!user.exists) {
    return res.status(400).send("No user found.");
  }
  else{
    const itemRef = userRef.collection('cart').doc(req.body.itemID);
    const item = await itemRef.get();
    if (!item.exists) {
      itemRef.set({ amount: 1});
      return res.status(200).send("Item added.");
    }
    else {
      var db_result = await itemRef.update({ amount: admin.firestore.FieldValue.increment(1) });
      return res.status(200).send("Item found. Increased amount.");
    }
  }
};
