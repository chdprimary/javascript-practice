//Problem link: http://www.codewars.com/kata/558ee8415872565824000007
//You'll need an account to follow the link successfully

function isDivisible(){
  var args = Array.prototype.slice.call(arguments);
  return args.reduce(function(p,c,i) {
    return args[0]%args[i]==0 ? p : false;
  },true);
}