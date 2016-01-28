var express = require("express");
var mongojs = require('mongojs');
var bodyParser = require('body-parser');
var mongoose  = require('mongoose');
var session = require('express-session');
var Schema = mongoose.Schema;

mongoose.connect('mongodb://localhost/erp_system');
var app = express();

var userDetaisSchema = new mongoose.Schema({
	name: String,
	email: String,
	password: String,
	types: { type: Number, default: 1},
	created_date: { type: Date, default: Date.now }
});

var UserTable = mongoose.model('users',userDetaisSchema);

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use(session({secret: 'lingu'}));

app.get('/',function(req,res){
	res.sendFile(__dirname + '/public/views/index.html');
});

require('./router/userLoginSignupRoute')(app,UserTable,session);
//module.exports=UserTable;
app.listen(8000);
console.log("Server running on 8000");
