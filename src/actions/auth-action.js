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
