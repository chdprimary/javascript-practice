'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

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

btnScrollTo.addEventListener('click', function (e) {
  const s1coords = section1.getBoundingClientRect();
  console.log(s1coords);
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

///////////////////////////////////////////
// Page navigation

// Without using event delegation
// If we had a bunch of nav links, this wouldn't scale well
// We're making N copies of the callback function
// document.querySelectorAll('.nav__link').forEach(function (el) {
//   el.addEventListener('click', function (e) {
//     e.preventDefault();
//     const id = this.getAttribute('href');
//     document.querySelector(id).scrollIntoView({behavior: 'smooth'});
//   })
// });
*/

// In event delegation, we add the listener to a common parent element
// and catch the event once it bubbles up there
// Another great use for event delegation is to add handlers to elements that
// don't exist on the page yet (by instead attaching them to an existing parent)
document.querySelector('.nav__links').addEventListener('click', function (e) {
  e.preventDefault();
  if (e.target.classList.contains('nav__link')) {
    const anchor = e.target.getAttribute('href');
    document.querySelector(anchor).scrollIntoView({ behavior: 'smooth' });
  }
});

// Should probably consult the exercises document since this section doesn't have challenges

// TABBED COMPONENT
const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');

tabsContainer.addEventListener('click', function (e) {
  const clicked = e.target;
  const button = clicked.closest('button.operations__tab');

  if (!button) return;

  tabs.forEach(el => el.classList.remove('operations__tab--active'));
  button.classList.add('operations__tab--active');

  const activeContent = document.querySelector(
    `.operations__content--${button.dataset.tab}`
  );

  tabsContent.forEach(el => el.classList.remove('operations__content--active'));
  activeContent.classList.add('operations__content--active');
});

// Menu fade in / out

const nav = document.querySelector('.nav');
const links = document.querySelectorAll('nav__link');

nav.addEventListener('mouseover', function (e) {
  if (e.target.classList.contains('nav__link')) {
    const link = e.target;
    // const siblings = link.closest('.nav__links').children;
    const siblings = link.closest('.nav__links').querySelectorAll('.nav__link');
    const logo = link.closest('.nav').querySelector('img');
    siblings.forEach(el => {
      if (el !== link) el.style.opacity = '0.5';
    });
    logo.style.opacity = '0.5';
  }
});

nav.addEventListener('mouseout', function (e) {
  if (e.target.classList.contains('nav__link')) {
    const link = e.target;
    const siblings = link.closest('.nav__links').querySelectorAll('.nav__link');
    const logo = link.closest('.nav').querySelector('img');
    siblings.forEach(el => (el.style.opacity = '1.0'));
    logo.style.opacity = '1.0';
  }
});

// Sticky nav
// window.addEventListener('scroll', function (e) {
//   const section1CoordY =
//     document.querySelector('#section--1').getBoundingClientRect().top +
//     window.pageYOffset;

//   if (window.scrollY > section1CoordY) nav.classList.add('sticky');
//   else nav.classList.remove('sticky');
// });

// Same sticky nav, but using intersection observer API
const obsOptions = {
  root: null,
  threshold: 0,
};

const header = document.querySelector('.header');
const observer = new IntersectionObserver(function (entries, observer) {
  const entry = entries.at(0);
  if (!entry.isIntersecting) nav.classList.add('sticky');
  else nav.classList.remove('sticky');
}, obsOptions);
observer.observe(header);

// Revealing Elements on Scroll
// const allSections = document.querySelectorAll('section');
// const revealSection = function(entries, observer) {
//   const [entry] = entries;
//   if (!entry.isIntersecting) return;
//   entry.target.classList.remove('section--hidden');
//   observer.unobserve(entry.target);
// }
// const sectionObserver = new IntersectionObserver(revealSection, {
//   root: null,
//   threshold: 0.15,
//   rootMargin: '200px',
// });
// allSections.forEach(function(section) {
//   section.classList.add('section--hidden');
//   sectionObserver.observe(section);
// });

// Lazy loading images
const imgTargets = document.querySelectorAll('img[data-src]');
const loadImg = function(entries, observer) {
  const [entry] = entries;
  if (!entry.isIntersecting) return;
  entry.target.src = entry.target.dataset.src;
  // below works, but not perfectly
  // entry.target.classList.remove('lazy-img');
  // actually better to remove the blur class once the 'load' event has fired
  // otherwise slow clients will see the blur removed before the new src has finished downloading
  // can simulate this issue with network throttling to 'fast 3G' in dev tools
  entry.target.addEventListener('load', e => e.target.classList.remove('lazy-img'));
  observer.unobserve(entry.target);
};
const imgObserver = new IntersectionObserver(loadImg, {
  root: null,
  threshold: 1,
});
imgTargets.forEach(target => imgObserver.observe(target));

// Carousel (Jonas calls this a slider)
const slider = function () {
  const slider = document.querySelector('.slider');
  const slides = document.querySelectorAll('.slide');
  const buttonLeft = document.querySelector('.slider__btn--left');
  const buttonRight = document.querySelector('.slider__btn--right');
  const dotsContainer = document.querySelector('.dots');

  // Initial conditions
  // Dustin says most sliders are done like this (side-by-side w/ overflow hidden, then translateX)
  slides.forEach((slide, idx) => slide.style.transform = `translateX(${100*(idx)}%)`);
  let slideIdx = 0;
  let minSlideIdx = 0;
  let maxSlideIdx = slides.length-1;
  // TODO: remove this later
  // slider.style.transform = 'scale(0.3)';
  // slider.style.overflow = 'visible';

  // Create some dot position indicator buttons
  const createDots = function() {
    slides.forEach(function(_, idx) {
      const html = `<button class="dots__dot" data-slide="${idx}"></button>`;
      dotsContainer.insertAdjacentHTML('beforeend', html);
      // dotsContainer.after(html);
    });
  }
  // debugger;
  createDots();

  // Activate initial dot position indicator
  const activateDot = function(slideIdx) {
    const dotButtons = document.querySelectorAll('.dots__dot');
    dotButtons.forEach(button => button.classList.remove('dots__dot--active'));
    document.querySelector(`[data-slide="${slideIdx}"]`).classList.add('dots__dot--active');
  }
  activateDot(slideIdx);

  // Implement dot button slider navigation
  // const dotButtons = document.querySelectorAll('.dots__dot');
  // dotButtons.forEach(button => button.addEventListener('click', e => {
  //   slideIdx = button.dataset.slide;
  //   goToSlide(slideIdx);
  // }));
  // Using event delegation instead
  dotsContainer.addEventListener('click', function(e) {
    if (e.target.classList.contains('dots__dot')) {
      const button = e.target;
      slideIdx = button.dataset.slide;
      activateDot(slideIdx);
      goToSlide(slideIdx);
    }
  });

  // Implement left/right button navigation
  const goToSlide = function(slide) {
    slides.forEach((slide, j) => {
      const newTransform = `translateX(${(100*j)-(100*slideIdx)}%)`;
      slide.style.transform = newTransform;
    });
  };
  const prevSlide = function(_) {
    if (slideIdx === minSlideIdx) slideIdx = maxSlideIdx;
    else slideIdx -= 1;
    goToSlide(slideIdx);
    activateDot(slideIdx);
  };
  const nextSlide = function(_) {
    if (slideIdx === maxSlideIdx) slideIdx = 0;
    else slideIdx += 1;
    goToSlide(slideIdx);
    activateDot(slideIdx);
  };
  buttonLeft.addEventListener('click', prevSlide);
  buttonRight.addEventListener('click', nextSlide);

  // Implement arrow key slider navigation
  document.addEventListener('keydown', function(e) {
    if (e.key === 'ArrowLeft') prevSlide();
    else if (e.key === 'ArrowRight') nextSlide();
  });
}
slider();