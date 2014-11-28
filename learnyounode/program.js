//Exerise 1 ----

//console.log("HELLO WORLD");


//Exercise 2 ----


// var result = 0;

// for (var i = 2; i < (process.argv).length; i++) {
// result += Number(process.argv[i]);
// }

// console.log(result);

//Exercise 3 -----

// var fs = require('fs');
// var contents = fs.readFileSync(process.argv[2]);
// var lines = contents.toString().split('\n').length - 1;
// console.log(lines);

//Exercise 4 ----

var fs = require('fs');
var contents = fs.readFile(process.argv[2], function(err, contents){
	var lines = contents.toString().split('\n').length - 1
	console.log(lines)
});
