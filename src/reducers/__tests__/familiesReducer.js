import { familiesReducer } from '../familiesReducer';
import * as actions from '../../actions';
import * as mockData from '../../mockData';

describe('familiesReducer', () => {
  it('should return the default state', () => {
    const expected = []
    const result = familiesReducer(undefined, {});
    expect(result).toEqual(expected);
  });

  it('should return an id when type is SET_FAMILIES', () => {
    const initialState = []
    const result = familiesReducer(initialState, actions.setFamilies(mockData.families));
    expect(result).toEqual(mockData.families);
  });
});