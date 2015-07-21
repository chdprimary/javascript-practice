var fs = require('fs');
var fileBuffer = fs.readFileSync(process.argv[2].toString()).toString();
var splitFileBuffer = fileBuffer.split('\n');

// print number of newlines contained in 'fileBuffer' (# elements in 'splitFileBuffer' - 1)
console.log(splitFileBuffer.length-1);