export const familiesReducer = (state = [], action) => {
  switch(action.type) {
    case 'SET_FAMILIES':
      return action.families;
    default: 
      return state;
  }
}