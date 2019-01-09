import { API_BASE_URL } from "../config";

export const SAVE_RECIPE_SUCCESS = 'SAVE_RECIPES_SUCCESS'
export const saveRecipeSuccess = (data) => {
  return {
    type: SAVE_RECIPE_SUCCESS,
    data

  }
}

export const SAVE_RECIPE_REQUEST = 'SAVE_RECIPE_REQUEST'
export const saveRecipeRequest = (data) => {
  return {
    type: SAVE_RECIPE_REQUEST,
  }
}

export const SAVE_RECIPE_ERROR = 'SAVE_RECIPES_ERROR'
export const saveRecipeError = (error) => {
  return {
    type: SAVE_RECIPE_REQUEST,
    error
  }
}

export const saveRecipe = (recipe) => (dispatch) => {
  const authToken = localStorage.getItem('token')
  console.log(this)
  return fetch(`${API_BASE_URL}/myrecipes`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      'Authorization': `Bearer ${authToken}`
    },
    body: JSON.stringify(recipe)
  })
  .then(res => (res.json()))
  .then(data => dispatch(saveRecipeSuccess(data)))
  .then(() => console.log('in the save recipe function'))
  .catch(error => console.log(error))
}
