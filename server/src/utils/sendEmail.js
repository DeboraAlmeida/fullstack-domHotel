// Arquivo criado: 17/03/2023 às 12:13

import transporter from '../app/email.js'

const sendEmail = (to, subject, text) => {

  const emailOptions = {
    from: process.env.EMAIL_USER,
    to,
    subject,
    html: text
  }


  transporter.sendMail(emailOptions)

}

export default sendEmail
