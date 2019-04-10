import * as actions from '../actions';
import { fetchData } from '../utils/fetch';

export const apiThunk = (path, action, options, id) => {
  return async dispatch => {
    try {
      dispatch(actions.setIsLoading(true));
      const data = await fetchData(path, options, id);
      dispatch(actions.setIsLoading(false));
      dispatch(actions[action](data))
    } catch (error) {
      dispatch(actions.setIsLoading(false));
      dispatch(actions.setError(error.message))
    }
  }
};