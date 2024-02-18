const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

// Mock database (replace with actual database logic)
const users = [];

// Signup endpoint
app.post('/signup', (req, res) => {
    const { username, password } = req.body;

    // Check if username already exists
    if (users.some(user => user.username === username)) {
        return res.status(400).json({ message: 'Username already exists' });
    }

    // Store user in database (for demo, just push to users array)
    users.push({ username, password });

    res.status(201).json({ message: 'Signup successful' });
});

// Login endpoint
app.post('/login', (req, res) => {
    const { username, password } = req.body;

    // Check if user exists in the mock database
    const user = users.find(user => user.username === username && user.password === password);
    if (!user) {
        return res.status(401).json({ message: 'Invalid username or password' });
    }

    res.status(200).json({ message: 'Login successful', user });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
