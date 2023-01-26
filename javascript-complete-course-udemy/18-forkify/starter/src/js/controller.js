import * as model from './model.js';
import recipeView from './views/recipeView.js';
import searchView from './views/searchView.js';
import resultsView from './views/resultsView.js';
import paginationView from './views/paginationView.js';
import bookmarksView from './views/bookmarksView.js';

const controlRecipes = async function () {
  try {
    const recipeId = window?.location?.hash?.slice(1);
    if (!recipeId) return;

    recipeView.renderSpinner();

    // 0) Update search results view to mark selected recipe
    resultsView.update(model.getSearchResultsPage(model.state.search.page));

    // 1) Loading recipe
    await model.loadRecipe(recipeId);
    const { recipe } = model.state;

    // 2) Rendering recipe
    recipeView.render(model.state.recipe);

    // 3) Update bookmarks view highlighting active recipe
    bookmarksView.update(model.state.bookmarks);
  } catch (err) {
    recipeView.renderError();
  }
};

const controlSearchResults = async function () {
  try {
    resultsView.renderSpinner();

    // 1) Get search query
    const query = searchView.getQuery();
    if (!query) return;

    // 2) Load search results
    await model.loadSearchResults(query);

    // 3) Render results
    resultsView.render(model.getSearchResultsPage(1));

    // 4) Render initial pagination buttons
    paginationView.render(model.state.search);
  } catch (err) {
    console.log(err);
  }
};

const decreasePagination = function () {
  resultsView.render(model.getSearchResultsPage(model.state.search.page - 1));
  paginationView.render(model.state.search);
};

const increasePagination = function () {
  resultsView.render(model.getSearchResultsPage(model.state.search.page + 1));
  paginationView.render(model.state.search);
};

const controlServings = function (newServings) {
  // Update state to some servings amount
  model.updateServings(newServings);

  // Rerender recipe
  // recipeView.render(model.state.recipe);
  recipeView.update(model.state.recipe);
};

const controlBookmark = function () {
  // Add or remove bookmark
  if (!model.state.recipe.bookmarked) model.addBookmark(model.state.recipe);
  else model.removeBookmark(model.state.recipe.id);

  // Update recipe view
  recipeView.update(model.state.recipe);

  // Render bookmarks
  bookmarksView.render(model.state.bookmarks);
};

const init = function () {
  recipeView.addHandlerRender(controlRecipes);
  recipeView.addHandlerServings(controlServings);
  recipeView.addHandlerAddBookmark(controlBookmark);
  searchView.addHandlerSearch(controlSearchResults);
  paginationView.addHandlerPageClick(decreasePagination, increasePagination);
};
init();
