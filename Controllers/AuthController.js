const { User } = require('../modules/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const secretString = "yeSecretNhiHai";


const Create_User = async (req, res) => {
    const { name, email, password, cpassword } = req.body;
    try {
        let user = await User.findOne({ email });
        if (user) {
            return res.json({ error: { email: "User Already Exists , Please Login" } });
        }
        if (password !== cpassword) {
            return res.json({ error: { password: "Entered passwords are different" } });
        }
        let salt = await bcrypt.genSalt();
        let securePassword = await bcrypt.hash(password, salt);
        user = new User({
            name,
            email,
            password: securePassword
        });
        const authToken = jwt.sign({ id: user.id }, secretString);
        await user.save();
        res.json({ ok: true, authToken });
    }
    catch (error) {
        return res.json({ error });
    }
}


const Login = async (req, res) => {
    const { email, password } = req.body;
    try {
        let user = await User.findOne({ email });
        if (!user) {
            return res.json({ error: { email: "User does not exist , please Sign Up" } });
        }
        const passwordCompare = await bcrypt.compare(password, user.password);
        if (!passwordCompare) { return res.json({ error: { password: "Password is incorrect" } }); }
        const authToken = jwt.sign({ id: user.id }, secretString);
        res.json({ ok: true, authToken });

    } catch (error) {
        res.json({ error });
    }
}


const Get_User = async (req, res) => {
    try {
        const userID = req.userID;
        let user = await User.findById(userID).select("-password");
        res.json(user);
    } catch (error) {
        res.json({ error });
    }
}

const Update_Profile = async (req, res) => {
    const { name, email } = req.body;
    try {
        const userID = req.userID;
        await User.findByIdAndUpdate(userID, {
            $set: {
                name: name,
                email: email
            }
        })
        res.json({ ok: true });
    } catch (error) {
        res.json({ error });
    }

}

const Delete_Account = async (req, res) => {
    try {
        const userID = req.userID;
        await User.findByIdAndDelete(userID);
        res.json({ ok: true });
    } catch (error) {
        res.json({ error });
    }
}

module.exports = { Create_User, Login, Get_User, Update_Profile, Delete_Account };