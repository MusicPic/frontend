
import superagent from 'superagent';
import * as routes from '../routes';
import { deleteCookie } from '../utils/cookie';
import { TOKEN_COOKIE_KEY } from '../constants';

export const setTokenAction = token => ({ 
  type: 'TOKEN_SET', 
  payload: token,
});

export const removeTokenAction = () => ({ 
  type: 'TOKEN_REMOVE', 
});

export const logout = () => {
  deleteCookie(TOKEN_COOKIE_KEY);
  return removeTokenAction();
};


// export const login = () => (store) => {
//   console.log('DO WE GET HERE');
//   return store.dispatch(setTokenAction(response.text));
// };
