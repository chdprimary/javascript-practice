'use strict';

const overlayEl = document.querySelector('.overlay');
const modalEl = document.querySelector('.modal');
const closeModalEl = document.querySelector('.close-modal');
const showModalEls = document.querySelectorAll('.show-modal');

const openModal = function () {
  modalEl.classList.remove('hidden');
  overlayEl.classList.remove('hidden');
};

const closeModal = function () {
  modalEl.classList.add('hidden');
  overlayEl.classList.add('hidden');
};

for (let i = 0; i < showModalEls.length; i++)
  showModalEls[i].addEventListener('click', openModal);

closeModalEl.addEventListener('click', closeModal);
overlayEl.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && !modalEl.classList.contains('hidden')) {
        closeModal();
    }
});