import superagent from 'superagent';
import * as routes from '../routes';

const setProfile = profile => ({
  type: 'PROFILE_SET',
  payload: profile,
});
const fetchProfile = profile => ({
  type: 'PROFILE_FETCH',
  payload: profile,
});
const updateProfile = profile => ({
  type: 'PROFILE_UPDATE',
  payload: profile,
});
const deleteProfile = profile => ({
  type: 'PROFILE_DELETE',
  payload: profile,
});
const requestProfile = picture => (store) => {

  return superagent.post(`${API_URL}${routes.PICTURE_ROUTE}`)
    .attach('photo', picture)
    .then((response) => {
      return store.dispatch(setProfile(response.body));
    });
};

const fetchRequest = () => (store) => {
  const { token } = store.getState(); 

  return superagent.get(`${API_URL}/profile/me`)
    .set('Authorization', `Bearer ${token}`) 
    .then((response) => {
      return store.dispatch(fetchProfile(response.body));
    });
};
export { requestProfile, fetchRequest };

