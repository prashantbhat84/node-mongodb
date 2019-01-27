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


	//find one and update
	db.collection('Todos').findOneAndUpdate({
		_id: new ObjectId('5c4d409e8267750230377f0e')
	}, {
		$set: {
			name: 'Prashant  Bhat'
		},
		$inc: {
			age: 1
		}
	}, {
		returnOriginal: false
	}).then(result => {
		console.log(result);

	})

	//client.close();

})