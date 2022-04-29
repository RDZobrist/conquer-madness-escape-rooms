const nodemailer = require('nodemailer');
// require('dotenv').config()

module.exports.mail = async function mail(mailDetails) {
    let mailTransporter = nodemailer.createTransport({
        service: "Outlook365",
        port: 443,
        secure: false, // true for 465, false for other ports
        auth: {
            user: 'data@conquerescaperooms.com', // generated ethereal user
            pass: 'P3ni$10141974', // generated ethereal password
        },
    });
    mailDetails.from = 'data@conquerescaperooms.com';
    mailTransporter.sendMail(mailDetails, function (err, data) {
        if (err) {
            console.log('Error Occurs', err);
            return err;
        } else {
            console.log('Email sent successfully');
              return data
            }
        }
    );
};

