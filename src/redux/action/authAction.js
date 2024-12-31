import {SET_MAIN_ROUTE} from './actionType';
export const setMainRoute = routes => ({
  type: SET_MAIN_ROUTE,
  payload: routes,
});
