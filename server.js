// Import required modules
const express = require('express');
const bodyParser = require('body-parser');

// Create Express app
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON body
app.use(bodyParser.json());

// Mock user data (replace with database logic in a real application)
const users = [
    { username: 'user1', password: 'password1' },
    { username: 'user2', password: 'password2' }
];

// Login endpoint
app.post('/login', (req, res) => {
    const { username, password } = req.body;

    // Find user in the mock data
    const user = users.find(user => user.username === username && user.password === password);

    if (user) {
        res.status(200).json({ message: 'Login successful', user });
    } else {
        res.status(401).json({ message: 'Invalid username or password' });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
