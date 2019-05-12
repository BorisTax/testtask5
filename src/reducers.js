import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import {LOGIN, LOGOUT, REGISTER, getUserFromStorage} from './actions'
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

export default combineReducers({
  router: routerReducer,
  user: userReducer
})