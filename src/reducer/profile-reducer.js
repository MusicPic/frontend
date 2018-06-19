// import { validateProfile } from '../utils/utils';


export default (state = null, action) => {
  const { type, payload } = action;
  
  switch (type) {
    case 'PROFILE_FETCH':
      // validateProfile(payload);
      return payload;
    case 'PROFILE_SET':
      // validateProfile(payload);
      return [...state, payload];
    case 'PROFILE_UPDATE':
      // validateProfile(payload);
      return state.map(item => (item._id === payload._id ? payload : item));

    case 'PROFILE_DELETE':
      // validateProfile(payload);
      return state.filter(item => item._id !== payload._id);
    case 'TOKEN_REMOVE': 
      return null; 
    default:
      return state;
  }
};
