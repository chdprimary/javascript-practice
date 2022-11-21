'use strict';

const oneWord = function(str) {
    return str.replace(/ /g, '').toLowerCase();
}

const upperFirstWord = function(str) {
    const [first, ...others] = str.split(" ");
    return [first.toUpperCase(), ...others].join(' ');
}

// Higher order function
const transformer = function(str, fn) {
    console.log(`Original string: ${str}`);
    console.log(`Transformed string: ${fn(str)}`);

    console.log(`Transformed by: ${fn.name}`);
}

transformer('Javascript is the best!', oneWord);

// Closure
const greet = (greeting) => {
    return (name) => console.log(`${greeting} ${name}`);
}

greet('Hello')('Jonas');

// The way Jonas did it - didn't know you could chain arrows like this but makes sense
const greetArr = greeting => name => console.log(`${greeting} ${name}`);

greetArr('Hi')('Jonas');

// Recreating the addTax example (omitted) as a higher-order function
const addTax = function (rate) {
    return (value) => value + (rate * value)
}

const addVAT = addTax(0.23);

console.log(addVAT(100));

// call, apply, bind
// what is partial application
// IIFEs for calling functions only one time and private variables in blocks
// console.dir(<obj>) lets you view all the properties (including internal ones) on an object
// In JS double-brackets [[prop]] is like double-underscores in python __prop__
//     although I think most JS objects do contain a __proto__ property
// clsoures don't just apply to returning a function from a function, but also applies to 
// redefining an existing variable from an outer scope to a new function
// in other words, whenever/wherever new functions are created, they always 
// close over the variables from their birthplace
// setTimeout(callback, numMilliseconds), clearTimeout() to delete if setTimeout assigned to variable
// setInterval(callback, numMilliseconds) calls the callback every numMilliseconds instead of once