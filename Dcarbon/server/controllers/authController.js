const jwt = require('jsonwebtoken');
const users = require('../models/userModel'); // Dummy user model

exports.login = (req, res) => {
    const { email, password } = req.body;
    
    // Find user by email and password
    const user = users.find(u => u.email === email && u.password === password);
    
    if (user) {
        // Generate a JWT token for the user
        const token = jwt.sign({ email: user.email }, 'your-secret-key', { expiresIn: '1h' });
        return res.json({ success: true, token });
    } else {
        return res.json({ success: false, message: "Invalid login credentials" });
    }
};
