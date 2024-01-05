import nodemailer from "nodemailer";

import * as dotenv from "dotenv";
dotenv.config();

const gmailTransporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS,
  },
  tls: { rejectUnauthorized: false },
  ignoreTLS: true,
});

const sendMailOfUser = async (pEmail, pFirstName) => {
  const emailOptions = {
    from: process.env.MAIL_USER,
    to: pEmail,
    subject: "Welcome to Traveller App",
    html: `Welcome ${pFirstName}`,
    attachements: [],
  };

  gmailTransporter.sendMail(emailOptions, (err, info) => {
    if (err) {
      console.error(err);
    } else console.log(info);
  });
};

export default { sendMailOfUser };
