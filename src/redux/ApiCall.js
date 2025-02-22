import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
let auth_token =
  'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiZDJmM2RmMGI0NDIyN2Y3MDI0Zjk0ZjUxMmViOGQ0NDk5MDNjNjViYWM3N2FhODA0ZTQyNjE3NTRkNjFjNGQ2ZmIzYWEwYmRiZmVjYjUzM2UiLCJpYXQiOjE3MzU2NTA3NzUuNDgxMjY1MDY4MDU0MTk5MjE4NzUsIm5iZiI6MTczNTY1MDc3NS40ODEyNjc5MjkwNzcxNDg0Mzc1LCJleHAiOjE3NjcxODY3NzUuNDYwNzQ3MDAzNTU1Mjk3ODUxNTYyNSwic3ViIjoiMjMiLCJzY29wZXMiOltdfQ.PI50-dSQvnxFRF2HHhxAQFhttoMXIZ0zqK7KVgExNEssWh0Un8EeFGhvQaUGLR8sM1ttw88Fwr8A66P0tIv_zReU6YfvmhUw55jBd-N1fX_GJSygtGEWi2wtr2NCXfqez9SsAUjw0B04xlOfTZQSB01aKYxwcmLX3Yb_Schj0GcvfxEEBdkI6N1JYYpWWVLqqIhe9WZ_no7wWZCaCsy-zkaN3ULvak3EjrtMdHdoDKVFeA4G4QM-MLssjd2CuO4FSJ_yoYHKstxMoxgktVx2Yk0u13khmINCsYQyRCHjje--ABWEipslZn2Py8zTSzFFpeojkdiXA7df4HdckLGvEGCTpqERt93sCAiGuYdq5YUgcxB8b3qE3LT-8C3d71e0pj2A8iM9CEyyrmHFrASoTTN_Y8yafeVjoEQ6-NXgaEDQ-ziV6HmfodKEFIkxHNsfl0Ge3myOij7iOG6Lx38vB3zf-aNuqoCYEGEmYPyTDqVWNTqd3OJbE-aLhyDfkNjwH1mZD2udts3D8UWk_2XKXsDs3jCbDuJBsS8KJt1gqzrW2ww3HoI4qSBWNdRpElQw0Y8-wulsobBllbEu0loHe5_SnSq1ur_IzCA6CHk_rekW0aan0KaEO_-V88m75yiwcAfU59dv14vjXBMgmocoa_zBzvFLbapY0sfElV8Grec';

// export const apiCall = createApi({
//   reducerPath: 'getApiCall',
//   baseQuery: fetchBaseQuery({
//     baseUrl: 'https://staging.premad.in/lxryshared/api/',
//   }),
//   endpoints: builder => ({
//     getData: builder.query({
//       query: () => ({
//         url: 'home',
//         method: 'get',
//         headers: {
//           Accept: '*/*',
//           'content-type': 'application/json',
//           Authorization: `Bearer ${auth_token}`,
//         },
//       }),
//     }),

//     loginUser: builder.mutation({
//       query: data => ({
//         url: 'login',
//         method: 'POST',
//         body: data,
//       }),
//     }),
//   }),
// });

export const apiCall = createApi({
  reducerPath: 'apiCall',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://staging.premad.in/lxryshared/api/',
  }),
  endpoints: builder => ({
    getData: builder.query({
      query: () => ({
        method: 'GET',
        url: 'home',
        headers: {
          Accept: '*/*',
          'content-type': 'Application-json',
          Authorization: `Bearer ${auth_token}`,
        },
      }),
    }),

    loginUser: builder.mutation({
      query: data => ({
        method: 'POST',
        url: 'login',
        body: data,
      }),
    }),
  }),
});

export const {useGetDataQuery, useLoginUserMutation} = apiCall;
