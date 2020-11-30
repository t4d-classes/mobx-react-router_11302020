import axios from 'axios';
import { isNil } from 'lodash';

export const authAxios = axios.create();

authAxios.interceptors.request.use(config => {

  return {
    ...config,
    headers: {
      ...config.headers,
      'Authorization': 'Bearer ' + window.__app__?.userAccessToken,
    },
  };

});

const getValueForCaseInsensitiveKey = (key, obj) => {

  const upperCaseKeyNeedle = String(key).toUpperCase(); 

  const headerKey = Object.keys(obj).find(key => {
    return (key.toUpperCase() === upperCaseKeyNeedle);
  });

  return obj[headerKey];
};

authAxios.interceptors.response.use(response => response, error => {

  const { response, config } = error;

  if (isNil(response) || isNil(config)) {
    return Promise.reject(error);
  }

  if (
    response.status === 401 &&
    response.statusText.toUpperCase() === 'UNAUTHORIZED' &&
    getValueForCaseInsensitiveKey('WWW-Authenticate', response.headers) === 'Token realm="Backend", charset="UTF-8"'
  ) {
    return axios.request('/api/users/refresh', {
      headers: {
        Authorization: 'Bearer ' + window.localStorage.userRefreshToken
      }
    }).then((response) => {

      if (!window.__app__) {
        window.__app__ = {};
      }

      window.__app__.userAccessToken = response.data.accessToken;
      window.localStorage.userRefreshToken = response.data.refreshToken;

      return authAxios.request(config);
    });
  }

  return Promise.reject(error);
});