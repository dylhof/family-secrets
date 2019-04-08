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

  it('should add a photo when the type is ADD_PHOTO', () => {
    const initialState = mockData.photos
    const mockPhoto = {
      photo: 'photoURL',
      caption: 'photo',
      family_id: 2,
      id: 10
    }
    const expected = [...initialState, mockPhoto]
    const result = photosReducer(initialState, actions.addPhoto(mockPhoto));
    expect(result).toEqual(expected);
    expect(result.length).toBe(initialState.length + 1);
  });

  it('should remove a photo when type is DELETE_PHOTO', () => {
    const initialState = mockData.photos;
    const mockId = initialState[2].id;
    const result = photosReducer(initialState, actions.deletePhoto(mockId));
    expect(result.length).toBe(initialState.length - 1);
  });

  it('should update a photo when type is UPDATE_PHOTO', () => {
    const initialState = mockData.photos
    const mockPhotoToUpdate = {
      photo: 'https://i.imgur.com/6yHmlwT.jpg',
    caption: 'New Title',
    family_id: 2,
    id: 1
    }
    let expected = [...initialState]
    expected.splice(0, 1, mockPhotoToUpdate);
    const result = photosReducer(initialState, actions.updatePhoto(mockPhotoToUpdate));
    expect(result).toEqual(expected);
  });

});