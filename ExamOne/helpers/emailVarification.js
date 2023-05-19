const nodemailer = require("nodemailer");

async function emailVerification(email, subject, emailTemplate) {
  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL,
      pass: process.env.EMAIL_PASS,
    },
  });

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: "Reshme nila <process.env.EMAIL>", // sender address
    to: email, // list of receivers
    subject: subject, // Subject line
    html: emailTemplate, // html body
  });
}
module.exports = emailVerification;