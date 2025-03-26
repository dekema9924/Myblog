

const jwt = require('jsonwebtoken');

const VerifyToken = (req, res, next) => {
    const authHeader = req.headers['authorization'] || req.headers['Authorization'];
    if(authHeader === undefined) return res.status(401).send('Access Denied');
    const token = authHeader && authHeader.split(' ')[1];
    if (!token) return res.status(401).send('Access Denied');
    try {

        //verify token
        jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
            if (err) return res.status(403).send('Invalid token');
            req.user = decoded;
            next();
        });
    } catch (err) {
        res.status(500).send('Internal Server Error');
    }
}
module.exports = VerifyToken;   