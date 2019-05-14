import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import {LOGIN, LOGOUT, REGISTER, SET_VIDEO_ID, getUserFromStorage, SET_IMAGE_URL} from './actions'
import decode from 'jwt-decode'

const initialState=getUserFromStorage

function userReducer(state = initialState(), action){
  switch(action.type){
      case LOGIN:
        if(action.payload.error===true) return {...state,logError:true};
        localStorage.setItem('userData',action.payload.token)
        const name=decode(action.payload.token).name
        return {user:{name:name,anonym:false},logError:false}
      case LOGOUT:
        localStorage.removeItem('userData')
        return initialState();
      case REGISTER:
        return {registered:action.payload.registered,errorMessage:action.payload.errorMessage};
      default:
  }
  return state;
}

function appReducer(state = {}, action){
  switch(action.type){
      case SET_VIDEO_ID:
        return {videoId:action.payload};
      case SET_IMAGE_URL:
        return {imageUrl:action.payload,rand:Math.random()};
      default:
  }
  return state;
}

export default combineReducers({
  router: routerReducer,
  user: userReducer,
  app:appReducer
})