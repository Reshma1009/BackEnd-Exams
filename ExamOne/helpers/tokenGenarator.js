const jwt = require("jsonwebtoken");
function token(data) {
  const token = jwt.sign({ email: data }, process.env.JWTSECRET, {
    expiresIn: "1h",
  });
  return token;
}
module.exports = token;
