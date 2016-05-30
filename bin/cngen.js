#!/usr/bin/env node

/*
Chuck Norris Code Generator
by @demiurgosoft <demiurgosoft@hotmail.com>
Allows you to execute CNPL code
Usage: node cngen.js myprogram.js newcode.cnpl
*/

var fs = require('fs');
var process = require('process');

var chuckScript = require('../index');

var text = process.argv[2];
var out = process.argv[3];

if (!text || !out) return console.log("Usage: node cngen.js [myprogram.js] [newcode.cnpl]");

fs.readFile(text, 'utf8', function(err, data) {
    if (err) {
        return console.log(err);
    }
    var cnpl = chuckScript.compile(data);
    fs.writeFile(out, cnpl, function(err) {
        if (err) {
            return console.log(err);
        }

        return console.log("cnpl succesfully generated");
    });

});
