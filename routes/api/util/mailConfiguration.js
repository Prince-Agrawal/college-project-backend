var nodemailer = require("nodemailer");
require("dotenv").config();

/*
	Here we are configuring our SMTP Server details.
	STMP is mail server which is responsible for sending and recieving email.
*/

let smtpTransport = nodemailer.createTransport({ 
    service: 'gmail', 
    auth: { 
        user: 'librobinhelp@gmail.com', 
        pass:  process.env.LIBROBIN_HELP_MAIL_PASS
    } 
});

/*------------------SMTP Over-----------------------------*/

module.exports = smtpTransport;
