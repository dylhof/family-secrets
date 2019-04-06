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