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

  order: function(starterIdx, mainIdx) {
    return [this.starterMenu[starterIdx], this.mainMenu[mainIdx]];
    console.log(`You ordered: ${this.starterMenu[starterIdx]}`);
    console.log(`You ordered: ${this.mainMenu[mainIdx]}`);
  },
};

// basic destructuring
const [starter, main] = restaurant.order(1,2);
console.log(starter, main);

// nested destructuring
const nested = [2, 3, [5, 6]];
const [i, ,[j, k]] = nested;
console.log(i, j, k);

// defaults
const [p=1, q=2, r=3] = [8, 9];
console.log(p, q, r);