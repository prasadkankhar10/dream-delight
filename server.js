// Import required modules
const express = require('express');
const bodyParser = require('body-parser');

// Create Express app
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON body
app.use(bodyParser.json());

// Serve static files from the 'public' directory
app.use(express.static(__dirname + '/public'));

// Homepage route
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

// Menu page route
app.get('/menu', (req, res) => {
    res.sendFile(__dirname + '/public/menu.html');
});

// About page route
app.get('/about', (req, res) => {
    res.sendFile(__dirname + '/public/about.html');
});

// Contact page route
app.get('/contact', (req, res) => {
    res.sendFile(__dirname + '/public/contact.html');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
