import superagent from 'superagent';
import * as routes from '../routes';

const picturesFetch = pictures => ({ 
  type: 'PICTURE_FETCH', 
  payload: pictures,
});

const pictureCreate = picture => ({
  type: 'PICTURE_CREATE',
  payload: picture,
});

const picturesFetchRequest = () => (dispatch) => {
  return superagent.get(`${API_URL}/api/pictures`)
    .then((response) => {
      dispatch(picturesFetch(response.body));
      return response; 
    }); 
};

const pictureCreateRequest = fileDescriptor => (store) => {
  const { token } = store.getState();
  return superagent.post(`${API_URL}${routes.PICTURE_ROUTE}`)
    .set('Authorization', `Bearer ${token}`)
    .attach('thePicture', fileDescriptor.picture)
    .then((response) => {
      // console.log('PICTURE CREATE REESPONSE', response.body);
      return store.dispatch(pictureCreate(response.body));
    });
};

export { picturesFetchRequest, pictureCreateRequest };
