const express = require("express");
const fetchuser = require("../middleware/fetchuser");
const { Get_All_Notes, Add_Note, Delete_Note, Edit_Note, Get_Note } = require("../Controllers/NoteController");
const router = express.Router();

router.get('/fetchallnotes', fetchuser, Get_All_Notes);
router.post('/addnotes', fetchuser, Add_Note);
router.delete("/delete/:id", fetchuser, Delete_Note);
router.put("/edit/:id", fetchuser, Edit_Note)
router.get("/getnote/:id", fetchuser, Get_Note)

module.exports = router;