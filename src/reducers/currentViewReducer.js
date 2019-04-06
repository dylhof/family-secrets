export const currentViewReducer = (state = '', action) => {
  switch (action.type) {
    case 'SET_CURRENT_VIEW':
      return action.currentView
    default:
      return state;
  };
};