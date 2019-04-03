import React from 'react';
import { shallow } from 'enzyme';
import { CardArea } from './CardArea';

describe('CardArea', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<CardArea/>)
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();``
  });

});