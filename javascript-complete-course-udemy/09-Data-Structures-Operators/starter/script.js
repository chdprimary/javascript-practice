'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  order: function (starterIdx, mainIdx) {
    return [this.starterMenu[starterIdx], this.mainMenu[mainIdx]];
    console.log(`You ordered: ${this.starterMenu[starterIdx]}`);
    console.log(`You ordered: ${this.mainMenu[mainIdx]}`);
  },

  // Used below for showing how to call a function when you don't know the order of args
  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = '20:00',
    address,
  }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}.`
    );
  },
};

// // basic destructuring
// const [starter, main] = restaurant.order(1, 2);
// console.log(starter, main);

// // nested destructuring
// const nested = [2, 3, [5, 6]];
// const [i, , [j, k]] = nested;
// console.log(i, j, k);

// // defaults
// const [p = 1, q = 2, r = 3] = [8, 9];
// console.log(p, q, r);

// // object destructuring
// const { name, openingHours, categories } = restaurant;
// console.log(name, openingHours, categories);

// // object destructuring with custom names
// const {
//   name: restaurantName,
//   openingHours: hours,
//   categories: tags,
// } = restaurant;
// console.log(restaurantName, openingHours, categories);

// // object destructuring with defaults
// const { menu = [], starterMenu: starters = [] } = restaurant;
// console.log(menu, starters);

// // overwriting preexisting variables
// let a = 111;
// let b = 999;
// const obj = { a: 23, b: 7, c: 14 };

// ({ a, b } = obj);
// console.log(a, b);

// // Nested objects
// const {
//   fri: { open: o, close: c },
// } = restaurant.openingHours;
// console.log(o, c);

// // calling a function when you don't know the order of arguments
// // just pass an object of the arguments
// restaurant.orderDelivery({
//   time: '22:30',
//   address: 'Via del Sole, 21',
//   mainIndex: 2,
//   starterIndex: 2,
// });

// // Same as above but using defaults
// restaurant.orderDelivery({
//   address: 'Via del Sole, 21',
// });

// // Firefox PIP @ regular speed (for following along) is the way to go!

// const arr = [7, 8, 9];
// const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
// console.log(badNewArr);

// // wrong way to combine arrays
// let newArr = [1, 2, arr]
// // newArr now holds reference to the entire arr
// console.log(newArr);
// // using the spread operator to combine arrays
// newArr = [1, 2, ...arr];
// // ... is the same as writing ...
// newArr = [1, 2, 7, 8, 9];

// // this prints the object itself
// console.log(newArr);
// // this prints the integer values inside
// console.log(...newArr);
// // it's equivalent to writing:
// console.log(1, 2, 7, 8, 9);

// // spread operator vs desstructuring
// // spread operator is used when you want all elements of array as VALUES
// // destructuring is when you want to selectively stuff array els into VARS

// // shallow copying - similar to Object.assign({}, objToCopy)
// const mainMenuShallowCopy = [...restaurant.mainMenu];

// // spread operator can be used on any iterables, plus objects
// // iterables include arrays, strings, maps, sets, but NOT objects 
// // although custom objects may implement the Iterable protocol

// const str = `Jonas`;
// const letters = [...str, ' ', 'is a muffin head.'];
// console.log(letters);

// // Array.join is a function
// console.log(letters.join(''));
// // str.join is not a function
// // console.log(str.join(''));

// // Can only use spread where multiple values separated by commas are expected
// // Mostly building literals and passing arguments

// // spreading objects
// const newRestaurant = {foundingYear: 1998, ...restaurant, founder: "Guiseppe"}
// console.log(newRestaurant);

// // shallow copying objects
// const restaurantCopy = {...restaurant};
// restaurantCopy.name = "Overwritten";
// console.log(restaurantCopy.name);
// console.log(restaurant.name);

// REST operator
// Spread is on RIGHT side of =
const myArr = [1, 2, ...[3, 4]];

// This is rest because it's on the LEFT side of =
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others);

// RHS gets evaluated first, then LHS
const [pizza, , risotto, ...otherFood] = [...restaurant.mainMenu, ...restaurant.starterMenu];

// ERRORS - rest must come last and there can only be one
// const [pizza, , risotto, ...otherFood, wontwork] = [...restaurant.mainMenu, ...restaurant.starterMenu];

// Rest with objects
const {thu, fri, ...weekendHours} = restaurant.openingHours;
console.log(thu, fri, weekendHours);

// rest with functions
const add = function(...args) {
  return args.reduce((a,b) => a+b);
}
console.log(add(2,3));
console.log(add(5,3,7,2));

// spreading for use in a function that uses rest
const someArgs = [10, 5, 15];
console.log(add(...someArgs));

// why not just write an add function that accepts an array and loop over that?
// this way, the function can be called with individual values OR an array