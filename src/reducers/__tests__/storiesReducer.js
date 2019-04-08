import { storiesReducer } from '../storiesReducer';
import * as actions from '../../actions';
import * as mockData from '../../mockData';

describe('storiesReducer', () => {
  it('should return the default state', () => {
    const expected = []
    const result = storiesReducer(undefined, {});
    expect(result).toEqual(expected);
  });

  it('should return stories when type is SET_STORIES', () => {
    const initialState = []
    const result = storiesReducer(initialState, actions.setStories(mockData.stories));
    expect(result).toEqual(mockData.stories);
  });

  it('should return stories with an additional story', () => {
    const initialState = mockData.stories
    const mockStory = {
      title: 'my story',
      story: 'lalala this is a great story! woo!',
      family_id: 2
    }
    const result = storiesReducer(initialState, actions.addStory(mockStory))
    expect(result.length).toBe(initialState.length + 1)
  });

  it('should return stories with one fewer', () => {
    const mockId = mockData.stories[1].id;
    const initialState = mockData.stories;
    const result = storiesReducer(initialState, actions.deleteStory(mockId));
    expect(result.length).toBe(initialState.length - 1)
  });

  it('should return stories with one updated', () => {
    const initialState = mockData.stories
    const mockUpdatedStory = {...mockData.stories[0], title: 'something new'}
    const expected = [mockUpdatedStory, mockData.stories[1], mockData.stories[2]];
    const result = storiesReducer(initialState, actions.updateStory(mockUpdatedStory));
    expect(result).toEqual(expected);
  });
});