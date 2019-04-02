import { errorReducer } from '../errorReducer';
import * as actions from '../../actions';

describe('errorReducer', () => {

  it('should return the default state', () => {
    const expected = '';
    const result = errorReducer(undefined, {});
    expect(result).toEqual(expected);
  });

  it('should set an error message', () => {
    const mockError = 'Error, no family recipes exist';
    const initialState = '';
    const result = errorReducer(initialState, actions.setError(mockError));
    expect(result).toEqual(mockError);
  });

});