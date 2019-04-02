import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import {App, mapStateToProps} from './App';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { rootReducer } from '../../reducers';


describe('App', () => {
  const mockProps = {
    error: '',
    isLoading: false
  }

  it('renders without crashing', () => {
    const div = document.createElement('div');
    const store = createStore(rootReducer)
    ReactDOM.render(<Provider store={store}><App /></Provider>, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  describe('App Component', () => {
    let wrapper;

    beforeEach(() => {
      wrapper = shallow(<App {...mockProps}/>)
    });

    it('should match the snapshot', () => {
      expect(wrapper).toMatchSnapshot()
    });

    it('should match the snapshot with an error in props', () => {
      wrapper = shallow(<App {...mockProps} error='Oh no!' />);
      expect(wrapper).toMatchSnapshot();
    });

    it('should match the snapshot when isLoading is true', () => {
      wrapper = shallow(<App {...mockProps} isLoading={true}/>);
      expect(wrapper).toMatchSnapshot();
    });
  });

  describe('mapStateToProps', () => {
   
    it('should return an object with an error and isLoading', () => {
      const mockState = {
        error: 'Oh no! Error!',
        isLoading: false,
        otherState: 'something'
      };
      const expected = {
        error: 'Oh no! Error!',
        isLoading: false,
      };
      const result = mapStateToProps(mockState);
      expect(result).toEqual(expected);
    });
  });
});
