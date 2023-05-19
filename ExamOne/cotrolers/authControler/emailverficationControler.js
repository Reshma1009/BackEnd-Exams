const jwt = require( "jsonwebtoken" );
const User = require("../../models/userModel.js");
async function emailverficationControler(req, res) {
  const { authorization } = req.headers;
  const decoded = jwt.verify(authorization, process.env.JWTSECRET);
  // console.log( "decoded", decoded.email );
  let upDateUser = await User.findOneAndUpdate(
    { email: decoded.email },
    { verified: true },
    { new: true }
  );
  res.json(upDateUser);
}

module.exports = emailverficationControler;
