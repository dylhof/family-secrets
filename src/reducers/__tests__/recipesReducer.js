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

  it('should return recipes plus one when type is ADD_RECIPE', () => {
    const initialState = mockData.recipes;
    const mockNewRecipe = {
      name: 'cake',
      ingredients: 'cakemix \n frosting \n sprinkles',
      instructions: 'make the cake'
    };
    const result = recipesReducer(initialState, actions.addRecipe(mockNewRecipe));
    expect(result.length).toBe(initialState.length + 1);
  });

  it('should return recipes minus one when type is DELETE_RECIPE', () => {
    const initialState = mockData.recipes;
    const mockId = mockData.recipes[0].id;
    const result = recipesReducer(initialState, actions.deleteRecipe(mockId));
    expect(result.length).toBe(initialState.length - 1);
  });

  it('should return recipes with one updated', () => {
    const initialState = mockData.recipes;
    const mockUpdatedRecipe = {...initialState[1], name: 'something else'};
    const expected = [initialState[0], mockUpdatedRecipe, initialState[2]];
    const result = recipesReducer(initialState, actions.updateRecipe(mockUpdatedRecipe));
    expect(result).toEqual(expected);
  });
});