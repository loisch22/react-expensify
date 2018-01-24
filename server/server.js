// express application
const path = require('path');
const express = require('express');
const app = express();
const publicPath = path.join(__dirname, '..', 'public');

// where files should live
app.use(express.static(publicPath)); // customize exp servers to register middleware - runs for each request - serves all aspects from publicPath dir

// set up function to run when get request run in server
app.get('*', (req, res) => {
  res.sendFile(path.join(publicPath, 'index.html'));
});

// what port to listen on - port number
app.listen(3000, () => {
  console.log('Server is up!');
});
