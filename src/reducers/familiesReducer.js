export const familiesReducer = (state = [], action) => {
  switch(action.type) {
    case 'SET_FAMILIES':
      return action.families;
    case 'ADD_FAMILY':
      return [...state, action.family]
    case 'DELETE_FAMILY':
      const familiesToFilter = [...state]
      const filteredFamilies = familiesToFilter.filter(family=> {
        return family.id !== action.id
      })
      return filteredFamilies
    case 'UPDATE_FAMILY':
      const familiesToMap = [...state]
      const updatedFamilies = familiesToMap.map(family => {
        if(family.id === action.family.id) {
          return action.family
        } else {
          return family
        }
      })
      return updatedFamilies
    case 'LOG_OUT':
      return []
    default: 
      return state;
  }
}