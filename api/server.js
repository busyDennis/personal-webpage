const express                 = require('express');
const path                    = require('path');

var app                       = express();


app.use('/', express.static(path.join(__dirname, '../src')));
app.use('/bower_components',  express.static(path.join(__dirname, '../bower_components')));

var router                  = express.Router();

// Render index.html everywhere except api routes
app.use('/!(api)', function(req, res) {
  res.sendFile(path.join(__dirname, '../src', 'index.html'));
});

// Server listening on port
var server = app.listen(process.env.PORT || nodeEnvConfigObj.PORT, function() {
    console.log('API server listening on port: ', server.address().port);
  });

app.use('/', router);

module.exports = server;
