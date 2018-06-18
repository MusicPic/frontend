import superagent from 'superagent';
import * as routes from '../routes';

// sync actions 

const setPicture = picture => ({
  type: 'PICTURE_SET',
  payload: picture,
});

//async 

const requestPicture = picture => (store) => {
  // this route will make a request to the face api and return keywords
  // those keywords will be used to mke a request to the spotify api which will return a spotify playlist
  return superagent.post(`${API_URL}${routes.PICTURE_ROUTE}`)
    .attach('photo', picture)
    .then((response) => {
      return store.dispatch(setPicture(response.body));
    });
};
export { requestPicture };

