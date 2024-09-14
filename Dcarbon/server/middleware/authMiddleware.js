const jwt = require('jsonwebtoken');

exports.verifyToken = (req, res, next) => {
    const token = req.headers['authorization'];
    
    if (!token) {
        return res.status(403).json({ success: false, message: "No token provided" });
    }
    
    jwt.verify(token, 'your-secret-key', (err, decoded) => {
        if (err) {
            return res.status(500).json({ success: false, message: "Failed to authenticate token" });
        }
        
        // Save decoded information for future use
        req.userId = decoded.id;
        next();
    });
};
