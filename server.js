var express = require('express'),
	app = express(),
	port = process.env.PORT || 3000, 
	mongoose = require('mongoose'), 
	Task = require('./api/models/todoListModel'), // loading model
	bodyParser = require('body-parser') //install with npm 

// connect mongoose instance to url
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/Tododb', { useUnifiedTopology: true, useNewUrlParser: true });


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// adding middleware
app.use(function(req, res) {
  res.status(404).send({url: req.originalUrl + ' not found'})
});

// registering routes
var routes = require ('./api/routes/todoListRoutes');
routes(app);

app.listen(port);

console.log(`todo list RESTful API server started on: ${port}`);
