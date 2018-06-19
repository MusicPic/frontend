import superagent from 'superagent';

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

const pictureCreateRequest = picture => (dispatch) => {
  return superagent.post(`${API_URL}/api/picture`)
    .send(picture)
    .then((response) => {
      dispatch(pictureCreate(response.body));
      return response;
    });
};

export { picturesFetchRequest, pictureCreateRequest };
