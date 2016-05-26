#!/usr/bin/env node

/*
Chuck Norris Code Generator
by @ demiurgosoft
Allows you to execute CNPL code
Usage: node cngen.js myprogram.js newcode.cnpl
*/



var bigInt = require('big-integer');
var fs = require('fs');
var process = require('process');

var ABC = require('./lib/abc.js');

var text = process.argv[2];
var out = process.argv[3];

if(!text || !out) return console.log("Usage: node cngen.js [myprogram.js] [newcode.cnpl]");

fs.readFile(text, 'utf8', function(err, data) {
	if (err) {
		return console.log(err);
	}
	var cnc = 1 + ABC.toBinary(data, "");
	var num = bigInt(cnc, 2);
	fs.writeFile(out, "[0]{" + num.toString() + "}", function(err) {
		if (err) {
			return console.log(err);
		}

		return console.log("cnpl succesfully generated");
	});

});
