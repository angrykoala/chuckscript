/*
Chuck Norris Interpreter
by @ demiurgosoft <demiurgosoft@hotmail.com>
Allows you to execute CNPL code
*/

var bigInt = require('big-integer');
var ABC = require('./lib/abc.js');

// cnpl regex
var regex = /\[0\]{\d+}/;

module.exports = {
    // Executes JavaScript cnpl code
    execute: function(code) {
        var txt=this.cnpl2js(code);
        eval(txt);
    },
    // Translates from cnpl to js
    cnpl2js: function(code) {
        var cnpl = code.match(regex)[0];

        var value = cnpl.slice(4, -1);
        var num = bigInt(value);

        var b1 = num.toString(2);
        var b2 = b1.substring(1);
        var txt = ABC.toAscii(b2);

        return txt;
    },
    // Compiles to cnpl code
    compile: function(jsCode){
        var cnc = 1 + ABC.toBinary(jsCode, "");
        var num = bigInt(cnc, 2);
        return "[0]{" + num.toString() + "}";
    }
};
