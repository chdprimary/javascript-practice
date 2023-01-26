import View from './view.js';
import icons from 'url:../../img/icons.svg';

class BookmarksView extends View {
  _parentElement = document.querySelector('.bookmarks__list');
  _recipeNotFoundError = 'No bookmarks yet. Find a nice recipe and bookmark it!';
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
export default new BookmarksView();
