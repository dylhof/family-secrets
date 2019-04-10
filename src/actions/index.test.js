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

  it('should return an object with LOG_OUT', () => {
    const expected = {
      type: 'LOG_OUT'
    };
    const result = actions.logoutCurrentUser();
    expect(result).toEqual(expected);
  });

  it('should return an object with SET_FAMILIES', () => {
    const expected = {
      type: 'SET_FAMILIES',
      families: mockData.families
    }
    const result = actions.setFamilies(mockData.families);
    expect(result).toEqual(expected);
  });

  it('should return an object with SET_RECIPES and recipes', () => {
     const expected = {
       type: 'SET_RECIPES',
       recipes: mockData.recipes
     };
     const result = actions.setRecipes(mockData.recipes);
     expect(result).toEqual(expected);
  });

  it('should return an object with SET_STORIES and stories', () => {
    const expected = {
      type: 'SET_STORIES',
      stories: mockData.stories
    };
    const result = actions.setStories(mockData.stories);
    expect(result).toEqual(expected);
  });

  it('should return an object with SET_PHOTOS and photos', () => {
    const expected = {
      type: 'SET_PHOTOS',
      photos: mockData.photos
    };
    const result = actions.setPhotos(mockData.photos);
    expect(result).toEqual(expected);
  });

  it('should return an object with ADD_FAMILY and a family', () => {
    const mockFamily = mockData.families[0];
    const expected = {
      type: 'ADD_FAMILY',
      family: mockFamily
    };
    const result = actions.addFamily(mockFamily);
    expect(result).toEqual(expected);
  });

  it('should return an object with ADD_RECIPE and a recipe', () => {
    const mockRecipe = mockData.recipes[0];
    const expected = {
      type: 'ADD_RECIPE',
      recipe: mockRecipe
    };
    const result = actions.addRecipe(mockRecipe);
    expect(result).toEqual(expected);
  });

  it('should return an object with ADD_STORY and a story', () => {
    const mockStory = mockData.stories[0];
    const expected = {
      type: 'ADD_STORY',
      story: mockStory
    };
    const result = actions.addStory(mockStory);
    expect(result).toEqual(expected);
  });

  it('should return an object with ADD_PHOTO and a photo', () => {
    const mockPhoto = mockData.photos[0];
    const expected = {
      type: 'ADD_PHOTO',
      photo: mockPhoto
    };
    const result = actions.addPhoto(mockPhoto);
    expect(result).toEqual(expected);
  });

  it('should retun an object with DELETE_FAMILY and an id', () => {
    const expected = {
      type: 'DELETE_FAMILY',
      id: 2
    };
    const result = actions.deleteFamily(2);
    expect(result).toEqual(expected);
  });

  it('should retun an object with DELETE_RECIPE and an id', () => {
    const expected = {
      type: 'DELETE_RECIPE',
      id: 3
    };
    const result = actions.deleteRecipe(3);
    expect(result).toEqual(expected);
  });

  it('should retun an object with DELETE_STORY and an id', () => {
    const expected = {
      type: 'DELETE_STORY',
      id: 4
    };
    const result = actions.deleteStory(4);
    expect(result).toEqual(expected);
  });

  it('should retun an object with DELETE_PHOTO and an id', () => {
    const expected = {
      type: 'DELETE_PHOTO',
      id: 5
    };
    const result = actions.deletePhoto(5);
    expect(result).toEqual(expected);
  });

  it('should return an object with UPDATE_FAMILY and a family', () => {
    const mockFamily = mockData.families[0];
    const expected = {
      type: 'UPDATE_FAMILY',
      family: mockFamily
    };
    const result = actions.updateFamily(mockFamily);
    expect(result).toEqual(expected);
  });

  it('should return an object with UPDATE_RECIPE and a Recipe', () => {
    const mockRecipe = mockData.recipes[0];
    const expected = {
      type: 'UPDATE_RECIPE',
      recipe: mockRecipe
    };
    const result = actions.updateRecipe(mockRecipe);
    expect(result).toEqual(expected);
  });

  it('should return an object with UPDATE_STORY and a story', () => {
    const mockStory = mockData.stories[0];
    const expected = {
      type: 'UPDATE_STORY',
      story: mockStory
    };
    const result = actions.updateStory(mockStory);
    expect(result).toEqual(expected);
  });

  it('should return an object with UPDATE_PHOTO and a photo', () => {
    const mockPhoto = mockData.photos[0];
    const expected = {
      type: 'UPDATE_PHOTO',
      photo: mockPhoto
    };
    const result = actions.updatePhoto(mockPhoto);
    expect(result).toEqual(expected);
  });

  it('should return an object with a type of LOG_OUT', () => {
    const expected = { type: 'LOG_OUT'};
    const result = actions.logOut();
    expect(result).toEqual(expected);
  });
});