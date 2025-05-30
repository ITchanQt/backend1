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

    createUser: async (req, res) => {
        try {
            const { name, address, phoneNum} = req.body;
            if (!name || !address || !phoneNum) {
                return res.status(400).json({
                    success: false,
                    message: 'All fields are required'
                });
            }

            const userData = {
                user_name: name,
                user_add: address,
                user_num: phoneNum
            };

           const results = await Users.create(userData);
           res.status(201).json({
            success: true,
            message: 'User created successfuly',
            data: {
                id: results.insertId,
                ...userData
            }
           });
        } catch (error) {
            res.status(500).json({
                success: false,
                message: 'Erorr creating user',
                error: error.message
            });
        }
    },

    // createUser: async (req, res) => {
    //     try {
    //         const userData = req.body;
    //         const results = await Users.create(userData);
    //         res.status(201).json({
    //             success: true,
    //             message: 'User created successfully',
    //             data: {
    //                 id: results.insertID,
    //                 ...userData
    //             }
    //         });
    //     } catch (error) {
    //         res.status(500).json({
    //             success: false,
    //             message: 'Error creating user',
    //             error: error.message
    //         });
    //     }
    // }
};

module.exports = usersControllers;