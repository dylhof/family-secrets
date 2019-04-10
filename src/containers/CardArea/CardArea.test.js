import React from 'react';
import { shallow } from 'enzyme';
import { CardArea } from './CardArea';
import * as mockData from '../../mockData';

describe('CardArea', () => {
  let wrapper;
  const mockStories = mockData.stories
  const mockRecipes = mockData.recipes
  const mockPhotos = mockData.photos

  it('should match the snapshot if current View is Stories', () => {
    wrapper = shallow(
      <CardArea 
      currentView='stories' 
      currentFamily='2'
      stories={mockStories}
    />)
    expect(wrapper).toMatchSnapshot();
  });

  it('should match the snapshot if current View is Recipes', () => {
    wrapper = shallow(
      <CardArea 
      currentView='recipes' 
      currentFamily='2'
      recipes={mockRecipes}
    />)
    expect(wrapper).toMatchSnapshot();
  });

  it('should match the snapshot if current View is images', () => {
    wrapper = shallow(
      <CardArea 
      currentView='images' 
      currentFamily='2'
      photos={mockPhotos}
    />)
    expect(wrapper).toMatchSnapshot();
  });

});