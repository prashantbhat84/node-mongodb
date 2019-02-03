const {
	SHA256
} = require('crypto-js');
const jwt = require('jsonwebtoken');
var data = {
	id: 10
};
var token = jwt.sign(data, '1234567890pwjfn');
console.log(token);
var decoded = jwt.verify(token, '1234567890pwjfn');
console.log(decoded);


/* 
var message = 'I am user no 3';
var hash = SHA256(message).toString();
console.log(hash);
console.log(message);
var data = {
	id: 4
};
var token = {
	data,
	hash: SHA256(JSON.stringify(data) + 'somesecret').toString()
};
token.data.id = 5;
token.hash = SHA256(JSON.stringify(token.data)).toString();
var resultHash = SHA256(JSON.stringify(token.data) + 'somesecret').toString();

if (resultHash === token.hash) {
	return console.log('Data was not changed');

}
console.log('Data was changed'); */