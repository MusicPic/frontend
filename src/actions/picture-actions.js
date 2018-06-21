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
// we pass in the state obj from picture form, it has a property picture is a jpg, preview is the base64String, url is the url
const pictureCreateRequest = fileDescriptor => (store) => {
  const { token } = store.getState();
  // const parsedToken = JSON.parse(token);
  console.log('TOKEN', token);
  console.log('PICTURE OBJECT', fileDescriptor);
  return superagent.post(`${API_URL}${routes.PICTURE_ROUTE}`)
    .set('Authorization', `Bearer ${token}`)
    .attach('thePicture', fileDescriptor.picture)
    .then((response) => {
      // reponse.body should have properties picture, keyword
      console.log('ABOUT TO DISPACTCH THE PICTURE', response.body);
      return store.dispatch(pictureCreate(response.body));
    });
};

export { picturesFetchRequest, pictureCreateRequest };

//.field('description', fileDescriptor.picture.name)
// .attach('picture', fileDescriptor.picture)
//  .attach('thePicture', fileDescriptor.picture)
//   .send({ url: fileDescriptor.url })