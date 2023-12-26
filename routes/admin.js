const express = require("express");
const router = express.Router();
const { isLoggedIn } = require("../middlewares/authentication");

const adminController = require("../controllers/admin_controller");

router.post("/signup", adminController.signUp);
router.post("/login", adminController.logIn);
router.get("/view-all", isLoggedIn, adminController.viewAll);

module.exports = router;
