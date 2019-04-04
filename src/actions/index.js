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