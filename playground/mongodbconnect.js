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
	/* db.collection('Todos').insertOne({
		text: "something todo 1",
		completed: false
	}, (err, result) => {
		if (err) {
			return console.log('error in insertion');

		}
		console.log(JSON.stringify(result.ops, undefined, 2));

	}); */
	db.collection('Users').insertOne({

		name: "Aadrita Bhat  Khosla",
		age: 2,
		location: 'Bangalore'
	}, (err, result) => {
		if (err) {
			return console.log('error in insertion');

		}
		/*var id = result.ops[0]._id;
		console.log(id.getTimeStamp());

	}); */
	});
	//	client.close();

})