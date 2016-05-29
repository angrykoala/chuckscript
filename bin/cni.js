#!/usr/bin/env node

/*
Chuck Norris Interpreter
by @ demiurgosoft <demiurgosoft@hotmail.com>
Allows you to execute CNPL code
Usage: node cni.js myprogram.cnpl
*/

var fs = require('fs');
var process = require('process');

var chuckScript=require('../index');

var cnCode = process.argv[2];
if (!cnCode) return console.log("Usage: node cni.js program.cnpl");
fs.readFile(cnCode, 'utf8', function(err, data) {
	if (err) {
		return console.log(err);
	}

	chuckScript.execute(data);
});
