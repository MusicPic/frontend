import reducer from '../reducer/profile-reducer';

describe('Profile Reducer', () => {
  it('should fetch a profile', () => {
    const state = {};
    const profile = { name: 'test' };
    const action = {
      type: 'PROFILE_FETCH',
      payload: profile,
    };
    expect(reducer(state, action)).toEqual(profile);
    expect(reducer(state, action)).toBeInstanceOf(Object);
  });
});

describe('Token remove', () => {
  it('should fetch a profile', () => {
    const state = { name: 'test' };
    const action = {
      type: 'TOKEN_REMOVE',
      payload: null,
    };
    expect(reducer(state, action)).toBeNull();
  });
});
describe('Profile set', () => {
  it('should set a profile', () => {
    const state = {};
    const profile = { name: 'test' };
    const action = {
      type: 'PROFILE_SET',
      payload: profile,
    };
    // console.log(reducer(state, action));
    expect(reducer(state, action)).toBeInstanceOf(Array);
  });
});

