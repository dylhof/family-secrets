import { combineReducers } from 'redux';
import { errorReducer } from './errorReducer';
import { loadingReducer } from './loadingReducer';
import { currentViewReducer } from './currentViewReducer';
import { currentFamilyReducer } from './currentFamilyReducer';
import { currentUserReducer } from './currentUserReducer';


export const rootReducer = combineReducers({
  error: errorReducer,
  isLoading: loadingReducer,
  currentView: currentViewReducer,
  currentFamily: currentFamilyReducer,
  currentUser: currentUserReducer
});