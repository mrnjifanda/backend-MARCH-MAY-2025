const validate_data = (req, res, next) => {
    const body = req.body;
    const errors = [];

    if (!body.title) {
        errors.push({ name: 'title', message: 'title is required'});
    }

    if (!body.description) {
        errors.push({ name: 'description', message: 'description is required'});
    }

    if (!body.due_date) {
        errors.push({ name: 'due_date', message: 'due_date is required'});
    }

    if (!body.status) {
        errors.push({ name: 'status', message: 'status is required'});
    }

    if (errors.length == 0) {
        next();
    } else {
        return res.status(401).json(errors);
    }
};

const validate_email = (req, res, next) => {

    const email = req.query.email;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email && emailPattern.test(email)) {
        next();
    } else {
        return res.status(401).json({
            error: 'Please enter valid email'
        });
    }
}

module.exports = { validate_data, validate_email };
