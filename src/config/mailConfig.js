import nodemailer from 'nodemailer' ;

import { MAIL_ID, MAIL_PASSWORD } from './serverConfig.js';

export default nodemailer.createTransport({
    host: "smtp.gmail.com",
    service: 'Gmail' ,
    port: 465,
    secure: true, // true for port 465, false for other ports
    auth: {
      user: MAIL_ID,
      pass: MAIL_PASSWORD,
    },
  })