import React, { createContext, useReducer } from 'react'

// Initial States
import appInitial from './initialStates/appInitial.state';
import authInitial from './initialStates/authInitial.state';
import stGallenInitial from './initialStates/stGallenInitial.state';

// Reducers
import appReducer from './reducers/app.reducer'
import authReducer from './reducers/auth.reducer'
import stGallenReducer from './reducers/stGallen.reducer'

// // Actions
// import authActions from './actions/auth.action'

export const GlobalContext = createContext({});

export const GlobalProvider = ({ children }) => {

  const [ appState, appDispatch ] = useReducer(appReducer, appInitial);
  const [ authState, authDispatch ] = useReducer(authReducer, authInitial);
  const [ stGallenState, stGallenDispatch ] = useReducer(stGallenReducer, stGallenInitial);

return (
    <GlobalContext.Provider value={{
      appState, appDispatch,
      authState, authDispatch,
      stGallenState, stGallenDispatch
    }}>
      {children}
    </GlobalContext.Provider>
  );
}
