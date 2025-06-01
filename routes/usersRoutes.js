const express = require("express");
const router = express.Router();
const usersControllers = require("../controllers/usersControllers");

router.get("/", usersControllers.getAllUsers);
router.put("/:id", usersControllers.updateById);
router.get("/:id", usersControllers.findUserById);
router.delete("/:id", usersControllers.deleteUserById);

module.exports = router;
