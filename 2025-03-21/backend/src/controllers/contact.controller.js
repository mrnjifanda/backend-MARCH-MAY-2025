const Contact = require('../models/Contact');

const lists = async (req, res) => {
    try {
        const contact = await Contact.find();
        return res.json({
            message: 'All available contacts',
            data: contact
        });
    } catch (error) {
        return res.status(500).json({
            message: error.message ?? 'Internal server error',
            error: error
        });
    }
};

const createOne = async (req, res) => {
    try {
        const body = req.body;
        const contact = new Contact(body);
        await contact.save();

        // await Contact.create(body)

        return res.status(201).json({ message: 'Contact created successfully' });
    } catch (error) {
        return res.status(500).json({
            message: error.message ?? 'Internal server error',
            error: error
        });
    }
};

const getDetails = async (req, res) => {
    try {
        const id = req.params.id;
        const contact = await Contact.findOne({
            _id: id
        });

        if (contact) {
            return res.json({
                message: 'Contact details',
                data: contact
            });
        }
        return res.status(404).json({
            message: 'Contact not found',
        });
    } catch (error) {
        return res.status(500).json({
            message: error.message ?? 'Internal server error',
            error: error
        });
    }
};

const updateOneById = async (req, res) => {};

const deleteOneById = async (req, res) => {};

const deleteManyByIds = async (req, res) => {};

module.exports = {
    lists,
    createOne,
    getDetails,
    updateOneById,
    deleteOneById,
    deleteManyByIds
};
