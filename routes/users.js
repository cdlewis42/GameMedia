const router = require("express").Router();
const Controller = require("../../controllers/messageController");




router
.route("/:id")
.get(Controller.findOneUser);


module.exports = router;