const express = require("express");
const router = express.Router();
const fetchuser = require("../middleware/fetchuser");
const { Create_User, Login, Get_User, Update_Profile, Delete_Account } = require("../Controllers/AuthController")

router.post('/createuser', Create_User);
router.post('/login', Login)
router.get('/getuser', fetchuser, Get_User);
router.put('/updateprofile', fetchuser, Update_Profile);
router.delete('/deleteaccount', fetchuser, Delete_Account);

module.exports = router;
