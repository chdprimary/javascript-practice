'use strict';

/*
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
*/

// class Account {
//   constructor(owner, currency, pin) {
//     this.owner = owner;
//     this.currency = currency;
//     this._pin = pin;
//     this._movements = [];
//     this.locale = navigator.language;
//   }

//   deposit(val) {
//     this._movements.push(val);
//   }

//   withdraw(val) {
//     this.deposit(-val);
//   }

//   _approveLoan(val) {
//     return true;
//   }

//   requestLoan(val) {
//     if (this._approveLoan(val)) {
//       this.deposit(val);
//       console.log('Loan approved');
//     }
//   }
// }

// const acc1 = new Account('Jonas', 'EUR', 1111);

// // acc1.movements.push(250);
// // acc1.movements.push(-140);
// // preferable to write an API here
// acc1.deposit(250);
// acc1.withdraw(140);
// // but still can access movements array, which is a concern
// // can also read PIN from the class
// // these are reasons we need data encapsulation
// // JS doesn't have truly private fields YET although there is a lang proposal
// // Instead you can add an underscore to indicate something is a 'protected' field
// // To communicate developer intention
// Account.prototype.getMovements = function () {
//   return this._movements;
// };

// console.log(acc1.getMovements());

// Now with public/private fields and public/private methods!
// you can also make these static, for 8 possible permutations
// private fields and private methods are VERY new but should work >90% of time
class Account {
  // public fields
  locale = navigator.language;
  _movements = [];

  // private fields
  #movements = [];
  #pin;

  // public methods
  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.#pin = pin;
    this.#movements = [];
    this.locale = navigator.language;
  }

  deposit(val) {
    this.#movements.push(val);
  }

  withdraw(val) {
    this.deposit(-val);
  }

  _approveLoan(val) {
    return true;
  }

  requestLoan(val) {
    if (this._approveLoan(val)) {
      this.deposit(val);
      console.log('Loan approved');
    }
  }

  static helper() {
    console.log('Helper');
  }

  // private methods
  #approveLoan(val) {
    return true;
  }
}

const acc1 = new Account('Jonas', 'EUR', 1111);

// acc1.movements.push(250);
// acc1.movements.push(-140);
// preferable to write an API here
acc1.deposit(250);
acc1.withdraw(140);
// but still can access movements array, which is a concern
// can also read PIN from the class
// these are reasons we need data encapsulation
// JS doesn't have truly private fields YET although there is a lang proposal
// Instead you can add an underscore to indicate something is a 'protected' field
// To communicate developer intention
// Account.prototype.getMovements = function () {
//   return this.#movements;
// };

// won't work
// console.log(acc1.#pin);

// static method, defined on the class not the instance
Account.helper();

// you can achieve chaining by returning the instance in your methods
// ie., `return this`
// acc1.deposit(300).deposit(500).withdraw(35).requestLoan(25000).withdraw(4000);