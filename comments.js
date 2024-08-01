// Create web server

// Require the modules
const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');

// Create an express app
const app = express();

// Set the port
const port = 3000;

// Use the body-parser middleware
app.use(bodyParser.json());

// Create a new comment
app.post('/comments', (req, res) => {
  // Get the comment from the request body
  const comment = req.body.comment;

  // Get the comments from the comments.json file
  const comments = JSON.parse(fs.readFileSync('comments.json', 'utf8'));

  // Add the new comment to the comments array
  comments.push(comment);

  // Write the comments array back to the comments.json file
  fs.writeFileSync('comments.json', JSON.stringify(comments, null, 2));

  // Send the response
  res.send('Comment added successfully');
});

// Get all the comments
app.get('/comments', (req, res) => {
  // Get the comments from the comments.json file
  const comments = JSON.parse(fs.readFileSync('comments.json', 'utf8'));

  // Send the response
  res.send(comments);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

// comments.json
[]