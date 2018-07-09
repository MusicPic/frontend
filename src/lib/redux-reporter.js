export default () => next => (action) => {
  try {
    console.log('__ACTION__', action);
    const result = next(action); 
    console.log('__STATE_UPDATED__');
    return result;
  } catch (error) {
    console.log('__ERROR__', error);
    action.error = error;
    return action;
  }
};
