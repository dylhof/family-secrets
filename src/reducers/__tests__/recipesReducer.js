import { recipesReducer } from '../recipesReducer';
import * as actions from '../../actions';
import * as mockData from '../../mockData';

describe('recipesReducer', () => {
  it('should return the default state', () => {
    const expected = []
    const result = recipesReducer(undefined, {});
    expect(result).toEqual(expected);
  });

  it('should return an id when type is SET_RECIPES', () => {
    const initialState = []
    const result = recipesReducer(initialState, actions.setRecipes(mockData.recipes));
    expect(result).toEqual(mockData.recipes);
  });
});