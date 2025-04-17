const isValidEmail = (email) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}

const loginValidation = (req, res, next) => {
    const errors = [];
    const { email, password } = req.body;
    if (!email || !password) {
        errors.push({ message: "Please enter email and password !!!" });
    }

    if (!isValidEmail(email)) {
        errors.push({ message: "Please enter valid email" });
    }

    if (errors.length != 0) {
        return res.status(400).json({
            error: errors,
            message: "Incorrect credentails"
        });
    }

    next();
};

const registerValidation = (req, res, next) => {
    const errors = [];
    const { email, fullName, password, confirm_password } = req.body;
    if (!email || !fullName || !password || !confirm_password) {
        errors.push({ message: "Please send fields (email, fullName, password, confirm_password)" });
    }

    if (password != confirm_password) {
        errors.push({ message: "Password and confirm password should match !!!" })
    }

    // isValidEmail(email) != true 
    // isValidEmail(email) == false 
    if (!isValidEmail(email)) {
        errors.push({ message: "Please enter a valid adress mail" })
    }

    if (errors.length != 0) {
        return res.status(400).json({
            message: "Error in the from, please correct and retry lated !!!",
            error: errors
        })
    }

    next();
};

module.exports = { loginValidation, registerValidation };
