//Exerise 1 ----

//console.log("HELLO WORLD");


//Exercise 2 ----


var result = 0;

for (var i = 2; i < (process.argv).length; i++) {
result += Number(process.argv[i]);
}

console.log(result);