import authInitialState from '../initialStates/stGallenInitial.state';

export default (state, {payload, type}) => {
  switch(type) {

    // calculations
    case 'ST_GALLEN_CALCULATIONS':
      return {
        ...state,
        calculations: payload
      };


    // UPDATE_ST_GALLEN_PROFILE
    case 'ST_GALLEN_UPDATE_LOADING':
      return {
        ...state,
        isLoading: true,
        error: {
          hasError: false,
          message: null
        }
      };
    case 'ST_GALLEN_UPDATE_SUCCESS':
      return {
        ...state,
        isLoading: false,
        error: {
          hasError: false,
          message: null
        },
        data: payload
      };
    case 'ST_GALLEN_UPDATE_ERROR':
      return {
        ...state,
        isLoading: false,
        error: {
          hasError: true,
          message: payload
        }
      };

    default:
      return state;
  }
}
