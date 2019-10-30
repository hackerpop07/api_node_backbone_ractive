const router = require("express").Router();
const UserController = require("../controller/UserController");

router.get("/", UserController.getAll);
router.post("/", UserController.store);
router.delete("/:id", UserController.delete);
router.put("/:id", UserController.update);

module.exports = router;
