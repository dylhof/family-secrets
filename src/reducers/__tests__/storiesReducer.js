import { storiesReducer } from '../storiesReducer';
import * as actions from '../../actions';
import * as mockData from '../../mockData';

describe('storiesReducer', () => {
  it('should return the default state', () => {
    const expected = []
    const result = storiesReducer(undefined, {});
    expect(result).toEqual(expected);
  });

  it('should return an id when type is SET_STORIES', () => {
    const initialState = []
    const result = storiesReducer(initialState, actions.setStories(mockData.stories));
    expect(result).toEqual(mockData.stories);
  });
});