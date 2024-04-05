const nodemailer = require('nodemailer')

module.exports = async (userEmail , subject , htmlTemplate) => {
    try{
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
              user: process.env.APP_EMAIL_ADDRESS,
              pass: process.env.APP_EMAIL_PASSWORD
            }
          })

          const mailOptions = {
            from: process.env.APP_EMAIL_ADDRESS,
            to: userEmail ,
            subject: subject,
            text: htmlTemplate ,
          }

          const info = await transporter.sendMail(mailOptions);
          console.log("Email sent with success");

    } catch (error){
        console.log(error);
        throw new Error ("internal server Error")
    }
}