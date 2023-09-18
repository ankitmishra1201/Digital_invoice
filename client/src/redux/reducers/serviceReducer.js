import * as actionTypes from '../constants/serviceConstants';

export const getServicesReducer = (state = { services: [] }, action) => {
    switch (action.type) {
      case actionTypes.GET_SERVICES_REQUEST:
        return {
          loading: true,
          services: [],
        };
      case actionTypes.GET_SERVICES_SUCCESS:
        return {
          services: action.payload,
          loading: false,
        };
      case actionTypes.GET_SERVICES_FAIL:
        return {
          loading: false,
          error: action.payload,
        };
      default:
        return state;
    }
  };
  
  export const getServiceDetailsReducer = (state = { service: {} }, action) => {
    switch (action.type) {
      case actionTypes.GET_SERVICE_DETAILS_REQUEST:
        return {
          loading: true,
        };
      case actionTypes.GET_SERVICE_DETAILS_SUCCESS:
        return {
          loading: false,
          service: action.payload,
        };
      case actionTypes.GET_SERVICE_DETAILS_FAIL:
        return {
          loading: false,
          error: action.payload,
        };
      case actionTypes.GET_SERVICE_DETAILS_RESET:
        return {
          service: {},
        };
      default:
        return state;
    }
  };