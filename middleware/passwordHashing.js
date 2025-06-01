const bcrypt = require('bcrypt');

const hashPassword = async (req, res, next) => {
    try {
        if (req.body.password) {
            const hashedPassword = await bcrypt.hash(req.body.password, 10);
            req.body.password = hashedPassword;
        }
        next();
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error hashing password",
            error: error.message
        });
    }
};

module.exports = hashPassword;