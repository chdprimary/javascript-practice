var fs = require('fs');

var callback = function(err, data) {
  var splitFileBuffer; 
  if (data) {
    splitFileBuffer = data.toString().split('\n');
    // print number of newlines contained in 'fileBuffer' (# elements in 'splitFileBuffer' - 1)
    console.log(splitFileBuffer.length - 1);
  }
};

fs.readFile(process.argv[2].toString(), callback);