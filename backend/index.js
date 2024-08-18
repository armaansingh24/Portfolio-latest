const express = require("express");
const nodemailer = require("nodemailer");
const config = require("./config");
const cors = require("cors");
const path = require("path");
const app = express();
app.use(express.json());
app.use(cors());

const _dirname = path.dirname("");
const buildpath = path.join(_dirname, "../frontend/build")
app.use(express.static(buildpath));

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: config.email1,
    pass: config.pass1,
  },
});

app.post("/contacted", (req, res) => {
  console.log(req.body);
  const { username, phoneNumber, email, subject, message } = req.body;

  const emailMessage = {
    from: `${username} <${email}>`,
    to: config.email1,
    text: `
    Name: ${username}
    Contact: ${phoneNumber}
    Email: ${email}
    Subject: ${subject}
    Message: ${message}
  `,
  };
  transporter.sendMail(emailMessage, function (error, info) {
    if (error) {
      console.log(error);
      res.json({ yo: "error" });
      res.sendStatus(500);
    } else {
      console.log("Message sent: " + info.response);
      res.status(200).json({ msg: "mesage  has been sent" });
    }
    fs.unlinkSync(attachment.path);
  });
});

app.listen(8000, () => {
  console.log("Server listening on port 3000");
});
