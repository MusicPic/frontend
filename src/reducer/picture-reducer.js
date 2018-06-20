
const D23_001 = 'Picture is required';


const validatePicture = (picture) => {
  if (!picture) {
    throw new Error(D23_001); 
  }

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
