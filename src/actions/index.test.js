import * as actions from './index';
import { truncate } from 'fs';

describe('actions', () => {

  it('should return an object with SET_ERROR and a message', () => {
    const mockError = 'Oh no! There has been an error';
    const expected = {
      type: 'SET_ERROR',
      error: mockError
    };
    const result = actions.setError(mockError)
    expect(result).toEqual(expected)
  });

  it('should return an object with SET_IS_LOADING and a bool', () => {
    const expected = {
      type: 'SET_IS_LOADING',
      isLoading: true
    };
    const result = actions.setIsLoading(true);
    expect(result).toEqual(expected);
  });

});