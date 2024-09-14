const express = require('express');
const router = express.Router();
const { login, resetPassword } = require('../controllers/authController');

// POST: /api/login
router.post('/login', login);

// POST: /api/reset-password
router.post('/reset-password', resetPassword);

module.exports = router;
