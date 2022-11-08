import nodemailer from 'nodemailer';
import { MAIL_USER, MAIL_PWD } from '../config.js';

export const sendMail = async () => {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: { user: MAIL_USER, pass: MAIL_PWD },
    secure: true,
  });

  const mailOptions = {
    to: 'kakaru0190@srdff23f.com',
    subject: 'nodemail test',
    html: `
        <div>test</div>
    `,
  };

  await transporter.sendMail(mailOptions);
};
