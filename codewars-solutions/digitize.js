//Problem link: http://www.codewars.com/kata/5583090cbe83f4fd8c000051
//You'll need an account to follow the link successfully

function digitize(n) {
  var a = n.toString().split("").reverse();
  for (var i in a)
    a[i] = parseInt(a[i]);
  return a;
}