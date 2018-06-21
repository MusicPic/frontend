export const ROOT_ROUTE = '/';
export const DASHBOARD_ROUTE = 'dashboard';
export const OAUTH_ROUTE = '/oauth/spotify';
export const FETCH_PROFILE_ROUTE = '/profile/me';
export const PROFILE_ROUTE = '/profile';
export const PICTURE_ROUTE = '/picture';
export const PLAYLIST_ROUTE = '/playlist';
export const LOGIN_ROUTE = '/login';
export const SPOTIFY_ROUTE = `https://accounts.spotify.com/authorize/?response_type=code&client_id=${CLIENT_ID}&scope=user-read-private%20user-read-email%20user-top-read%20user-library-read%20user-read-birthdate%20user-follow-read&redirect_uri=${API_URL}/login`;

