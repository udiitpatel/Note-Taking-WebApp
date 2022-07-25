const jwt = require('jsonwebtoken');
const secretString = "yeSecretNhiHai";

const fetchuser = (req, res, next) => {
    const token = req.header('auth-token');
    if (!token) return res.json({ error: "PLease authenticate using valid token" });
    try {
        const data = jwt.verify(token, secretString);
        req.userID = data.id;
        next();
    } catch (error) {
        return json({ error: "PLease authenticate using valid token" });
    }
}

module.exports = fetchuser;
