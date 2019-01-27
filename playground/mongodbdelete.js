//const MongoClient = require('mongodb').MongoClient;
const {
	MongoClient,
	ObjectId
} = require('mongodb');




MongoClient.connect('mongodb://localhost:27017/TodoApp', {
	useNewUrlParser: true
}, (err, client) => {
	if (err) {
		return console.log('unable to connect to mongodb server');


	}
	console.log('connection successful');
	const db = client.db('ToDoApp');
	//delete MaNY
	/* db.collection('Users').deleteMany({
		name: "Prashant Bhat"
	}).then(result => {
		console.log(result);

	}) */
	//deleteone
	/* db.collection('Todos').deleteOne({
		completed: false
	}).then(result => {
		console.log(result);

	}) */
	//findone and delete
	/* db.collection('Todos').findOneAndDelete({
		completed: true
	}).then(result => {
		console.log(result);

	}) */


	// challenge
	/* db.collection('Users').findOneAndDelete({
		_id: new ObjectId("5c4d437ede0b2512e0b711ed")
	}).then(result => {
		console.log(result);

	}) */
	db.collection('Users').deleteMany({
		age: 2
	}).then(result => {
		console.log(result);

	})

	//client.close();

})