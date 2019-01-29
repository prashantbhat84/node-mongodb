const {
	ObjectID
} = require('mongodb');
const {
	mongoose
} = require('./../server/db/mongoose');
const {
	Todo
} = require('./../server/models/todo');
const {
	User
} = require('./../server/models/user');
var id = '5c5082fb5c761d609cf3fe80';
//checking the validity of id
/* if (!ObjectID.isValid(id)) {
	console.log('id is not valid');

} */
/* Todo.find({
	_id: id
}).then((todos) => {
	console.log('Todos', todos);

});

Todo.findOne({
	_id: id
}).then((todo) => {
	console.log('Todo:', todo)

}); */
/* Todo.findById(id).then((todo) => {
	if (!todo) {
		return console.log('ID not found');

	}
	console.log('Todo by id:', todo);

}).catch(e => {
	console.log(`error:${e}`);

}); */
User.findById("5c5082fb5c761d609cf3fe80").then((user) => {
	if (!user) {
		return console.log('ID not found');

	}
	console.log('Todo by id:', user);

}).catch(e => {
	console.log(`error:${e}`);

})