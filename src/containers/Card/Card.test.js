import React from 'react';
import { Card } from './Card';
import { shallow } from 'enzyme';
import * as mockData from '../../mockData';

describe('Card', () => {
  it('should match the snapshot if the current View is Stories', () => {
    const mockStory = mockData.stories[1];
    const mockCurrentView = 'Stories';
    const wrapper = shallow(
      <Card 
        currentView={mockCurrentView}
        title={mockStory.title}
        story={mockStory.story}
      />
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('should match the snapshot if the current View is Recipes', () => {
    const mockRecipe = mockData.recipes[1];
    const mockCurrentView = 'Recipes';
    const wrapper = shallow(
      <Card 
        currentView={mockCurrentView}
        name={mockRecipe.name}
        ingredients={mockRecipe.ingredients}
        directions={mockRecipe.directions}
      />
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('should match the snapshot if the current View is Stories', () => {
    const mockPhoto = mockData.photos[1];
    const mockCurrentView = 'Photos';
    const wrapper = shallow(
      <Card 
        currentView={mockCurrentView}
        photo={mockPhoto.photo}
        caption={mockPhoto.caption}
      />
    );
    expect(wrapper).toMatchSnapshot();
  });

});