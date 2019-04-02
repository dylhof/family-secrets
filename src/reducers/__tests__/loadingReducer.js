import { loadingReducer } from '../loadingReducer';
import * as actions from '../../actions';

describe('loadingReducer', () => {

  it('should return the default state', () => {
    const expected = false;
    const result = loadingReducer(undefined, {});
    expect(result).toEqual(expected);
  });

  it('should set isLoading', () => {
    const mockIsLoading = true;
    const initialState = false;
    const result = loadingReducer(initialState, actions.setIsLoading(mockIsLoading));
    expect(result).toEqual(mockIsLoading);
  });

});