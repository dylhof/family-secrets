import { combineReducers } from 'redux';
import { errorReducer } from './errorReducer';
import { loadingReducer } from './loadingReducer';


export const rootReducer = combineReducers({
  error: errorReducer,
  isLoading: loadingReducer
});