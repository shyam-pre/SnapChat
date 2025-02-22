// import NetInfo from '@react-native-community/netinfo';
// import {async_keys, getData} from './UserPreference';
// import axios from 'axios';

// class ApiContainer {
//   BASE_URL = 'https://staging.premad.in/lxryshared/api/';

//   createFormData = params => {
//     const formData = new FormData();
//     Object.keys(params).forEach(key => formData.append(key, params[key]));
//     return formData;
//   };

//   createRawData = params => JSON.stringify(params);

//   async getApi(url) {
//     return this._request('GET', url);
//   }

//   async postApi(url, data, headers) {
//     return this._request('POST', url, data, headers);
//   }

//   async putApi(url, data, headers) {
//     return this._request('PUT', url, data, headers);
//   }

//   async deleteApi(url, headers) {
//     return this._request('DELETE', url, null, headers);
//   }

//   async _request(method, url, data = null, customHeaders = {}) {
//     const token = await getData(async_keys.auth_token);
//     const isConnected = await NetInfo.fetch().then(state => state.isConnected);

//     if (!isConnected) throw new Error('No network connection');

//     const headers = {
//       'Content-Type': 'application/json',
//       Accept: 'application/json',
//       ...(token && {Authorization: `Bearer ${token}`}),
//       ...customHeaders,
//     };

//     try {
//       const response = await axios({
//         method,
//         url: `${this.BASE_URL}${url}`,
//         data,
//         headers,
//       });
//       console.log('API Response:', {url, response, data, headers});
//       return response.data;
//     } catch (error) {
//       console.error('API Error:', {url, error, data, headers});
//       throw error?.response || error;
//     }
//   }
// }

// export const apifuntion = new ApiContainer();

import NetInfo from '@react-native-community/netinfo';
import {async_keys, getData} from './UserPreference';
import axios from 'axios';
import {Alert} from 'react-native';

export const BASE_URL = 'https://staging.premad.in/lxryshared/api/';
let auth_token =
  'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiZDJmM2RmMGI0NDIyN2Y3MDI0Zjk0ZjUxMmViOGQ0NDk5MDNjNjViYWM3N2FhODA0ZTQyNjE3NTRkNjFjNGQ2ZmIzYWEwYmRiZmVjYjUzM2UiLCJpYXQiOjE3MzU2NTA3NzUuNDgxMjY1MDY4MDU0MTk5MjE4NzUsIm5iZiI6MTczNTY1MDc3NS40ODEyNjc5MjkwNzcxNDg0Mzc1LCJleHAiOjE3NjcxODY3NzUuNDYwNzQ3MDAzNTU1Mjk3ODUxNTYyNSwic3ViIjoiMjMiLCJzY29wZXMiOltdfQ.PI50-dSQvnxFRF2HHhxAQFhttoMXIZ0zqK7KVgExNEssWh0Un8EeFGhvQaUGLR8sM1ttw88Fwr8A66P0tIv_zReU6YfvmhUw55jBd-N1fX_GJSygtGEWi2wtr2NCXfqez9SsAUjw0B04xlOfTZQSB01aKYxwcmLX3Yb_Schj0GcvfxEEBdkI6N1JYYpWWVLqqIhe9WZ_no7wWZCaCsy-zkaN3ULvak3EjrtMdHdoDKVFeA4G4QM-MLssjd2CuO4FSJ_yoYHKstxMoxgktVx2Yk0u13khmINCsYQyRCHjje--ABWEipslZn2Py8zTSzFFpeojkdiXA7df4HdckLGvEGCTpqERt93sCAiGuYdq5YUgcxB8b3qE3LT-8C3d71e0pj2A8iM9CEyyrmHFrASoTTN_Y8yafeVjoEQ6-NXgaEDQ-ziV6HmfodKEFIkxHNsfl0Ge3myOij7iOG6Lx38vB3zf-aNuqoCYEGEmYPyTDqVWNTqd3OJbE-aLhyDfkNjwH1mZD2udts3D8UWk_2XKXsDs3jCbDuJBsS8KJt1gqzrW2ww3HoI4qSBWNdRpElQw0Y8-wulsobBllbEu0loHe5_SnSq1ur_IzCA6CHk_rekW0aan0KaEO_-V88m75yiwcAfU59dv14vjXBMgmocoa_zBzvFLbapY0sfElV8Grec';
const createFormData = params => {
  const formData = new FormData();
  Object.keys(params).forEach(key => formData.append(key, params[key]));
  return formData;
};

const createRawData = params => JSON.stringify(params);

const request = async (method, url, data = null, customHeaders = {}) => {
  //   const token = await getData(async_keys.auth_token);
  const token = await auth_token;
  const isConnected = await NetInfo.fetch().then(state => state.isConnected);

  if (!isConnected) {
    Alert.alert('No network connection');
    throw new Error('No network connection');
  }

  const headers = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    ...(token && {Authorization: `Bearer ${token}`}),
    ...customHeaders,
  };

  try {
    const response = await axios({
      method,
      url: `${BASE_URL}${url}`,
      data,
      headers,
    });
    console.log('API Response:', {url, response, data, headers});
    return response.data;
  } catch (error) {
    console.error('API Error:', {url, error, data, headers});
    throw error?.response || error;
  }
};

export const apiFunction = {
  get: (url, headers) => request('GET', url, null, headers),
  post: (url, data, headers) => request('POST', url, data, headers),
  put: (url, data, headers) => request('PUT', url, data, headers),
  delete: (url, headers) => request('DELETE', url, null, headers),
  createFormData,
  createRawData,
};
