//Problem link: http://www.codewars.com/kata/5301239dc7c0f49de200092a
//You'll need an account to follow the link successfully

function isPalindrome(str)
{
  //Strip all non-alphanumeric chars, convert to lower case
  str = str.replace(/\W/g,'').toLowerCase();
  
  //Break string into two equally-sized sustrings about a pivot
  var pivot = Math.floor(str.length/2);
  var substr1 = str.substring(0,pivot);
  var substr2 = str.substring(str.length-pivot,str.length);
  
  //Test for equality
  return substr1 === substr2.split('').reverse().join('') ? true : false;
}