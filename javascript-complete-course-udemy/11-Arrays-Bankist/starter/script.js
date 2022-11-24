'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

const displayMovements = function (movements) {
  containerMovements.innerHTML = '';

  movements.forEach(function (mov, i) {
    const type = mov >= 0 ? `deposit` : `withdrawal`;
    const html = `
    <div class="movements__row">
      <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
      <div class="movements__value">${mov}</div>
    </div>
    `;
    containerMovements.insertAdjacentHTML('afterbegin', html);
    // document.createElement('div', )
  });
};
displayMovements(account1.movements);
// you can log the innerHTML too (case is important)
console.log(containerMovements.innerHTML);

const createUsernames = function (accounts) {
  accounts.forEach((account) => {
    account.username = account.owner
    .toLowerCase()
    .split(' ')
    .map(word => word.at(0))
    .join('');
  });
  return accounts;
}
console.log(createUsernames(accounts));

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const deposits = movements.filter((movement) => movement > 0);
const withdrawals = movements.filter((movement) => movement < 0);

// reduce - a bit different, takes a start value and callback takes an accumulator
const calcDisplayBalance = function(movements) {
  const balance = movements.reduce(function(accum, curr, i, arr) {
    return accum + curr;
  }, 0);
  labelBalance.textContent = `${balance} EUR`;
}
calcDisplayBalance(account1.movements);
/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);


// forEach callback gets called for each element
// forEach passes in curr, idx, arr (c,i,a - I remember this)
// you CAN'T use continue or break with forEach
movements.forEach(function (current, index, array) {
  if (current > 0) {
    console.log(`Movement ${index + 1}: You deposited ${current}`);
  } else {
    console.log(`Movement ${index + 1}: You withdrew ${Math.abs(current)}`);
  }
});
// can also use forEach on maps (curr, key, map) and sets (curr, _, set)

/////////////////////////////////////////////////

let arr = ['a', 'b', 'c', 'd', 'e'];

console.log(arr.slice(2));
console.log(arr.slice(2, 4));

// this creates a shallow copy of an array (just like [...arr])
console.log(arr.slice());

// splice mutates the original array
// it can start deleting things at a certain index, then add new things at that index
// exactly what it does depends on args passed
// it also returns what it spliced
// this says, starting at index 1, delete 2 elements, then add the element "f"
arr.splice(2, 1, 'f');
console.log(arr);

// reverse
const arr2 = ['j', 'k', 'l'];
arr2.reverse();
console.log(arr2);

// concat
let letters = arr.concat(arr2);
// does same thing as
letters = [...arr, ...arr2];

arr = [23, 11, 64];
console.log(arr.at(0));
// does the same thing as
console.log(arr[0]);
// but .at does some things better like negative indexes and chaining
console.log(arr.at(-1));
// instead of
console.log(arr[arr.length - 1]);
// also .at works on strings
console.log('jonas'.at(1));

// Array.map
const euroToUsd = 1.1;
const movementsUSD = movements.map(mov => mov * euroToUsd);
console.log(movements);
console.log(movementsUSD);
