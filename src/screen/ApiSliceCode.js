import {
  BaseQueryFn,
  createApi,
  FetchArgs,
  fetchBaseQuery,
  FetchBaseQueryError,
} from '@reduxjs/toolkit/query/react';
import { RootState, store } from '../store';
import { API_ENDPOINTS, BASE_URL } from '../../assets/constant/Api';
import {
  AuthResponse,
  BlockedListParams,
  CallingHistoryParams,
  CallingReviewParams,
  CancelRequestforProfilePicture,
  GetFollowersParams,
  GetUserDetailParams,
  ImageResponse,
  LoginCredentials,
  MissedCallListParams,
  OtpCredentials,
  OtpResponse,
  Post,
  PriceCredentials,
  RegisterCredentials,
  RequestforProfilePicture,
  Response,
  goLiveConsultantType,
  liveStreamUpdateStatusCredentials,
  logoutCredentials,
  logoutResponse,
  upDatePrifileResponse,
  updateProfileCredentials,
} from '../../types';
import { userDetailsActions } from './userDetailsSlice';
import { AppStrings, LiveStreamStatus } from '../../assets/constant/String';
import { mediaActions } from './mediaSlice';
import { Alert } from 'react-native';
import { setWaitingUserCount } from './agoraSlice';

// const extractData = (response: Response | undefined) => {
//   return response?.data ?? [];
// };
const extractData = (response: Response | undefined) => {
  if (response?.data !== undefined && response?.data !== null) {
    if (Array.isArray(response.data)) {
      return response.data;
    } else if (typeof response.data === 'object') {
      return Object.keys(response.data).length === 0 ? {} : response.data;
    }
  }
  return [];
};

// Define a base query
const baseQuery = fetchBaseQuery({
  baseUrl: BASE_URL,
  prepareHeaders: (headers, { getState }) => {
    const state = getState() as RootState;
    const { token } = state.auth;
    console.log('token *', token);
    if (token) {
      headers.set('Authorization', Bearer ${token});
    }
    return headers;
  },
  credentials: 'include',
});

const customBaseQuery: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  const startTime = Date.now();

  // Log request details
  if (typeof args === 'string') {
    console.log('Config : ', {
      method: 'GET',
      url: args,
    });
  } else {
    console.log('Config : ', {
      method: args.method,
      url: args.url,
      headers: args.headers,
      body: args.body,
    });
  }

  try {
    const result = await baseQuery(args, api, extraOptions);
    const endTime = Date.now();
    const duration = endTime - startTime;
    // Log response details
    console.log('Response : ', {
      status: result.meta?.response?.status,
      headers: result.meta?.response?.headers,
      data: result.data,
      error: result.error,
      duration: ${duration}ms,
    });
    return result;
  } catch (error) {
    console.log('Network request failed:', error); // Log error details
    return { error: { status: 'FETCH_ERROR', error: String(error) } }; // Return a formatted error
  }
};

// Define reusable query configurations
const queryConfig = {
  get: (url: string, body?: object) => ({
    url,
    method: 'GET',
    body: JSON.stringify(body),
  }),
  post: (url: string, body?: object, isMultipart = false) => ({
    url,
    method: 'POST',
    body: isMultipart ? body : body,
    headers: {
      Accept: isMultipart ? 'multipart/form-data' : 'application/json',
      'Content-Type': isMultipart ? 'multipart/form-data' : 'application/json',
    },
  }),
  delete: (url: string) => ({
    url,
    method: 'DELETE',
  }),
  put: (url: string, body?: object, isMultipart = false) => ({
    url,
    method: 'PUT',
    body: body,
    headers: {
      Accept: isMultipart ? 'multipart/form-data' : 'application/json',
      'Content-Type': isMultipart ? 'multipart/form-data' : 'application/json',
    }
  }),
  patch: (url: string, body?: object) => ({
    url,
    method: 'PATCH',
    body: body,
  }),
};

// Helper function to build query parameters
const buildQueryParams = (params: CallingHistoryParams): URLSearchParams => {
  const searchParams = new URLSearchParams({
    coach_id: params.coach_id,
    page: params.page,
    size: params.size,
  });
  if (params.order_type) searchParams.append('order_type', params.order_type);
  if (params.start_date) searchParams.append('start_date', params.start_date);
  if (params.end_date) searchParams.append('end_date', params.end_date);
  return searchParams;
};

const buildQueryParamsWithOutId = (
  params: CallingHistoryParams,
): URLSearchParams => {
  const searchParams = new URLSearchParams({
    page: params.page,
    size: params.size,
  });
  if (params.order_type) searchParams.append('order_type', params.order_type);
  if (params.start_date) searchParams.append('start_date', params.start_date);
  if (params.end_date) searchParams.append('end_date', params.end_date);
  if (params.status) searchParams.append('status', params?.status);
  return searchParams;
};
const buildQueryParamsWithOutOrderType = (
  params: CallingHistoryParams,
): URLSearchParams => {
  const searchParams = new URLSearchParams({
    page: params.page,
    size: params.size,
  });
  if (params.start_date) searchParams.append('start_date', params.start_date);
  if (params.end_date) searchParams.append('end_date', params.end_date);
  if (params.status) searchParams.append('status', params?.status);
  return searchParams;
};

const buildQueryParamsForReview = (
  params: CallingReviewParams,
): URLSearchParams => {
  const searchParams = new URLSearchParams({
    page: params.page,
    limit: params.limit,
  });
  if (params.stars != 6) {
    searchParams.append('stars', params.stars);
  }

  return searchParams;
};

// Define the API
export const callApi = createApi({
  reducerPath: 'callApi',
  baseQuery: customBaseQuery,
  refetchOnFocus: true,
  refetchOnMountOrArgChange: 30,
  refetchOnReconnect: true,
  tagTypes: [
    'Post',
    'User',
    'MyFollowers',
    'UserDetails',
    'CoachPriceList',
    'CoachSkills',
    'CoachMenu',
    'BlockList',
    'CallingHistory',
    'OrderHistory',
    'CoachWaitingList',
    'MyReviewsList',
    'GalleryPhotosList',
    'GoLiveConsultant',
    'LiveSessionList',
    'ServiceStatus',
    'PriceLogHistory',
    'BankAccountList',
    'getListenerFav',
    "PaypalList"
  ],
  endpoints: builder => ({
    /************ post Data Mutation  *************/
    login: builder.mutation<AuthResponse, LoginCredentials>({
      query: body => queryConfig.post(API_ENDPOINTS.generateOtp, body),
    }),
    otp: builder.mutation<OtpResponse, OtpCredentials>({
      query: body => queryConfig.post(API_ENDPOINTS.login, body),
    }),
    register: builder.mutation<AuthResponse, RegisterCredentials>({
      query: credentials =>
        queryConfig.post(API_ENDPOINTS.register, credentials),
    }),
    logout: builder.mutation<logoutResponse, logoutCredentials>({
      query: body => queryConfig.post(API_ENDPOINTS.logout, body),
    }),
    updateNumber: builder.mutation<AuthResponse, LoginCredentials>({
      query: body => queryConfig.post(API_ENDPOINTS.updateNumber, body),
    }),
    verifyotpForUpdateNumber: builder.mutation<any, any>({
      query: body =>
        queryConfig.patch(API_ENDPOINTS.verifyOtpForUpdateNumber, body),
      invalidatesTags: ['UserDetails'],
    }),
    uploadProfileImage: builder.mutation<ImageResponse, FormData>({
      query: formData =>
        queryConfig.post(API_ENDPOINTS.uploadProfileImage, formData, true),
    }),

    uploadgalleryImage: builder.mutation<ImageResponse, FormData>({
      query: formData => {
        return queryConfig.post(
          API_ENDPOINTS.uploadGalleryImage,
          formData,
          true,
        );
      },
      invalidatesTags: ['GalleryPhotosList'],
    }),


    upDateProfile: builder.mutation<
      upDatePrifileResponse,
      updateProfileCredentials
    >({
      query: credentials =>
        queryConfig.put(API_ENDPOINTS.UpDateProfile, credentials),
      transformResponse: (response: Response) => {
        return response
      },
      invalidatesTags: ['UserDetails'],
    }),
    RequestforProfilePicture: builder.mutation<
      upDatePrifileResponse,
      RequestforProfilePicture
    >({
      query: ({ photo_id, ...credentials }) => {
        return queryConfig.put(
          ${API_ENDPOINTS.imageUpdateRequest}${photo_id},
          credentials,
        );
      },
      transformResponse: (response: any) => {
        // const result = extractData(response);        
        return response;
      },
      invalidatesTags: ['GalleryPhotosList'],
    }),
    CancelRequestforProfilePicture: builder.mutation<
      upDatePrifileResponse,
      CancelRequestforProfilePicture
    >({
      query: ({ photo_id, ...credentials }) =>
        queryConfig.post(
          ${API_ENDPOINTS.imageUpdateRequestCancel}${photo_id},
          credentials,
        ),
      invalidatesTags: ['GalleryPhotosList'],
    }),
    delete: builder.mutation<{ success: boolean; id: number }, number>({
      query: id => queryConfig.delete(/posts/${id}),
      invalidatesTags: (result, error, id) => [{ type: 'Post', id }],
    }),

    rejectOrder: builder.mutation<any, any>({
      query: body => queryConfig.put(API_ENDPOINTS.rejectOrder, body),
    }),

    /************ Live Strim Mutation  *************/
    goLiveConsultantDetails: builder.mutation<Response, goLiveConsultantType>({
      query: credentials =>
        queryConfig.post(API_ENDPOINTS.goLiveConsultants, credentials),
    }),
    runLiveStream: builder.mutation<Response, any>({
      query: credentials =>
        queryConfig.put(${API_ENDPOINTS.runStream}${credentials.stream_id}, {
          status: LiveStreamStatus.run,
        }),
    }),
    cancelLiveStream: builder.mutation<Response, any>({
      query: credentials =>
        queryConfig.put(
          ${API_ENDPOINTS.cancelStream}${credentials.stream_id},
          { status: LiveStreamStatus.cancel },
        ),
    }),
    completeLiveStream: builder.mutation<Response, any>({
      query: credentials =>
        queryConfig.put(
          ${API_ENDPOINTS.completeStream}${credentials.stream_id},
          { status: LiveStreamStatus.complete },
        ),
    }),
    updateLiveStreamStatus: builder.mutation<
      Response,
      liveStreamUpdateStatusCredentials
    >({
      query: ({ id, ...credentials }) =>
        queryConfig.put(
          ${API_ENDPOINTS.updateLiveStreamStatus}${id},
          credentials,
        ),
      invalidatesTags: (result, error, { id, ...credentials }) => {
        return credentials?.status === AppStrings.liveStream.FINISHED
          ? ['LiveSessionList']
          : [];
      },
    }),

    confirmOrder: builder.mutation<any, any>({
      query: body => queryConfig.put(API_ENDPOINTS.confirmOrder, body),
    }),

    completeOrder: builder.mutation<any, any>({
      query: body => queryConfig.put(API_ENDPOINTS.completeOrder, body),
    }),

    addBankDetails: builder.mutation<any, any>({
      query: body => queryConfig.post(API_ENDPOINTS.addbankDetails, body, true),
      invalidatesTags: ['BankAccountList'],
    }),
    updateBankDetails: builder.mutation<any, any>({
      query: body => queryConfig.put(API_ENDPOINTS.updateBankDetails, body, true),
      invalidatesTags: ['BankAccountList'],
    }),
    setBankDetailsPrimary: builder.mutation<any, any>({
      query: body => queryConfig.put(${API_ENDPOINTS.setPrimaryBank}${body.bank_id}, { 'is_primary': body?.is_primary }),
      invalidatesTags: ['BankAccountList'],
    }),

    getPayPalList: builder.query<Response[], any>({
      query: userId => queryConfig.get(${API_ENDPOINTS.getPayPalList}),
      transformResponse: (response: any) => {
        const result = extractData(response);
        return result;
      },
      providesTags: ['PaypalList'],
    }),

    addPaypalDetails: builder.mutation<any, any>({
      query: body => queryConfig.post(API_ENDPOINTS.addpayPal, body),
      invalidatesTags: ['PaypalList'],
    }),
    updatePayPalDetails: builder.mutation<any, any>({
      query: body => {
        return queryConfig.put(${API_ENDPOINTS.updatepayPalDatails}${body?.id}, { "paypal_id": body?.paypal_id })
      },
      invalidatesTags: ['PaypalList'],
    }),
    activeInactivePayPal: builder.mutation<Response[], { id: any, is_active: boolean }>({
      query: body => {
        return queryConfig.patch(${API_ENDPOINTS.activeInactivePayPal}${body?.id}, { "is_active": body?.is_active });
      },
      invalidatesTags: ['PaypalList']
    }),

    getBankAccountList: builder.query<Response[], any>({
      query: userId => queryConfig.get(${API_ENDPOINTS.accountList}),
      transformResponse: (response: any) => {
        const result = extractData(response);
        return result;
      },
      providesTags: ['BankAccountList'],
    }),

    /************ get Data Query *************/
    getMyFollowers: builder.query<Response[], GetFollowersParams>({
      query: userId => queryConfig.get(${API_ENDPOINTS.FollowersList}),
      providesTags: ['MyFollowers'],
    }),

    getUserDetailsById: builder.query<Response, void>({
      query: userId => queryConfig.get(${API_ENDPOINTS.coachDetails}),
      transformResponse: (response: Response) => {
        if (response?.data) {
          store.dispatch(userDetailsActions.setUserDetails(response))
        }
        return response
      },
      onQueryStarted: async (arg, { dispatch, queryFulfilled }) => {
        try {
          const { data } = await queryFulfilled;
          // dispatch(userDetailsActions.setUserDetails(data));
        } catch (error) {
          console.log('Failed to fetch and dispatch coach', error);
        }
      },
      providesTags: ['UserDetails'],
    }),
    getCoachCategories: builder.query<Response[], void>({
      query: credentials => queryConfig.get(API_ENDPOINTS.coachCategories),
      transformResponse: (response: Response) => {

        return extractData(response);
      },
    }),
    getCoachSkills: builder.query<Response[], void>({
      query: credentials => queryConfig.get(API_ENDPOINTS.coachSkill),
      transformResponse: (response: Response) => {
        return extractData(response);
      },
      providesTags: ['CoachSkills'],
    }),
    getLanguages: builder.query<Response[], void>({
      query: credentials => queryConfig.get(API_ENDPOINTS.getlanguages),
      transformResponse: (response: Response) => {
        return extractData(response);
      },
    }),
    // session
    getConsultantSession: builder.query<Response[], void>({
      query: (credentials) => queryConfig.get(API_ENDPOINTS.getConsultantSession),
      // query: () => ({
      //   url: '/api/v1/consultant/management/session/get-consultant-sessions',
      //   method: "GET",
      // }),
      transformResponse: (response: Response) => {
        console.log('222222222222222222r', response);

        return response.data ?? [];
      },
    }),

    getCoachMenu: builder.query<Response[], any>({
      query: id =>
        queryConfig.get(${API_ENDPOINTS.coachMenu}?consultant_type=${id}),
      transformResponse: (response: Response) => {
        return extractData(response);
      },
      providesTags: ['CoachMenu'],
    }),
    getCoachMenuSetting: builder.query<Response[], { id: number, consultant_type: number }>({
      query: body => queryConfig.get(${API_ENDPOINTS.coachMenuSetting}9/?consultant_type=${body?.consultant_type}),
      transformResponse: (response: Response) => {
        // Alert.alert("sdsd")
        return extractData(response);
      },
      // providesTags: ['CoachMenuSetting'],
    }),
    getPriceLogHistory: builder.query<Response[], any>({
      query: params => {
        const searchParams = buildQueryParamsForReview(params);
        return ${API_ENDPOINTS.priceLogHistory}?${searchParams.toString()};
      },

      providesTags: ['PriceLogHistory'],
    }),
    cancelPriceRequest: builder.mutation<any, any>({
      query: body => {
        return queryConfig.put(${API_ENDPOINTS.cancelPriceRequest}${body?.cancel_req_id});
      },
      invalidatesTags: ['PriceLogHistory'],
    }),
    coachPriceChange: builder.mutation<any, PriceCredentials>({
      query: credentials =>
        queryConfig.post(API_ENDPOINTS.coachPriceschange, credentials),
      invalidatesTags: ['PriceLogHistory'],
    }),
    getBlockList: builder.query<Response[], BlockedListParams>({
      query: params => {
        const searchParams = buildQueryParamsWithOutId(params);
        return ${API_ENDPOINTS.blockList}?${searchParams.toString()};
      },
      providesTags: ['BlockList'],
    }),

    getMissedCallList: builder.query<Response[], MissedCallListParams>({
      query: params => {
        const searchParams = buildQueryParamsWithOutId(params);
        return ${API_ENDPOINTS.missedCallList}?${searchParams.toString()};
      },
    }),
    deleteUserFromBlockList: builder.mutation<Response[], number>({
      query: id =>
        queryConfig.delete(${API_ENDPOINTS.remove_from_blockList}${id}),
      transformResponse: (response: Response) => {
        return response;
      },
      invalidatesTags: (result, error, id) => [{ type: 'Post', id }],
    }),
    getCallingHistory: builder.query<Response[], CallingHistoryParams>({
      query: params => {
        const searchParams = buildQueryParamsWithOutId(params);
        return ${API_ENDPOINTS.callingHistory}?${searchParams.toString()};
      },
      providesTags: ['CallingHistory'],
    }),
    CallingHistoryForGetData: builder.mutation<any, CallingHistoryParams>({
      query: params => {
        const searchParams = buildQueryParamsWithOutOrderType(params);
        return queryConfig.post(${API_ENDPOINTS.callingHistory}?${searchParams.toString()}, { multi_order_type: params?.order_type || [] });
      },
      // providesTags: ['CallingHistory'],
    }),
    getOrderHistory: builder.query<Response[], CallingHistoryParams>({
      query: params => {
        const searchParams = buildQueryParamsWithOutId(params);
        return ${API_ENDPOINTS.callingHistory}?${searchParams.toString()};
      },

      providesTags: ['OrderHistory'],
    }),
    getCoachWaitingList: builder.query<Response[], void>({
      query: credentials =>
        queryConfig.get(${API_ENDPOINTS.CoachWaitingList}),
      transformResponse: (response: Response) => {
        const result = extractData(response)
        if (result) {
          store.dispatch(setWaitingUserCount(result.length))
        }
        console.log('response-- waitinglist-->', result)
        return result;
      },
      providesTags: ['CoachWaitingList'],
    }),

    getMyReviewsList: builder.query<Response[], any>({
      query: params => {
        const searchParams = buildQueryParamsForReview(params);
        return ${API_ENDPOINTS.CoachReviewsList}?${searchParams.toString()};
      },
      // queryConfig.get(${API_ENDPOINTS.CoachReviewsList}${userId}),
      transformResponse: (response: Response) => {
        return extractData(response);
      },
      providesTags: ['MyReviewsList'],
    }),
    getGalleryPhotosList: builder.query<Response[], void>({
      query: credentials =>
        queryConfig.get(${API_ENDPOINTS.galleryPhotosList}?page=1&size=10),
      transformResponse: (response: Response) => {
        return extractData(response);
      },
      providesTags: ['GalleryPhotosList'],
    }),
    deleteGalleryPhoto: builder.mutation<Response[], { image_id: number }>({
      query: ({ image_id }) => {
        return queryConfig.delete(
          ${API_ENDPOINTS.galleryPhotosList}${image_id},
        );
      },
      invalidatesTags: ['GalleryPhotosList'],
    }),
    getConsultantOptionList: builder.query<Response[], void>({
      query: credentials =>
        queryConfig.get(API_ENDPOINTS.getConsultantOptionData),
      transformResponse: (response: Response) => {
        return extractData(response);
      },
    }),
    getconsultantWalletbalance: builder.query<Response[], void>({
      query: credentials => queryConfig.get(API_ENDPOINTS.walletBalance),
      transformResponse: (response: Response) => {
        return extractData(response);
      },
      // providesTags: ['WalletBalance'],
    }),

    /************ Live Strim Query  *************/
    liveSessionList: builder.query<Response[], { page: number, size: number }>({
      query: body => queryConfig.get(${API_ENDPOINTS.liveSessionList}?page=${body.page}&size=${body.size}),
      // transformResponse: (response: Response) => {
      //   return response;
      // },
      providesTags: ['LiveSessionList'],
    }),

    /************** Service Status **************/
    getServiceStatus: builder.mutation<Response[], void>({
      query: credentials => queryConfig.get(API_ENDPOINTS.serviceStatus),
      onQueryStarted: async (arg, { dispatch, queryFulfilled }) => {
        try {
          const { data }: any = await queryFulfilled;

          data.data.forEach((serviceEle: any) => {
            if (serviceEle?.type === 1) {
              dispatch(mediaActions.setChat(serviceEle?.status));
            } else if (serviceEle?.type === 2) {
              dispatch(mediaActions.setAudio(serviceEle?.status));
            } else if (serviceEle?.type === 3) {
              dispatch(mediaActions.setVideo(serviceEle?.status));
            } else if (serviceEle?.type === 4) {
              dispatch(mediaActions.setAnonymous(serviceEle?.status));
            } else if (serviceEle?.type === 5) {
              dispatch(mediaActions.setPrivate(serviceEle?.status));
            } else if (serviceEle?.type === 6) {
              dispatch(mediaActions.setAnonymous(serviceEle?.status));
            }
          });

          // dispatch(userDetailsActions.setUserDetails(data));
        } catch (error) {
          console.log('Failed to fetch and dispatch coach', error);
        }
      },
      providesTags: ['ServiceStatus'],
    }),
    updateServiceStatus: builder.mutation<any, any>({
      query: body =>
        queryConfig.put(
          ${API_ENDPOINTS.serviceStatus}/${body.id},
          (body = { status: body.status }),
        ),
      transformResponse: (response: Response) => {

        return response;
      },
      // invalidatesTags: ['ServiceStatus']
    }),
    coachOrderCreate: builder.mutation<any, any>({
      query: body => {
        return queryConfig.post(${API_ENDPOINTS.coachOrderCreate}, body);
      },
      transformResponse: (response: Response) => {
        return response;
      },
      // invalidatesTags: ['ServiceStatus']
    }),

    updateMissedCallOrder: builder.mutation<any, any>({
      query: body => {

        return queryConfig.put(${API_ENDPOINTS.updateMissedCallOrder}, body);
      },
      transformResponse: (response: Response) => {
        return response;
      },
      // invalidatesTags: ['ServiceStatus']
    }),

    listenerAddToFav: builder.mutation<any, any>({
      query: body => {

        return queryConfig.post(${API_ENDPOINTS.listenerAddFav}, body);
      },
      transformResponse: (response: Response) => {
        return response;
      },
      invalidatesTags: ['CallingHistory'],
    }),

    getListenerFav: builder.query<Response[], BlockedListParams>({
      query: params => {
        const searchParams = buildQueryParamsWithOutId(params);
        return ${API_ENDPOINTS.getListenerFav}?${searchParams.toString()};
      },
      providesTags: ['getListenerFav'],
    }),
    blockedUser: builder.mutation<any, any>({
      query: body => {
        return queryConfig.post(${API_ENDPOINTS.blockeUser}, body);
      },
      transformResponse: (response: Response) => {
        return response;
      },
      invalidatesTags: ['CallingHistory'],
    }),
    updateAddToFav: builder.mutation<any, any>({
      query: body => {
        return queryConfig.put(${API_ENDPOINTS.updateListenerfav}${body?.user_id}, {
          is_favourited: body?.is_favourited,
          user_nick_name: body?.user_nick_name,
        });
      },
      transformResponse: (response: Response) => {
        return response;
      },
      invalidatesTags: ['getListenerFav'],
    }),
    BlockUserList: builder.mutation<Response[], BlockedListParams>({
      query: params => {
        const searchParams = buildQueryParamsWithOutId(params);
        return queryConfig.get(${API_ENDPOINTS.blockList}?${searchParams.toString()});
      },
    }),
    InActivateBankAcc: builder.mutation<Response[], { bank_id: any, is_active: boolean }>({
      query: body => {
        return queryConfig.patch(${API_ENDPOINTS.inActivateBankAccount}${body?.bank_id}, { "is_active": body?.is_active });
      },
      invalidatesTags: ['BankAccountList']
    }),
    getNotification: builder.query<Response[], { coach_id: number, page: number, size: number }>({
      query: body => {
        return queryConfig.get(${API_ENDPOINTS.getNotification}${body?.coach_id}?user_type=consultant&notification_type_group=1&page=${body.page}&size=${body.size});
      },
      transformResponse: (response: Response) => {
        const result = extractData(response)
        return result;
      },
    }),
    getNotice: builder.query<Response[], { page: number, size: number }>({
      query: body => {
        return queryConfig.get(${API_ENDPOINTS.getNotice}?page=${body.page}&size=${body.size});
      },
      // transformResponse: (response: Response) => {
      //   const result=extractData(response)
      //   return result;
      // },        
    }),
    getFaq: builder.query<Response[], void>({
      // query: body => {
      //   return queryConfig.get(${API_ENDPOINTS.FAQ});
      // },
      query: () => ({
        url: https://api.fluteconnect.com${API_ENDPOINTS.FAQ},
        method: "GET"
      }),
      // transformResponse: (response: Response) => {
      //   const result=extractData(response)
      //   return result;
      // },        
    })



  }),
});

export const {
  /************ Mutation  *************/
  useLoginMutation,
  useLogoutMutation,
  useOtpMutation,
  useUpdateNumberMutation,
  useVerifyotpForUpdateNumberMutation,
  useRegisterMutation,
  useDeleteMutation,
  useUploadProfileImageMutation,
  useCoachPriceChangeMutation,
  useConfirmOrderMutation,
  useCompleteOrderMutation,
  useRejectOrderMutation,
  /************ Query *************/
  useGetPriceLogHistoryQuery,
  useGetMyFollowersQuery,
  useGetUserDetailsByIdQuery,
  useLazyGetUserDetailsByIdQuery,
  useGetCallingHistoryQuery,
  useGetCoachCategoriesQuery,
  useGetCoachSkillsQuery,
  useGetCoachMenuQuery,
  useGetCoachMenuSettingQuery,
  useGetBlockListQuery,
  useLazyGetBlockListQuery,
  useDeleteUserFromBlockListMutation,
  useGetCoachWaitingListQuery,
  useLazyGetCoachWaitingListQuery,
  useGetMyReviewsListQuery,
  useUpDateProfileMutation,
  useGetGalleryPhotosListQuery,
  useRequestforProfilePictureMutation,
  useCancelRequestforProfilePictureMutation,
  useGoLiveConsultantDetailsMutation,
  useLiveSessionListQuery,
  useGetConsultantOptionListQuery,
  useUpdateLiveStreamStatusMutation,
  useGetconsultantWalletbalanceQuery,
  useGetServiceStatusMutation,
  useUpdateServiceStatusMutation,
  /*** bank query ****/
  useGetBankAccountListQuery,
  useAddBankDetailsMutation,
  useUpdateBankDetailsMutation,
  useSetBankDetailsPrimaryMutation,
  /**********/
  useCompleteLiveStreamMutation,
  useCancelLiveStreamMutation,
  useRunLiveStreamMutation,
  useGetMissedCallListQuery,
  useLazyGetMissedCallListQuery,
  useDeleteGalleryPhotoMutation,
  useUploadgalleryImageMutation,
  useCoachOrderCreateMutation,
  useUpdateMissedCallOrderMutation,
  useListenerAddToFavMutation,
  useGetListenerFavQuery,
  useUpdateAddToFavMutation,
  useBlockedUserMutation,
  useBlockUserListMutation,
  useInActivateBankAccMutation,
  useAddPaypalDetailsMutation,
  useUpdatePayPalDetailsMutation,
  useActiveInactivePayPalMutation,
  useGetPayPalListQuery,
  useCallingHistoryForGetDataMutation,
  useGetNotificationQuery,
  useGetNoticeQuery,
  useGetFaqQuery,
  useGetLanguagesQuery,
  useGetConsultantSessionQuery,

} = callApi;
export default callApi.reducer;