export const currentFamilyReducer = (state = '', action) => {
  switch(action.type) {
    case 'SET_CURRENT_FAMILY':
      return action.currentFamily
    default: 
      return state
  };
};