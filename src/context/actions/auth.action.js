// 
// import axios from 'axios';
//
// // import {
// //   SOURCE_LOADING,
// //   SOURCE_SUCCESS,
// //   REGISTER_LOADING,
// //   REGISTER_SUCCESS,
// //   REGISTER_ERROR,
// //   LOGIN_LOADING,
// //   LOGIN_SUCCESS,
// //   LOGIN_ERROR,
// //   LOGOUT_LOADING,
// //   LOGOUT_SUCCESS
// // } from '../../constants/actionTypes/index.actionTypes'
//
// export const submitRegister = (registerObj) => (dispatch) => {
//   dispatch({ type: REGISTER_LOADING })
//   console.log("Objs", registerObj);
//   authInstance().post(`${process.env.REACT_APP_BACKEND_URL}/user/create`, registerObj)
//       .then((res) => {
//         localStorage.setItem('user', JSON.stringify(res.data));
//         dispatch({ type: REGISTER_SUCCESS, payload: res.data })
//       })
//       .catch((err) => {
//         console.log("register error", err)
//         dispatch({ type: REGISTER_ERROR, payload: err })
//       })
// }
//
// export const submitLogin = (loginObj) => (dispatch) => {
//   dispatch({ type: LOGIN_LOADING })
//   console.log("Objs", loginObj);
//   axios.post(`${process.env.REACT_APP_BACKEND_URL}/user/auth`, loginObj)
//       .then((res) => {
//         if(res.data?.token){
//           localStorage.setItem('user', JSON.stringify(res.data));
//           dispatch({ type: LOGIN_SUCCESS, payload: res.data })
//         } else {
//           dispatch({ type: LOGIN_ERROR, payload: res.data })
//         }
//       })
//       .catch((err) => {
//         console.log("login error", err)
//         dispatch({ type: LOGIN_ERROR, payload: err })
//       })
// }
//
// export const setSourceData = ({...dataLoad}) => async(dispatch) => {
//   try {
//     dispatch({ type: 'SET_SOURCE_DATA', payload: dataLoad })
//   } catch(err) {
//     // dispatch({ type: 'add_error', payload: 'Your Location data couldnt be set.'})
//   }
// }
//
// export const tokenCheckGetUser = (id) => async(dispatch) => {
//   dispatch({ type: LOGIN_LOADING })
//   authInstance().get(`/user/${id}`)
//       .then(async (res) => {
//         console.log("tokencheck Response", res)
//         // localStorage.token = res.data.token;
//         // localStorage.userType = res.data.userType;
//         // localStorage.id = res.data.id;
//         dispatch({ type: LOGIN_SUCCESS, payload: res.data })
//       })
//       .catch((err) => {
//         console.log("login error", err)
//         dispatch({ type: LOGIN_ERROR, payload: err })
//       })
// }
//
// export const logOut = (history) => (dispatch) => {
//   // AttemptSignout
//   console.log('AttemptSignout')
//   dispatch({ type: LOGOUT_LOADING })
//   // authInstance.post('/trash-token')
//   //     .then(res => {
//   //       console.log("trashed token", res)
//         localStorage.clear('user');
//         dispatch({ type: LOGOUT_SUCCESS })
//         history.push('/')
//   //     })
//   //     .catch((err) => {
//   //       console.log("trash token error", err)
//   //       dispatch({ type: LOGOUT_ERROR, payload: err })
//   //     })
// }
//
// export const getUserLocationData = async(dispatch) => {
//   try{
//   //   const location = window.navigator
//   //   const locationDeets = navigator.geolocation.getCurrentPosition;
//   //
//   // const getUserLocation = async() => {
//   //     //   // Try HTML5 geolocation.
//   //       if (navigator.geolocation) {
//   //       navigator.geolocation.getCurrentPosition(position => {
//   //         setUserLocation({
//   //           lat: position.coords.latitude,
//   //           lng: position.coords.longitude
//   //         });
//   //       });
//   //     }
//   //     }
//     dispatch({type: SOURCE_LOADING})
//     axios
//       .get("https://ipapi.co/json/")
//       .then(async (ip_loc_data) =>{
//         await dispatch({
//           type: SOURCE_SUCCESS,
//           payload: {
//             ip: ip_loc_data.data.ip,
//             loaded: true,
//             browser: {
//               appCodeName: navigator.appCodeName,
//               appName: navigator.appName,
//               appversion: navigator.appversion,
//               platform: navigator.platform,
//               product: navigator.product,
//               productSub: navigator.productSub,
//               userAgent: navigator.userAgent,
//             },
//             locationData: ip_loc_data.data,
//           }})
//       }).catch(err =>
//           {
//           setTimeout(() => {
//             getUserLocationData()
//             console.log(err);
//           }, 5000);
//         }
//       )
//   } catch(err){
//
//   }
// }
