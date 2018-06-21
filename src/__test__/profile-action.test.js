import * as profileAction from '../actions/profile-action';

describe('Profile Action', () => {
  describe('Fetch', () => {
    it('should return action with type PROFILE_FETCH', () => {
      const profile = { name: 'test' };
      expect(profileAction.fetchProfile(profile)).toEqual({
        type: 'PROFILE_FETCH',
        payload: profile,
      });
    });
  });
});
