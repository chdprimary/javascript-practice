import View from './view.js';
import icons from 'url:../../img/icons.svg';

class AddRecipeView extends View {
  _parentElement = document.querySelector('.upload');
  _successMessage = `Recipe successfully uploaded! 🚀`;
  _window = document.querySelector('.add-recipe-window');
  _overlay = document.querySelector('.overlay');
  _buttonOpen = document.querySelector('.nav__btn--add-recipe');
  _buttonClose = document.querySelector('.btn--close-modal');

  constructor() {
    super();
    this._addHandlerShowWindow();
    this._addHandlerHideWindow();
  }

  toggleWindow() {
    this._window.classList.toggle('hidden');
    this._overlay.classList.toggle('hidden');
  }

  _addHandlerShowWindow() {
    this._buttonOpen.addEventListener('click', this.toggleWindow.bind(this));
  }

  _addHandlerHideWindow() {
    this._buttonClose.addEventListener('click', this.toggleWindow.bind(this));
    this._overlay.addEventListener('click', this.toggleWindow.bind(this));
  }

  addHandlerUpload(handler) {
    this._parentElement.addEventListener('submit', function (e) {
      e.preventDefault();
      const newRecipeArr = [...new FormData(this)];
      const newRecipe = Object.fromEntries(newRecipeArr);
      handler(newRecipe);
    });
  }
}

export default new AddRecipeView();
