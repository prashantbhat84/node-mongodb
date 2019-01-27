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
	/* 
		db.collection('Todos').find({
			_id: new ObjectId('5c4d409e8267750230377f0e')
		}).toArray().then(docs => {
			console.log('Todos');
			console.log(JSON.stringify(docs, undefined, 2));


		}, err => {
			console.log(err);

		}) */

	db.collection('Users').find({
		name: 'Aadrita Bhat  Khosla'
	}).count().then(count => {
		console.log(`Todos count:${count}`);
		//	console.log(JSON.stringify(docs, undefined, 2));




	}, err => {
		console.log(err);

	})
	client.close();

})