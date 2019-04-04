import { currentFamilyReducer } from '../currentFamilyReducer';
import * as actions from '../../actions';

describe('currentFamilyReducer', () => {
  it('should return the default state', () => {
    const expected = ''
    const result = currentFamilyReducer(undefined, {});
    expect(result).toEqual(expected);
  });

  it('should return an id when type is SET_CURRENT_FAMILY', () => {
    const mockFamilyId = 2;
    const initialState = '';
    const result = currentFamilyReducer(initialState, actions.setCurrentFamily(mockFamilyId));
  });
});