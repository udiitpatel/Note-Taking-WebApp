const { User, Note } = require('../modules/User');


const Get_All_Notes = async (req, res) => {
    try {
        const user = await User.findById(req.userID);
        res.json(user.Notes);
    } catch (error) {
        res.json({ error });
    }
}


const Add_Note = async (req, res) => {
    try {
        const userID = req.userID;
        const note = new Note(req.body);
        const data = await User.findByIdAndUpdate(userID, {
            $push: {
                Notes: note
            }
        }, { new: true });
        res.json(data);
    } catch (error) {
        res.json(error);
    }
}


const Delete_Note = async (req, res) => {
    try {
        const userID = req.userID;
        const id = req.params.id;
        await User.findByIdAndUpdate(userID, {
            $pull: { Notes: { _id: id } }
        }, { new: true });

        res.json({ ok: true });
    } catch (error) {
        res.json({ error });
    }
}


const Edit_Note = async (req, res) => {
    const { title, tag, description } = req.body;
    try {
        const userID = req.userID;
        const id = req.params.id;
        const data = await User.findById(userID);
        let notes = data.Notes;
        for (let i = 0; i < notes.length; i++) {
            if (notes[i].id === id) {
                notes[i].title = title;
                notes[i].tag = tag;
                notes[i].description = description;
            }
        }
        await User.findByIdAndUpdate(userID, {
            $set: {
                Notes: notes
            }
        });

        res.json({ ok: true });
    } catch (error) {
        res.json({ error });
    }
}


const Get_Note = async (req, res) => {
    try {
        const userID = req.userID;
        const id = req.params.id;
        const data = await User.findById(userID);
        let notes = data.Notes;
        for (let i = 0; i < notes.length; i++) {
            if (notes[i].id === id) {
                return res.json(notes[i]);
            }
        }
        return res.json({ title: "title", tag: "tag", description: "description" });
    } catch (error) {
        res.json({ error });
    }
}


module.exports = { Get_All_Notes, Add_Note, Delete_Note, Edit_Note, Get_Note };