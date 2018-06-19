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

// const pictureUpdate = picture => ({
//   type: 'PICTURE_UPDATE',
//   payload: picture,
// });
// const pictureDelete = picture => ({
//   type: 'PICTURE_DELETE',
//   payload: picture,
// });


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
    // .field('description', fileDescriptor.description)
    .attach('picture', fileDescriptor.picture)
    .then((response) => {
      return store.dispatch(pictureCreate(response.body));
    });
};

export { picturesFetchRequest, pictureCreateRequest };
