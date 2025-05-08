const nodemailer = require('nodemailer');

const transport = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS
    }
});

async function send(to, subject, content) {
    const info = await transport.sendMail({
        from: '"Seven Advanced Academy" <' + process.env.MAIL_USER + '>',
        to: to,
        subject: subject,
        text: content
    });

    console.log("Message send with id: " + info.messageId);
}

module.exports = { send };
