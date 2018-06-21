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
// fileDescriptor is the state obj from picture form, it has these properties-- picture is a jpg, preview is the base64String, url is the url
const pictureCreateRequest = fileDescriptor => (store) => {
  const { token } = store.getState();
  return superagent.post(`${API_URL}${routes.PICTURE_ROUTE}`)
    .set('Authorization', `Bearer ${token}`)
    .attach('thePicture', fileDescriptor.picture)
    .then((response) => {
      // response has a body property that holds a picture instance from our database
      console.log('PICTURE CREATE ACTION')
      return store.dispatch(pictureCreate(response.body));
    });
};

export { picturesFetchRequest, pictureCreateRequest };
