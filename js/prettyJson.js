var fs=require('fs');
console.log("Reading from file ");
var input=fs.readFileSync("input.json",'utf8');
//console.log(input);
console.log("Pretty formatting the file ");
var output=JSON.stringify(JSON.parse(input), null, 2);
fs.writeFileSync('output.json',output,'utf8');

console.log('Written to output.json  ');
