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

// ES6 classes are just syntactic sugar on top of the prototype/constructor approach to classes
// Classes are just a special type of function

// Class expression way of creating a class
const PersonClassExpression = class {
}

// Class declaration way of creationg a class
class PersonClassDeclaration {
    // needs to be called 'constructor'
    constructor(firstName, birthYear) {
        this.firstName = firstName;
        this.birthYear = birthYear;
    }

    // No commas between these attributes (vs for eg. objects)
    // even though defined here, lives on the prototype object just like with constructors
    calcAge() {
        console.log(2037 - this.birthYear);
    }
}

const jessica = new PersonClassDeclaration('Jessica', 1996);
console.log(jessica);
jessica.calcAge();

PersonClassDeclaration.prototype.greet = function() {
    console.log(`Hey ${this.firstName}`);
}
jessica.greet();

// Classes are not hoisted (even class declarations!)
// Classes are also first-class citizens!
// Classes are always executed 'in strict mode'

class Student extends PersonClassDeclaration {
    constructor(firstName, birthYear, course) {
        // super() call needs to happen first
        super(firstName, birthYear);
        this.course = course;
    }

    introduce() {
        console.log("Introduce method");
    }
}

const martha = new Student('Martha', 2012, 'CS');
martha.greet();
martha.introduce();
