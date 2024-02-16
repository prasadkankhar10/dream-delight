const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse form data
app.use(bodyParser.urlencoded({ extended: true }));

// Mock user credentials (replace with actual database)
const users = [
    { username: 'user1', password: 'password1' },
    { username: 'user2', password: 'password2' }
];

// Login endpoint
app.post('/login', (req, res) => {
    const { username, password } = req.body;

    // Check if user credentials are valid
    const user = users.find(user => user.username === username && user.password === password);
    if (user) {
        res.status(200).send('Login successful');
    } else {
        res.status(401).send('Invalid username or password');
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
