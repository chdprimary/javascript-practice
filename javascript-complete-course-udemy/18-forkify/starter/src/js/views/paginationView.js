import View from './view.js';
import icons from 'url:../../img/icons.svg';

class PaginationView extends View {
  _parentElement = document.querySelector('.pagination');

  addHandlerPageClick(downHandler, upHandler) {
    this._parentElement.addEventListener('click', function (e) {
      const btn = e.target.closest('.btn--inline');
      if (!btn) return;

      if (btn.classList.contains('pagination__btn--prev')) downHandler();
      else if (btn.classList.contains('pagination__btn--next')) upHandler();
    });
  }

  _generateMarkup() {
    const numPages = Math.ceil(
      this._data.results.length / this._data.resultsPerPage
    );
    const curPage = this._data.page;
    // Page 1, and there are other pages
    if (curPage === 1 && numPages > 1) {
      return `
        <button class="btn--inline pagination__btn--next">
        <span>Page ${curPage + 1}</span>
        <svg class="search__icon">
            <use href="${icons}#icon-arrow-right"></use>
        </svg>
        </button>
      `;
    }
    // Page 1, and there are NO other pages
    if (curPage === 1 && numPages === 1) {
      return ``;
    }
    // Last page
    if (curPage === numPages && numPages > 1) {
      return `
        <button class="btn--inline pagination__btn--prev">
        <svg class="search__icon">
            <use href="${icons}#icon-arrow-left"></use>
        </svg>
        <span>Page ${curPage - 1}</span>
        </button>
      `;
    }
    // Other page
    if (curPage < numPages) {
      return `
      <button class="btn--inline pagination__btn--prev">
      <svg class="search__icon">
          <use href="${icons}#icon-arrow-left"></use>
      </svg>
      <span>Page ${curPage - 1}</span>
      </button>
      <button class="btn--inline pagination__btn--next">
      <span>Page ${curPage + 1}</span>
      <svg class="search__icon">
          <use href="${icons}#icon-arrow-right"></use>
      </svg>
      </button>
      `;
    }
    return `

    `;
  }
}

export default new PaginationView();
