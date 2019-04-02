export const loadingReducer = (state = false, action) => {
  switch (action.type) {
    case 'SET_IS_LOADING':
      return action.isLoading
    default:
      return state
  };
};