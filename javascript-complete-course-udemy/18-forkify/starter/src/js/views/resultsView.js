import View from './view.js';
import icons from 'url:../../img/icons.svg';

class ResultsView extends View {
  _parentElement = document.querySelector('.results');
  _recipeNotFoundError = 'No recipes found for that query. Please try again.';
  _successMessage = '';

  _generateMarkup() {
    return this._data.map(this._generateMarkupSearchResult).join('');
  }
  _generateMarkupSearchResult(result) {
    const curId = window.location.hash.slice(1);

    return `
    <li class="preview">
    <a class="preview__link ${
      curId === result.id ? 'preview__link--active' : ''
     }" href="#${result.id}">
      <figure class="preview__fig">
        <img src="${result.image}" alt="${result.title}" />
      </figure>
      <div class="preview__data">
        <h4 class="preview__title">${result.title}</h4>
        <p class="preview__publisher">${result.publisher}</p>
      </div>
    </a>
    </li>
    `;
  }
}
export default new ResultsView();
