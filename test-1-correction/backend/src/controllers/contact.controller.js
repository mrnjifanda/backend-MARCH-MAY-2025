const Contact = require('../models/Contact');

const create = async (req, res) => {
    try {
        const contact = new Contact(req.body);
        await contact.save();

        return res.json({
            error: false,
            message: 'contact created successfully !!!'
        });
    } catch (error) {
        return res.status(500).json({
            error: true,
            message: 'Internal Server Error'
        }); 
    }
};

const lists = async (req, res) => {
    try {
        const contact = await Contact.find().populate('addedBy');
        return res.json({
            error: false,
            message: 'All contact',
            data: contact
        });
    } catch (error) {
        return res.status(500).json({
            error: true,
            message: 'Internal Server Error'
        }); 
    }
};

const getOne = async (req, res) => {
    try {

        const { id } = req.params;

        const contact = await Contact.findById(id).populate('addedBy');
        if (contact) {
            return res.json({
                error: false,
                message: 'Contact details',
                data: contact
            });
        }

        return res.status(404).json({
            error: true,
            message: 'Contact not found',
        });
    } catch (error) {
        return res.status(500).json({
            error: true,
            message: 'Internal Server Error'
        }); 
    }
};

const update = async (req, res) => {
    try {
        const id = req.params.id;
        const data = req.body;
        await Contact.findOneAndUpdate(
            { _id: id},
            data
        );
    
        return res.json({
            error: false,
            message: 'Contact update successfully'
        });
    } catch (error) {
        return res.status(500).json({
            error: true,
            message: 'Internal Server Error'
        }); 
    }
};

const remove = async (req, res) => {
    try {
        const id = req.params.id;
        await Contact.findOneAndDelete({ _id: id });

        return res.json({
            error: false,
            message: 'Contact delete successfully'
        });
    } catch (error) {
        return res.status(500).json({
            error: true,
            message: 'Internal Server Error'
        }); 
    }
};

module.exports = { create, lists, update, remove, getOne };
