//Problem link: http://www.codewars.com/kata/5508b1d298b3238397000a56
//You'll need an account to follow the link successfully

function returnSpecifics(obj){
  var a = [];
  for (i in obj) {
    if(typeof obj[i] == "number") {
      a.push(obj[i]);
    }
  }
  for (i in obj) {
    if(typeof obj[i] == "function") {
      a.push(i.toString());
    }
  }
  if (a.length == 0) { a.push("The Object is Empty"); };
  return a;
}