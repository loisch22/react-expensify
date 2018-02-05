import authReducer from '../../reducers/auth';

test('should return empty object for default state', () => {
  const state = authReducer(undefined, { type: '@@INIT'});
  expect(state).toEqual({});
});

test('should set uid on login', () => {
  const action = { type: 'LOGIN', uid: '123abc'};
  const state = authReducer(undefined, action);
  expect(state.uid).toBe('123abc');
});

test('should clear uid on logout', () => {
  const action = { type: 'LOGOUT'};
  const state = authReducer({ uid: 'abc123'}, action);
  expect(state).toEqual({});
});
