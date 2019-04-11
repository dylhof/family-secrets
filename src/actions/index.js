export const setError = (error) => ({
  type: 'SET_ERROR',
  error
});

export const setIsLoading = (isLoading) => ({
  type: 'SET_IS_LOADING',
  isLoading
});

export const setCurrentView = (currentView) => ({
  type: 'SET_CURRENT_VIEW',
  currentView
});

export const setCurrentFamily = (id) => ({
  type: 'SET_CURRENT_FAMILY',
  currentFamily: id
})

export const setCurrentUser = (id, name, email) => ({
  type: 'SET_CURRENT_USER',
  id,
  name,
  email
});

export const logoutCurrentUser = () => ({
  type: 'LOG_OUT'
});

export const setFamilies = (families) => ({
  type: 'SET_FAMILIES',
  families
})

export const setRecipes = (recipes) => ({
  type: 'SET_RECIPES',
  recipes
});

export const setStories = (stories) => ({
  type: 'SET_STORIES',
  stories
});

export const setPhotos = (photos) => ({
  type: 'SET_PHOTOS',
  photos
});

export const addFamily = (family) => ({
  type: 'ADD_FAMILY',
  family
});

export const addRecipe = (recipe) => ({
  type: 'ADD_RECIPE',
  recipe
});

export const addStory = (story) => ({
  type: 'ADD_STORY',
  story
});

export const addPhoto = (photo) => ({
  type: 'ADD_PHOTO',
  photo
});

export const deleteFamily = (id) => ({
  type: 'DELETE_FAMILY',
  id
});

export const deleteRecipe = (id) => ({
  type: 'DELETE_RECIPE',
  id
});

export const deleteStory = (id) => ({
  type: 'DELETE_STORY',
  id
});

export const deletePhoto = (id) => ({
  type: 'DELETE_PHOTO',
  id
});

export const updateFamily = (family) => ({
  type: 'UPDATE_FAMILY',
  family
});

export const updateRecipe = (recipe) => ({
  type: 'UPDATE_RECIPE',
  recipe
});

export const updateStory = (story) => ({
  type: 'UPDATE_STORY',
  story
});

export const updatePhoto = (photo) => ({
  type: 'UPDATE_PHOTO',
  photo
});

export const logOut = () => ({
  type: 'LOG_OUT'
})

export const clearError = () => ({
  type: 'CLEAR_ERROR'
})

