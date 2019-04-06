import { currentUserReducer } from '../currentUserReducer';
import * as actions from '../../actions';

describe('currentUserReducer', () => {
  it('should return the default state', () => {
    const expected = null
    const result = currentUserReducer(undefined, {});
    expect(result).toEqual(expected);
  });

  it('should return an id when type is SET_CURRENT_FAMILY', () => {
    const mockUserId = 1;
    const mockUserName = 'Dylan';
    const mockUseremail = 'dylan@dylan.org'
    const expected = {
      id: mockUserId,
      name: mockUserName,
      email: mockUseremail
    }
    const initialState = null;
    const result = currentUserReducer(initialState, actions.setCurrentUser(mockUserId, mockUserName, mockUseremail));
    expect(result).toEqual(expected);
  });
});