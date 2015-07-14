//Problem link: http://www.codewars.com/kata/525dfedb5b62f6954d000006
//You'll need an account to follow the link successfully

function scoreThrows(radiuses){
  "use strict";
  var total = 100;
  function hasBiggerThanOrEqualToFive(c) {
    return c >= 5;
  }
   
   //Check radiuses to make sure it is defined with at least one value
   if (radiuses.length === 0 || radiuses === undefined) {
     return 0;
   }
   
   //If any elements are >= 5, we take away the 100 bonus points
   if (radiuses.some(hasBiggerThanOrEqualToFive)) {
     total = 0;
   } 
   
   //Add the appropriate point value for each element, starting from the value of 'total'
   return radiuses.reduce(function(p,c) {
     if (c<5) {
       return p+10;
     } else if (c >= 5 && c <= 10) {
       return p+5;
     } else {
       return p;
     }
   }, total);
}