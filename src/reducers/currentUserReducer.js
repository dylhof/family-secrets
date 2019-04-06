export const currentUserReducer = (state=null, action) => {
  switch(action.type) {
    case 'SET_CURRENT_USER':
      const currentUser = {id: action.id, name: action.name, email: action.email}
      return currentUser
    case 'LOG_OUT':
      return null
    default:
      return state
  };
};