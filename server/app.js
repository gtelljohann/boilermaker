const express = require('express');
const app = express();

const path = require('path');
const morgan = require('morgan');
const bodyParser = require('body-parser');

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, '../public')));
app.use('/api', require('./routes'));

app.use('*', function(req, res, next) {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

app.use(function(err, req, res, next) {
  res.status(err.status || 500).json(err);
})

app.listen(3000, function() {
  console.log('we listening');
});

