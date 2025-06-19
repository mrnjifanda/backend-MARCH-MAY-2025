const Contact = require('../models/Contact');
const { send } = require('./mail.service');
const adminMail = "e.njifanda@commonfactor.tech";

const saveContact = async (data, mail = false) => {
    try {
        const contact = new Contact(data);
        await contact.save();

        if (mail == true) {

            const content = `
                Hello Admin,\n
                New user try to contact you in your website:\n
                - Name: ${data.name}\n
                - Email: ${data.email}\n
                - Subject: ${data.subject}\n
                - Message: ${data.message}\n
            `;
            await send(adminMail, data.subject, content);
        }

        return true;
    } catch (error) {
        console.error(error);
        return false;
    }
}

module.exports = { saveContact };
