export const recipesReducer = (state = [], action) => {
  switch(action.type) {
    case 'SET_RECIPES':
      return [...state, ...action.recipes]
    case 'ADD_RECIPE':
      return [...state, action.recipes]
    case 'DELETE_RECIPE':
      const recipesToFilter = [...state]
      const filteredRecipes = recipesToFilter.filter(recipe => {
        return recipe.id !== action.id
      })
      return filteredRecipes
    case 'UPDATE_RECIPE':
      const recipesToMap = [...state]
      const updatedRecipes = recipesToMap.map(recipe => {
        if(recipe.id === action.recipe.id) {
          return action.recipe
        } else {
          return recipe
        }
      })
      return updatedRecipes
    case 'LOG_OUT':
      return []
    default: 
      return state
  };
};