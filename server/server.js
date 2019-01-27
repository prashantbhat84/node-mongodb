var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp', {
	useNewUrlParser: true
});
var Todo = mongoose.model('Todo', {
	text: {
		type: "String",
		required: true,
		minlength: 1,
		trim: true
	},
	completed: {
		type: "Boolean",
		default: false
	},
	completedAt: {
		type: "Number",
		default: null
	}
});

/* var newTodo = new Todo({
	text: 'cook dinner'
});
newTodo.save().then((doc) => {
	console.log(`Saved Todo:${doc}`);

}, e => {
	console.log(`unable to save data:${e}`);

}) */
/* var newTodo1 = new Todo({
	text: "ratna"

});
newTodo1.save().then((doc) => {
	console.log(`Saved Todo:${doc}`);

}, e => {
	console.log(`unable to save data:${e}`);

}); */
var User = mongoose.model("User", {
	email: {
		type: "String",
		required: true,
		trim: true,
		minlength: 1
	}
});
var prashant = new User({
	email: "   "
});
prashant.save().then(doc => {
	console.log(doc);

}, err => {
	console.log(`error :${err}`);

});