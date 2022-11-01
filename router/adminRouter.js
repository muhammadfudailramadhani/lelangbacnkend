const express = require("express")
const { registerAdmin, login, listOfficer, deleteOfficer, addOfficer, createLevel, getProfile, updateProfile,} = require("../controller/admin_controller")
const { jwtMiddle } = require("../middleware/jwtMiddleware")
const { uploadSingle} = require("../middleware/uploadMiddleware")
const jwtDecode = require("jwt-decode");

const router = express()

router.post("/register",uploadSingle,registerAdmin)
router.post("/login",login)
router.post("/create-level",createLevel)
router.use(jwtMiddle)
router.get("/profile", getProfile);
router.put("/update", uploadSingle,updateProfile);
router.post("/add-officer",addOfficer)
router.get("/list-officer",listOfficer)
router.delete("/delete/:id",deleteOfficer)
module.exports = {adminRouter:router}