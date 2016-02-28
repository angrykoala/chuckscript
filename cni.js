/*
Chuck Norris Interpreter
by @ demiurgosoft
Allows you to execute CNPL code
Usage: node cni.js myprogram.cnpl
*/


var bigInt = require('big-integer');
var fs = require('fs');
var process = require('process');
var ABC = require('./lib/abc.js');

var regex=/\[0\]{\d+}/;


var cnCode = process.argv[2];
if (!cnCode) return console.log("Usage: node cni.js program.cnpl");
fs.readFile(cnCode, 'utf8', function(err, data) {
	if (err) {
		return console.log(err);
	}
	console.log(data);
	data=data.match(regex)[0];
	console.log(data);

	var value = data.slice(4, -1);
	var num = bigInt(value);

	var b1 = num.toString(2);
	var b2 = b1.substring(1);
	var txt = ABC.toAscii(b2);

	eval(txt);
});
