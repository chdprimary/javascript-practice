'use strict';

// Constructor functions
// what happens under the hood when you call `new Constructor(...)`
// 1. New {} is created
// 2. function is called, this = {}
// 3. {} linked to prototype
// 4. function automatically returns {}
const Person = function(firstName, birthYear) {
    // Instance properties
    this.firstName = firstName;
    this.birthYear = birthYear;

    // Never create a method inside a constructor function
    // Each copy would carry a reference to the function
    // Which is not how prototypal inheritance should work since the prototype owns the methods
    // this.calcAge = function() {
    //     console.log(2037 - this.birthYear);
    // };
}

const jonas = new Person('Jonas', 1991);
console.log(jonas);

const matilda = new Person('Matilda', 2017);
const jack = new Person('Jack', 1975);
console.log(matilda, jack);

console.log(jonas instanceof Person);

// Instead of creating the method in the constructor
// Create it on the constructor prototype property
Person.prototype.calcAge = function() {
    console.log(2037 - this.birthYear);
};
console.log(jonas.calcAge());

// The instance.__proto__ is the same object as the constructor.prototype object
console.log(jonas.__proto__);
console.log(Person.prototype)
console.log(jonas.__proto__ === Person.prototype);

// Note that the constructor.prototype property is not the constructor's own prototype!
console.log(Person.__proto__);

console.log(Person.prototype.isPrototypeOf(jonas));

Person.prototype.species = 'Homo Sapiens';
console.log(jonas.species, matilda.species);
console.log(jonas.hasOwnProperty('firstName'));
console.log(jonas.hasOwnProperty('species'));