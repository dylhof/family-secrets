export const photosReducer = (state = [], action) => {
  switch(action.type) {
    case 'SET_PHOTOS':
      return action.photos
    case 'ADD_PHOTO':
      return [...state, action.photo]
    case 'DELETE_PHOTO':
      const photosToFilter = [...state]
      const filteredPhtotos = photosToFilter.filter(photo => {
        return photo.id !== action.id
      })
      return filteredPhtotos
    case 'UPDATE_PHOTO':
      const photosToMap = [...state]
      const updatedPhotos = photosToMap.map(photo => {
        if(photo.id === action.photo.id) {
          return action.photo
        } else {
          return photo
        }
      })
      return updatedPhotos
    default: 
      return state
  };
};