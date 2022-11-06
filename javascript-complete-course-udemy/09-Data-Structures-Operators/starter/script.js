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
  orderDelivery: function({starterIndex=1, mainIndex=0, time='20:00', address}) {
    console.log(`Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}.`);
  }
};

// basic destructuring
const [starter, main] = restaurant.order(1, 2);
console.log(starter, main);

// nested destructuring
const nested = [2, 3, [5, 6]];
const [i, , [j, k]] = nested;
console.log(i, j, k);

// defaults
const [p = 1, q = 2, r = 3] = [8, 9];
console.log(p, q, r);

// object destructuring
const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

// object destructuring with custom names
const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, openingHours, categories);

// object destructuring with defaults
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

// overwriting preexisting variables
let a = 111;
let b = 999;
const obj = {a: 23, b: 7, c: 14};

({a, b} = obj);
console.log(a, b);

// Nested objects
const {fri: {open: o, close: c} } = restaurant.openingHours;
console.log(o, c);

// calling a function when you don't know the order of arguments
// just pass an object of the arguments
restaurant.orderDelivery({
  time: '22:30',
  address: 'Via del Sole, 21',
  mainIndex: 2,
  starterIndex: 2,
});

// Same as above but using defaults
restaurant.orderDelivery({
  address: 'Via del Sole, 21',
});