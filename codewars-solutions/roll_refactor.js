//Problem link: http://www.codewars.com/kata/549cb9c0c36a02ce2e000156
//You'll need an account to follow the link successfully

var roll = function (input, verbose) {
  "use strict";

  //If input isn't a string with something in it, bail
  if (input === "" || typeof input !== "string") { return false; }
  //Get rid of any whitespace in the input
  input = input.split(" ").join("");
  
  //Split on "d"
  var a = input.toString().split("d");
  //If there was no "d", bail
  if (a.length === 1) { return false; }
  
  //Set num_die to whatever is before "d". If nothing was there, it is an implied 1
  var num_die = (a[0] === "") ? 1 : parseInt(a[0]);
  //If the something before the "d" is NaN, bail
  if (isNaN(num_die)) { return false; }
  
  //Set num_sides to the whatever is AFTER the "d" and BEFORE the first non alphanumeric char
  var num_sides = parseInt((a[1].split(/\W/))[0]);
  //If the something AFTER the "d" and BEFORE the first non-alphanumeric char is NaN, bail
  if (isNaN(num_sides)) { return false; }
  
  //Set modifier to the JS evaluation of the expression that comes AFTER the stuff we set num_sides to
  var modifier;
  try {
    modifier = eval(a[1].substring(num_sides.toString().length));
  //If there any errors with that expression evaluation, it wasn't a normal arithmetic expression, so we bail
  } catch (e) {
     if (e instanceof SyntaxError || e instanceof ReferenceError) { return false; } 
  }
  //If there wasn't ANYTHING afer the number we set num_sides to, it is an implied 0
  if (modifier === undefined) {
    modifier = 0;
  }
  
  //We roll our num_sided die num_die times, record results of each roll in dice[]
  var dice = [];
  for(var i=0;i<num_die;i+=1) {
    dice.push(Math.round(Math.random()*(num_sides-1))+1);
  }
  
  //Summed mode: return sum of all die roll values + modifier.
  if(verbose === undefined) {
    var sum = dice.reduce(function(t,n) { return t+n; });
    return sum + modifier;
  //Verbose mode: return each dice roll value and the modifier value.
  } else {
    return {dice, modifier};
  }
};