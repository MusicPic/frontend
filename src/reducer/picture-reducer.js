export default (state = [], action) => {
  const { type, payload } = action;

  switch (type) {
    case 'PICTURE_SET':
    // what will we get back from sending a picture to our backend
    // what will we update to our state-- a spotify playlist id?
      return [payload, ...state];
    case 'TOKEN_REMOVE':
      return [];
    default:
      return state;
  }
};