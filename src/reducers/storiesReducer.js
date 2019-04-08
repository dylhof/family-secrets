export const storiesReducer = (state = [], action) => {
  switch(action.type) {
    case 'SET_STORIES':
      return action.stories
    case 'ADD_STORY':
      return [...state, action.story]
    case 'DELETE_STORY':
      const storiesToFilter = [...state]
      const filteredStories = storiesToFilter.filter(story => {
        return story.id !== action.id
      })
      return filteredStories
    case 'UPDATE_STORY':
      const storiesToMap = [...state]
      const updatedStories = storiesToMap.map(story => {
        if(story.id === action.story.id) {
          return action.story
        } else {
          return story
        }
      })
      return updatedStories
    default: 
      return state
  };
};