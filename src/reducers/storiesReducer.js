export const storiesReducer = (state = [], action) => {
  switch(action.type) {
    case 'SET_STORIES':
      return action.stories
    default: 
      return state
  };
};