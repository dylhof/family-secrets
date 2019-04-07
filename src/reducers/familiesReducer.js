export const familiesReducer = (state = [], action) => {
  switch(action.type) {
    case 'SET_FAMILIES':
      return action.families;
    case 'ADD_FAMILY':
      return [...state, action.family]
    case 'DELETE_FAMILY':
      const filteredFamilies = state.filter(family=> {
        return family.id !== action.id
      })
      return filteredFamilies
    case 'UPDATE_FAMILY':
      const updatedFamilies = state.map(family => {
        if(family.id === action.family.id) {
          return action.family
        } else {
          return family
        }
      })
      return updatedFamilies
    default: 
      return state;
  }
}