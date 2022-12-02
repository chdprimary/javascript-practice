'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

///////////////////////////////////////////
///////////////////////////////////////////
///////////////////////////////////////////

/*
console.log(document.documentElement);
console.log(document.head);
console.log(document.body);

console.log(document.getElementsByTagName('button'));

const header = document.querySelector('.header');
const message = document.createElement('div');
message.classList.add('message');
message.innerHTML =
  'We use cookies for improved functionality<button class="btn btn--close-cookie">Got it!</button>';
// header.prepend(message);
header.append(message);
// you can't append twice - an Element can only exist in one place at a time
// however, you can create a copy
header.append(message.cloneNode(true));

header.before(message);
header.after(message);

// message.remove();

message.style.backgroundColor = '#37383d';
message.style.width = '100%';

// we can only get style properties we added programatically
console.log(message.style.display); // doesn't work
console.log(message.style.width); // works
// but we can use getComputedStyle to get the others
console.log(getComputedStyle(message).color);

message.style.height = Number.parseFloat(getComputedStyle(message).height, 10) + 40 + 'px';

const learnMoreBtn = document.querySelector('.btn--scroll-to');
learnMoreBtn.addEventListener('click', function () {
  const section1 = document.querySelector('#section--1');
  section1.scrollIntoView({behavior: 'smooth'});
});

const h1 = document.querySelector('h1');

// h1.addEventListener('mouseenter', function(e) {
//   alert("addEventListener: Great! Works :^)");
// });

// Old way of attaching listeners - there's a property for each event type
// This property will still hold null if you use addEventListener('mouseenter', ...)
// h1.onmouseenter = function(e) {
//   alert("addEventListener: Great! Works :^)");
// };

// You can remove event handlers

const alertH1 = function(e) {
  alert("addEventListener: Great! Works :^)");

  // Great pattern for making an event only happen once
  // But the function must be extracted to a var, you can't copy/paste the function here
  h1.removeEventListener('mouseenter', alertH1);
};

h1.addEventListener('mouseenter', alertH1);

// You can also put event handlers in an HTML attribute itself like <h1 onclick="alert('Hi')"...
// But that's outdated, don't use that pattern anymore
*/

// rgb(255,255,255)
const randomInt = (min,max) => Math.floor(Math.random() * (max - min + 1) + min);
const randomColor = () => `rgb(${randomInt(0,255)}, ${randomInt(0,255)}, ${randomInt(0,255)})`;
console.log(randomColor());

// .addEventListener() does not listen to phase 1 (capturing phase) by default
// usually phase 1 is not that useful, but bubbling phase is useful for delegation
// capturing phase is rarely used these days
// passing 3rd arg of true makes .addEventListener() listen to capturing phase
document.querySelector('.nav__link').addEventListener('click', function (e) {
  this.style.backgroundColor = randomColor();
  console.log(`LINK `, e.target, e.currentTarget);
  console.log(e.currentTarget === this);

  // Stops event from bubbling up
  // In practice, usually not a good idea but can be good for debugging complexity
  e.stopPropagation();
}, true);
document.querySelector('.nav__links').addEventListener('click', function (e) {
  this.style.backgroundColor = randomColor();
  console.log(`CONTAINER `, e.target, e.currentTarget);
  console.log(e.currentTarget === this);
});
document.querySelector('.nav').addEventListener('click', function (e) {
  this.style.backgroundColor = randomColor();
  console.log(`NAV `, e.target, e.currentTarget);
  console.log(e.currentTarget === this);
});