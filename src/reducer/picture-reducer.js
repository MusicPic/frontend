import { validatePicture } from '../utils/utils';

const D23_001 = 'Picture is required';
// const D23_002 = 'Invalid picture';

validatePicture = (picture) => {
  if (!picture) {
    throw new Error(D23_001); 
  }
  // const { 
  //   picture, placement, 
  // } = picture;
  // if (!commonName || !placement) {
  //   throw new Error(D23_002);
  // }
  return undefined;
};

export default (state = [], action) => {
  const { type, payload } = action;

  switch (type) {
    case 'PICTURE_CREATE':
      validatePicture(payload);
      return [...state, payload];
    case 'TOKEN_REMOVE':
      return [];
    case 'PICTURE_FETCH':
      return payload;
    case 'PICTURE_DELETE':
      validatePicture(payload);
      return state.filter(item => item._id !== payload._id);
    default:
      return state;
  }
};
