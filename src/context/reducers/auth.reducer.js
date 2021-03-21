import authInitialState from '../initialStates/authInitial.state';

export default (state, {payload, type}) => {
  switch(type) {

    // set source
    case 'SOURCE_SUCCESS':
      return {
        ...state,
        sourceLoading: {
          ...state.sourceLoading,
          hasBeenSet: true,
          loading: false,
        },
        source: payload
      };

    // set source
    case 'SOURCE_LOADING':
      return {
        ...state,
        sourceLoading: {
          ...state.sourceLoading,
          loading: true,
          hasBeenSet: false
        }
      };

    // set source
    case 'SOURCE_ERROR':
      return {
        ...state,
        sourceLoading: {
          ...state.sourceLoading,
          loading: false,
          hasBeenSet: false,
          error: payload
        }
      };

    // REGISTER
    case 'AUTHENTICATION_LOADING':
      return {
        ...state,
        auth: {
          ...state.auth,
          error: false,
          loading: true
        }
      };
    case 'AUTHENTICATION_SUCCESS':
      return {
        ...state,
        user: {
          ...state.user,
          ...payload
        },
        auth: {
          ...state.auth,
          loading: false,
          error: false
        }
      };
    case 'AUTHENTICATION_ERROR':
      return {
        ...state,
        auth: {
          ...state.auth,
          loading: false,
          error: payload
        }
      };

    // REGISTER
    case 'REGISTER_LOADING':
      return {
        ...state,
        auth: {
          ...state.auth,
          error: false,
          loading: true
        }
      };
    case 'REGISTER_SUCCESS':
      return {
        ...state,
        user: payload,
        auth: {
          ...state.auth,
          loading: false,
          error: false
        }
      };
    case 'REGISTER_ERROR':
      return {
        ...state,
        auth: {
          ...state.auth,
          loading: false,
          error: payload
        }
      };

    // LOGIN
    case 'LOGIN_LOADING':
      return {
        ...state,
        auth: {
          ...state.auth,
          error: false,
          loading: true
        }
      };
    case 'LOGIN_SUCCESS':
      return {
        ...state,
        user: payload,
        auth: {
          ...state.auth,
          loading: false,
          error: false
        }
      };
    case 'LOGIN_ERROR':
      return {
        ...state,
        auth: {
          ...state.auth,
          loading: false,
          error: payload
        }
      };

    case 'LOGOUT_LOADING':
      return {
        ...state,
        auth: {
          ...state.auth,
          error: false,
          loading: true
        }
      };
    case 'LOGOUT_SUCCESS':
      return authInitialState;
    // case 'LOGOUT_ERROR':
    //   return {
    //     ...state,
    //     auth: {
    //       ...state.auth,
    //       loading: false,
    //       error: payload
    //     }
    //   };

    // UPDATE_USER_PROFILE
    case 'UPDATE_USER_PROFILE_LOADING':
      return {
        ...state,
        auth: {
          ...state.auth,
          error: false,
          loading: true
        }
      };
    case 'UPDATE_USER_PROFILE_SUCCESS':
      return {
        ...state,
        user: {
          ...state.user,
          ...payload
        },
        auth: {
          ...state.auth,
          loading: false,
          error: false
        }
      };
    case 'UPDATE_USER_PROFILE_ERROR':
      return {
        ...state,
        auth: {
          ...state.auth,
          loading: false,
          error: payload
        }
      };

    default:
      return state;
  }
}
