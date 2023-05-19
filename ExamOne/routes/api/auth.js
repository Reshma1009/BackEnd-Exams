const express = require("express");

const router = express.Router();
const User = require("../../models/userModel.js");
const registationControler = require( "../../cotrolers/authControler/registationContoler.js" );
const emailverficationControler = require( "../../cotrolers/authControler/emailverficationControler.js" );

router.post("/registation", registationControler);
router.get("/registations", async function (req, res) {
  const users = await User.find({});
  res.send(users);
} );

router.post("/emailverfication", emailverficationControler);
router.get("/emailverfications", async function (req, res) {
  res.send("email updated successfully");
});

module.exports = router;
