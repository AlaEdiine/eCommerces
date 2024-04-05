var nodemailer = require('nodemailer')

const SendEmail = (data, req, res, next) => {
  console.log(data.name);
var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'alaeddine.alouii@gmail.com',
    pass: 'ALA9321x'
  }
});



var mailOptions = {
  from: 'ste.yoyojul@outlook.com',
  to: 'alaeddine20182017@gmail.com' ,
  subject: data.subject,
  text: data.msg ,
}


transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
     next()
  }
})

}

module.exports = { SendEmail }