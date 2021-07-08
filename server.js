const express = require('express'),
    http = require('http'),
    app = express();

require('dotenv').config();

//Store all HTML files in view folder.
app.use(express.static(__dirname + '/views'));

//Store all JS and CSS in Scripts folder.
app.use(express.static(__dirname + '/public'));

//Start the router
require('./routes/')(app);

const port = process.env.PORT || 5000,
    server = http.createServer(app);
server.listen(port, () => {
    console.log(`Server running on port ${port}.. Welcome to the World of Asmovic.`);
});