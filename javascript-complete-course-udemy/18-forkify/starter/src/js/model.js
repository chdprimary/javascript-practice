import { API_URL, API_KEY, RESULTS_PER_PAGE } from './config.js';
// import { getJSON, sendJSON } from './helpers.js';
import { AJAX } from './helpers.js';

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

const createRecipeObject = function (data) {
  const { recipe } = data.data;
  return {
    id: recipe.id,
    title: recipe.title,
    publisher: recipe.publisher,
    sourceUrl: recipe.source_url,
    image: recipe.image_url,
    servings: recipe.servings,
    cookingTime: recipe.cooking_time,
    ingredients: recipe.ingredients,
    ...(recipe.key && { key: recipe.key }),
  };
};

export const loadRecipe = async function (recipeId) {
  try {
    const data = await AJAX(`${API_URL}${recipeId}?key=${API_KEY}`);
    state.recipe = createRecipeObject(data);

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
    const data = await AJAX(`${API_URL}?search=${query}&key=${API_KEY}`);

    state.search.results = data.data.recipes.map(recipe => {
      return {
        id: recipe.id,
        title: recipe.title,
        publisher: recipe.publisher,
        image: recipe.image_url,
        ...(recipe.key && { key: recipe.key }),
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

const persistBookmarks = function () {
  localStorage.setItem('bookmarks', JSON.stringify(state.bookmarks));
};

export const addBookmark = function (recipe) {
  // Add recipe to bookmarks
  state.bookmarks.push(recipe);

  // Mark current recipe as bookmarked
  if (recipe.id === state.recipe.id) state.recipe.bookmarked = true;

  // Persist bookmark changes to localStorage
  persistBookmarks();
};

export const removeBookmark = function (recipeId) {
  // Delete recipe from bookmarks
  const index = state.bookmarks.findIndex(bookmark => bookmark.id === recipeId);
  state.bookmarks.splice(index, 1);

  // Mark current recipe as unbookmarked
  if (recipeId === state.recipe.id) state.recipe.bookmarked = false;

  // Persist bookmark changes to localStorage
  persistBookmarks();
};

const init = function () {
  const storage = localStorage.getItem('bookmarks');
  if (storage) state.bookmarks = JSON.parse(storage);
  console.log(state.bookmarks);
};
// init();

const _clearBookmarks = function () {
  localStorage.clear('bookmarks');
};
// _clearBookmarks();

export const uploadRecipe = async function (newRecipe) {
  try {
    const ingredients = Object.entries(newRecipe)
      .filter(entry => entry[0].startsWith('ingredient') && entry[1] !== '')
      .map(entry => {
        const [_, ingredient] = entry;
        const ingredientArr = ingredient.replaceAll(' ', '').split(',');
        if (ingredientArr.length !== 3)
          throw new Error(
            'Wrong ingredient format! Please use correct format.'
          );
        const [quantity, unit, description] = ingredientArr;
        return { quantity: quantity ? +quantity : null, unit, description };
      });

    const recipe = {
      title: newRecipe.title,
      source_url: newRecipe.sourceUrl,
      image_url: newRecipe.image,
      publisher: newRecipe.publisher,
      cooking_time: +newRecipe.cookingTime,
      servings: +newRecipe.servings,
      ingredients,
    };
    const data = await AJAX(`${API_URL}?key=${API_KEY}`, recipe);
    state.recipe = createRecipeObject(data);
    addBookmark(state.recipe);
    console.log(state.recipe);
  } catch (err) {
    throw err;
  }
};
