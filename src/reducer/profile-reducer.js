

export default (state = null, action) => {
  const { type, payload } = action;
  
  switch (type) {
    case 'PROFILE_FETCH':

      return payload;
    case 'PROFILE_SET':
    
      return [...state, payload];
    case 'PROFILE_UPDATE':
  
      return state.map(item => (item._id === payload._id ? payload : item));

    case 'PROFILE_DELETE':
  

      return state.filter(item => item._id !== payload._id);
    case 'TOKEN_REMOVE': 
      return null; 
    default:
      return state;
  }
};
