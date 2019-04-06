import { photosReducer } from '../photosReducer';
import * as actions from '../../actions';
import * as mockData from '../../mockData';

describe('photosReducer', () => {
  it('should return the default state', () => {
    const expected = []
    const result = photosReducer(undefined, {});
    expect(result).toEqual(expected);
  });

  it('should return an id when type is SET_PHOTOS', () => {
    const initialState = []
    const result = photosReducer(initialState, actions.setPhotos(mockData.photos));
    expect(result).toEqual(mockData.photos);
  });
});