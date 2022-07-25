const mongoose = require("mongoose");

const NotesSchema = new mongoose.Schema({
    title: {
        type: String, required: true
    },
    description: {
        type: String, required: true
    },
    tag: {
        type: String, default: "general"
    },
    date: {
        type: Date, default: Date.now
    }
})

const Note = mongoose.model('Note', NotesSchema);
module.exports.Note = Note;


const UserSchema = new mongoose.Schema({
    name: {
        type: String, required: true
    },
    email: {
        type: String, required: true, unique: true
    },
    password: {
        type: String, required: true
    },
    date: {
        type: Date, default: Date.now
    },
    Notes: {
        type: [NotesSchema],
        default: []
    }
})

const User = mongoose.model('User', UserSchema);
module.exports.User = User;