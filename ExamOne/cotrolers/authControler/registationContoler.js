const bcrypt = require("bcrypt");
const User = require("../../models/userModel.js");
const emailvalidation = require("../../helpers/emailvalidation.js");
const emailVerification = require("../../helpers/emailVarification.js");
const emailVerfiTemplate = require("../../helpers/emailTemplate.js");
const token = require( "../../helpers/tokenGenarator.js" );


async function registationControler(req, res) {
  const { firstName, lastName, email, password } = req.body;
  if (!firstName || !lastName) {
    return res.send({ error: "First Name && Last Name is requried" });
  }

  if (!password) {
    return res.send({ error: "Email is requried" });
  }
  // email validation
  if (!email) {
    res.json({ error: "Email is required " });
  } else {
    if (emailvalidation(email)) {
      res.json({ error: "Email is wrong " });
    }
  }

  // existing email
  const users = await User.find({ email });
  if (users.length > 0) {
    return res.json({ error: "Email is exists " });
  }
  bcrypt.hash(password, 10, function (err, hash) {
    let user = new User({
      firstName,
      lastName,
      email,
      password: hash,
    });
    user.save();
    res.json(user);
  });
  const genaratedTokens = token(email);
  emailVerification(
    email,
    "This is email verification code",
    emailVerfiTemplate(genaratedTokens)
  );
}

module.exports = registationControler;