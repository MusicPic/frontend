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

  describe('Profile set', () => {
    it('should return action with type PROFILE_SET', () => {
      const profile2 = { name: 'test2' };
      expect(profileAction.setProfile(profile2)).toEqual({
        type: 'PROFILE_SET',
        payload: profile2,
      });
    });
  });
  describe('Profile update', () => {
    it('should return action with type PROFILE_UPDATE', () => {
      const profile3 = { name: 'test2' };
      expect(profileAction.updateProfile(profile3)).toEqual({
        type: 'PROFILE_UPDATE',
        payload: profile3,
      });
    });
  });
  describe('Profile delete', () => {
    it('should return action with type PROFILE_DELETE', () => {
      const profile3 = { name: 'test2' };
      expect(profileAction.deleteProfile(profile3)).toEqual({
        type: 'PROFILE_DELETE',
        payload: profile3,
      });
    });
  });
});
