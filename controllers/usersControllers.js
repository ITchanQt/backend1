const Users = require("../models/usersModels");

const usersControllers = {
  getAllUsers: async (req, res) => {
    try {
      const users = await Users.findAll();
      res.json({
        success: true,
        data: users,
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: "Error fetching users",
        error: error.message,
      });
    }
  },

  updateById: async (req, res) => {
    try {
      const { id } = req.params;
      const { name, address, phoneNum } = req.body;

      const userData = {
        user_name: name,
        user_add: address,
        user_num: phoneNum,
      };

      const results = await Users.updateById(userData, id);

      if (results.affectedRows === 0) {
        return res.status(404).json({
          success: false,
          message: "User not found",
        });
      }

      res.json({
        success: true,
        message: "User updated",
        data: {
          id,
          ...userData,
        },
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: "Error updating user",
        error: error.message,
      });
    }
  },

  findUserById: async (req, res) => {
    try {
        const { id } = req.params;
        const user = await Users.findUserById(id);
        res.json({
            success: true,
            data: user,
        });
    } catch (error) {
        if (error.message === "User not found") {
            return res.status(404).json({
                success: false,
                message: "User not found"
            });
        }
    }
  },

  deleteUserById: async (req, res) => {
    try {
      const { id } = req.params;
      const result = await Users.deleteUserById(id);
      res.json({
        success: true,
        message: "User deleted successfully",
        data: {
          user_id: id,
        }
      });
    } catch (error) {
      if (error.message === "User not found") {
        return res.status(404).json({
          success: false,
          message: "User not founf",
        });
      }
    }
  }

};

module.exports = usersControllers;
