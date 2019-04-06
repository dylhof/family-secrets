import { currentViewReducer } from '../currentViewReducer';
import * as actions from '../../actions';

describe('currentViewReducer', () => {

  it('should return the default state', () => {
    const expected = '';
    const result = currentViewReducer(undefined, {})
    expect(result).toEqual(expected);
  });

  it('should set the currentView', () => {
    const mockView = 'Stories';
    const initialState = '';
    const result = currentViewReducer(initialState, actions.setCurrentView(mockView));
    expect(result).toEqual(mockView);
  });
});