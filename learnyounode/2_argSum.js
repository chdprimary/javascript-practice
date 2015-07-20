//var total = 0;
//for(var i = 2; i < process.argv.length; i++) {
//  total += +process.argv[i];
//}
//console.log(total);

// Sums each number in process.argv from index 2 onward
console.log(
  process.argv.reduce(function(p,c,i) {
    if (i >= 2) {
      return Number(p) + Number(c);
    } else {
      return 0;
    }
  });
);