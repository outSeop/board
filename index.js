var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var app = express();

mongoose.connect('mongodb+srv://inssong:seop@cluster0.5wcrw.mongodb.net/myFirstDatabase?retryWrites=true&w=majority');
var db = mongoose.connection;
db.once('open', () => {
	console.log('DB connected');
});
db.on('error', (err) => {
	console.log('DB ERROR: ', err);
});

app.set('view engine', 'ejs');
app.use(express.static(__dirname+'/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(methodOverride('_method'));

app.use('/', require('./routes/home'));
app.use('/posts', require('./routes/post'));

var port = 3000;
app.listen(port, () => {
	console.log('server on! http://localhost:'+port);
});
