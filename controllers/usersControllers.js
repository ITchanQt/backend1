const Users = require('../models/usersModels');

const usersControllers = {
    getAllUsers: async (req, res) => {
        try {
            const users = await Users.findAll();
            res.json({
                success: true,
                data: users
            });
        } catch (error) {
            res.status(500).json({
                success: false,
                message: 'Error fetching users',
                error: error.message
            });
        }
    },
};

module.exports = usersControllers;