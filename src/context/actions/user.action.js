import { authInstance } from '../../helpers/axios.helper';
import {
  UPDATE_USER_PROFILE_LOADING,
  UPDATE_USER_PROFILE_SUCCESS,
  UPDATE_USER_PROFILE_ERROR,
} from '../../constants/actionTypes/index.actionTypes'
import { CONNECTION_ERROR } from "../../constants/api.actionTypes";
import { FIREBASE_PERSONAL_IMAGE_REF } from '../../constants/firebase.constants';
import { storage } from '../../helpers/firebase.helper'

export const updateUserProfile = ({
  id,
  accepted,
  name,
  contact,
  profileImageUrl
}) => (dispatch) => {

  dispatch({ type: UPDATE_USER_PROFILE_LOADING})

  const saveToBackend = async(url = null) => {
    console.log('saveToBackend', id)
    await authInstance()
      .put(`/user/${id}`, {
        name: {
          first: name.first,
          last: name.last
        },
        contact: {
          number: contact.number,
          country: contact.country
        },
        profileImageUrl: url,
        accepted: accepted
      })
      .then((res) => {
        dispatch({
          type: UPDATE_USER_PROFILE_SUCCESS,
          payload: res.data,
        });
      })
      .catch((err) => {
        dispatch({
          type: UPDATE_USER_PROFILE_ERROR,
          payload: err.response ? err.response.data : CONNECTION_ERROR,
        });
      });
  }

  if(profileImageUrl){
    storage
      .ref(`${FIREBASE_PERSONAL_IMAGE_REF}${name.first.toLowerCase().replace(' ', '-')}-${name.last.toLowerCase().replace(' ', '-')}/${profileImageUrl.name}`)
      .put(profileImageUrl)
      .on(
        "state_changed",
        (snapshot) => {},
        async (error) => {},
        async() => {
          const url = await storage
            .ref(`${FIREBASE_PERSONAL_IMAGE_REF}${name.first.toLowerCase().replace(' ', '-')}-${name.last.toLowerCase().replace(' ', '-')}`)
            .child(profileImageUrl.name)
            .getDownloadURL();
            console.log(url);
            dispatch({ type: UPDATE_USER_PROFILE_SUCCESS, payload:
              {
                accepted,
                name,
                contact,
                profileImageUrl: url
              }
           })
          saveToBackend(url)
        }
      )
  } else {
    saveToBackend()
  }

  // dispatch({ type: UPDATE_USER_PROFILE_LOADING })
  // console.log('profileImageUrl', profileImageUrl.includes('https:'))

  // dispatch({ type: UPDATE_USER_PROFILE_SUCCESS, payload: updateObj })
}
