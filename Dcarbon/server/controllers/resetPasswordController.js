const jwt = require('jsonwebtoken');
const users = require('../models/userModel'); // Dummy user model
const nodemailer = require('nodemailer');
const transporter = require('../config/mailConfig'); // Mail configuration

exports.resetPassword = (req, res) => {
    const { email } = req.body;
    
    // Find user by email
    const user = users.find(u => u.email === email);
    
    if (user) {
        // Generate a reset token
        const resetToken = jwt.sign({ email: user.email }, 'reset-secret-key', { expiresIn: '15m' });
        
        // Send reset link via email (using nodemailer)
        const mailOptions = {
            from: 'your-email@example.com',
            to: email,
            subject: 'Password Reset Request',
            text: `You requested a password reset. Click the link to reset your password: http://localhost:3000/reset-password/${resetToken}`
        };
        
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                return res.json({ success: false, message: "Error sending email" });
            }
            return res.json({ success: true, message: "Password reset instructions sent" });
        });
    } else {
        return res.json({ success: false, message: "Email not found" });
    }
};
