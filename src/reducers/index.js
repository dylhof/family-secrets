import { combineReducers } from 'redux';
import { errorReducer } from './errorReducer';
import { loadingReducer } from './loadingReducer';
import { currentViewReducer } from './currentViewReducer';
import { currentFamilyReducer } from './currentFamilyReducer';
import { currentUserReducer } from './currentUserReducer';
import { familiesReducer } from './familiesReducer';
import { storiesReducer } from './storiesReducer';
import { recipesReducer } from './recipesReducer';
import { photosReducer } from './photosReducer';


export const rootReducer = combineReducers({
  error: errorReducer,
  isLoading: loadingReducer,
  currentView: currentViewReducer,
  currentFamily: currentFamilyReducer,
  currentUser: currentUserReducer,
  families: familiesReducer,
  stories: storiesReducer,
  recipes: recipesReducer,
  photos: photosReducer,
});