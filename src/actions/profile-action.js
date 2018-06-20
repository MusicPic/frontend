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


const requestProfile = profile => (store) => {
  const { token } = store.getState('token');
  return superagent.post(`${API_URL}${routes.PROFILE_ROUTE}`)
    .set('Authorization', `Bearer ${token}`)
    .set('Content-Type', 'application/json') 
    .send(profile)
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

const updateProfileRequest = profile => (store) => {
  const token = localStorage.getItem('token');
  return superagent.put(`${API_URL}${routes.PROFILE_ROUTE}/${profile._id}`)
    .set('Authorization', `Bearer ${token}`) 
    .set('Content-Type', 'application/json')
    .send(profile)
    .then((response) => {
      return store.dispatch(updateProfile(response.body));
    });
};

const deleteProfileRequest = profile => (store) => {
  const { token } = store.getState();
  return superagent.delete(`${API_URL}/api/parcels/${profile._id}`)
    .set('Authorization', `Bearer ${token}`) 
    .then((response) => {
      store.dispatch(deleteProfile(profile));
      return response;
    });
};

export { requestProfile, fetchRequest, updateProfileRequest, deleteProfileRequest };

