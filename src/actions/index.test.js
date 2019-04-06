import * as actions from './index';
import * as mockData from '../mockData';

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

  it('should return an object with SET_CURRENT_VIEW and the currentView', () => {
    const expected = {
      type: 'SET_CURRENT_VIEW',
      currentView: 'Stories'
    };
    const result = actions.setCurrentView('Stories');
    expect(result).toEqual(expected);
  });

  it('should return an object with SET_CURRENT_FAMILY and an id', () => {
    const expected = {
      type: 'SET_CURRENT_FAMILY',
      currentFamily: 2
    };
    const result = actions.setCurrentFamily(2);
    expect(result).toEqual(expected);
  });

  it('should return an object with SET_CURRENT_USER, an id, a name and an email', () => {
    const expected = {
      type: 'SET_CURRENT_USER',
      id: 1,
      name: 'Dylan',
      email: 'dylan@dylan.org'
    };
    const result = actions.setCurrentUser(1, 'Dylan', 'dylan@dylan.org');
    expect(result).toEqual(expected);
  });

  it('should return an object with a type of LOG_OUT', () => {
    const expected = {
      type: 'LOG_OUT'
    };
    const result = actions.logoutCurrentUser();
    expect(result).toEqual(expected);
  });

  it('should return an object with a type of SET_FAMILIES', () => {
    const expected = {
      type: 'SET_FAMILIES',
      families: mockData.families
    }
    const result = actions.setFamilies(mockData.families);
    expect(result).toEqual(expected);
  });

  it('should return an object with a type of SET_RECIPES and recipes', () => {
     const expected = {
       type: 'SET_RECIPES',
       recipes: mockData.recipes
     };
     const result = actions.setRecipes(mockData.recipes);
     expect(result).toEqual(expected);
  });

  it('should return an object with a type of SET_STORIES and stories', () => {
    const expected = {
      type: 'SET_STORIES',
      stories: mockData.stories
    };
    const result = actions.setStories(mockData.stories);
    expect(result).toEqual(expected);
  });

  it('should return an object with a type of SET_PHOTOS and photos', () => {
    const expected = {
      type: 'SET_PHOTOS',
      photos: mockData.photos
    };
    const result = actions.setPhotos(mockData.photos);
    expect(result).toEqual(expected);
  });

});