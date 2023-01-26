import { API_URL, RESULTS_PER_PAGE } from './config.js';
import { getJSON } from './helpers.js';

export const state = {
  recipe: {},
  search: {
    query: '',
    results: [],
    resultsPerPage: RESULTS_PER_PAGE,
    page: 1,
  },
  bookmarks: [],
};

export const loadRecipe = async function (recipeId) {
  try {
    const data = await getJSON(`${API_URL}${recipeId}`);
    const { recipe } = data.data;
    state.recipe = {
      id: recipe.id,
      title: recipe.title,
      publisher: recipe.publisher,
      sourceUrl: recipe.source_url,
      image: recipe.image_url,
      servings: recipe.servings,
      cookingTime: recipe.cooking_time,
      ingredients: recipe.ingredients,
    };

    if (state.bookmarks.some(bookmark => bookmark.id === recipeId))
      state.recipe.bookmarked = true;
    else state.recipe.bookmarked = false;

    console.log(state.recipe);
  } catch (err) {
    throw err;
  }
};

export const loadSearchResults = async function (query) {
  try {
    state.search.query = query;
    const data = await getJSON(`${API_URL}?search=${query}`);

    state.search.results = data.data.recipes.map(recipe => {
      return {
        id: recipe.id,
        title: recipe.title,
        publisher: recipe.publisher,
        image: recipe.image_url,
      };
    });
  } catch (err) {
    throw err;
  }
};

export const getSearchResultsPage = function (page = state.search.page) {
  state.search.page = page;
  const startIndex = (page - 1) * state.search.resultsPerPage;
  const endIndex = page * state.search.resultsPerPage;
  return state.search.results.slice(startIndex, endIndex);
};

export const updateServings = function (newServings) {
  state.recipe?.ingredients?.forEach(ing => {
    ing.quantity = (ing.quantity * newServings) / state.recipe.servings;
  });
  state.recipe.servings = newServings;
};

export const addBookmark = function (recipe) {
  // Add recipe to bookmarks
  state.bookmarks.push(recipe);
  // Mark current recipe as bookmark
  if (recipe.id === state.recipe.id) state.recipe.bookmarked = true;
};

export const removeBookmark = function (recipeId) {
  // Delete recipe from bookmarks
  const index = state.bookmarks.findIndex(bookmark => bookmark.id === recipeId);
  state.bookmarks.splice(index, 1);
  // Mark current recipe as unbookmarked
  if (recipeId === state.recipe.id) state.recipe.bookmarked = false;
};
