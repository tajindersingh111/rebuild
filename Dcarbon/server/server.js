const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const authRoutes = require('./routes/authRoutes');
const resetPasswordRoutes = require('./routes/resetPasswordRoutes');

app.use(bodyParser.json()); // Parse incoming request bodies in a middleware

// Use routes
app.use('/api/auth', authRoutes);
app.use('/api/reset-password', resetPasswordRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
