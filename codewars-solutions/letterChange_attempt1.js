//Problem link: http://www.codewars.com/kata/5530b10808541c24330000b4
//You'll need an account to follow the link successfully

function letterChange(str) {
  
  //Store each character in array
  var a = str.split("");
  
  //Handle special cases of " ", "Z", "z"
  for (i=0;i<a.length;i++) {
    if (a[i] === " ") {
      a[i] = " ";
    } else if (a[i] === "z") {
      a[i] = "a";
    } else if (a[i] === "Z")  {
      a[i] = "A"; 
    //increment char code
    } else {
      a[i] = String.fromCharCode( a[i].charCodeAt()+1 );
    }
  }
  
  //Combine each element of array into return string
  return a.join("");
}