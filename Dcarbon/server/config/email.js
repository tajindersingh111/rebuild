const nodemailer = require('nodemailer');

// Configure mail settings using Gmail for example
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'manisha107btcse22@gmail.com',
        pass: 'Igdtuw@123'
    }
});

module.exports = transporter;
