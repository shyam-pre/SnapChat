import navigationStrings from '../../component/Constants/navigationStrings';
import {SET_MAIN_ROUTE} from '../action/actionType';

const initialRouteState = {
  mainRoute: navigationStrings.routes.splash,
};

const routeReducer = (state = initialRouteState, action) => {
  switch (action.type) {
    case SET_MAIN_ROUTE:
      const {mainRoute} = action.payload;
      return {
        ...state,
        mainRoute,
      };
    default:
      return state;
  }
};

export default routeReducer;
