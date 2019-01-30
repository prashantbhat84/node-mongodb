var {
	mongoose
} = require('./db/mongoose');
var {
	Todo
} = require('./models/todo');
var {
	User
} = require('./models/user');
var port = process.env.PORT || 3000;
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
app.use(bodyParser.json());

app.post('/todos', (req, res) => {
	var todo = new Todo({
		text: req.body.text
	});
	todo.save().then((doc) => {
		res.send(doc);
	}, err => {
		res.status(400).send(err);

	})

});
app.get('/todos', (req, res) => {


	Todo.find().then((todos) => {
		res.send({
			todos
		})
	}, err => {
		res.status(400).send(err);
	});
});
app.get('/todos/:id', (req, res) => {
	var id = req.params.id;
	
	Todo.findById(id).then((todo) => {
		res.status(200).send(todo);
	})
})



app.listen(port, () => {
	console.log(`server listening on port:${port}`);

});
module.exports = {
	app
};