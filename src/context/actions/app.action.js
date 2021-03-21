// import { authInstance } from '../../helpers/axios.helper';
// import {
//   CHANGE_THEME_MODE,
// } from '../reducers/app.reducer'
// import { CONNECTION_ERROR } from "../../constants/api.actionTypes";
// import { FIREBASE_PERSONAL_IMAGE_REF } from '../../constants/firebase.constants';
// import { storage } from '../../helpers/firebase.helper'
//
export const changeThemeMode = (themeName) => (dispatch) => {
  dispatch({ type: 'CHANGE_THEME_MODE', payload: themeName})
}
