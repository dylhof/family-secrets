import React from 'react';
import { shallow } from 'enzyme';
import { CardArea } from './CardArea';
import * as mockData from '../../mockData';

describe('CardArea', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<CardArea/>)
  });

  it('should match the snapshot if current View is Stories', () => {
    wrapper = shallow(
      <CardArea 
      currentView='Stories' 
      currentFamily='2'
    />)
    expect(wrapper).toMatchSnapshot();
  });

  it('should match the snapshot if current View is Recipes', () => {
    wrapper = shallow(
      <CardArea 
      currentView='Recipes' 
      currentFamily='2'
    />)
    expect(wrapper).toMatchSnapshot();
  });

  it('should match the snapshot if current View is Photos', () => {
    wrapper = shallow(
      <CardArea 
      currentView='Photos' 
      currentFamily='2'
    />)
    expect(wrapper).toMatchSnapshot();
  });

});