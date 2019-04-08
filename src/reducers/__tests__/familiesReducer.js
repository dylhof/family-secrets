import { familiesReducer } from '../familiesReducer';
import * as actions from '../../actions';
import * as mockData from '../../mockData';

describe('familiesReducer', () => {
  it('should return the default state', () => {
    const expected = []
    const result = familiesReducer(undefined, {});
    expect(result).toEqual(expected);
  });

  it('should return families when type is SET_FAMILIES', () => {
    const initialState = []
    const mockFamilies = mockData.families
    const result = familiesReducer(initialState, actions.setFamilies(mockFamilies));
    expect(result).toEqual(mockFamilies);
  });

  it('should return families with an the additional family', () => {
    const initialState = mockData.families;
    const mockFamily = {
        name: 'Smith',
        id: 4,
        user_id: 1
    };
    const expected = [...initialState, mockFamily];
    const result = familiesReducer(initialState, actions.addFamily(mockFamily));
    expect(result).toEqual(expected)
  });

  it('should return fewer families when type is DELETE_FAMILY', () => {
    const initialState = mockData.families;
    const mockId = mockData.families[0].id;
    const expected = [mockData.families[1]];
    const result = familiesReducer(initialState, actions.deleteFamily(mockId));
    expect(result).toEqual(expected)
  });

  it('shoud return families with an updated family', () => {
    const initialState = mockData.families;
    const mockUpdatedFamily = {...mockData.families[0], name: 'Jones'};
    const expected = [mockUpdatedFamily, mockData.families[1]];
    const result = familiesReducer(initialState, actions.updateFamily(mockUpdatedFamily));
    expect(result).toEqual(expected)
  });
});