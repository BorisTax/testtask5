import decode from 'jwt-decode'
import options from './options'
const INITIALIZE = 'INITIALIZE'
export const LOGIN = 'LOGIN'
export const REGISTER = 'REGISTER'
export const LOGOUT = 'LOGOUT'
export const SET_VIDEO_ID = 'SET_VIDEO_ID'
export const SET_IMAGE_URL = 'SET_IMAGE_URL'

export const initialize = () => ({
  type: INITIALIZE
})
export const getUserFromStorage=()=>{
    const token=localStorage.getItem('userData')
    if(token)
         return {user:{name:decode(token).name,anonym:false}}
          else 
          return {user:{name:"Гость",anonym:true}}
}

export const requestLogin = (user) => {
  return fetch(options.devUri+'/login',{
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        method: "POST",
        body: JSON.stringify({name: user.name, password: user.password})
          })
}

export const requestRegister = (user) => {
  return fetch(options.devUri+'/register',{
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            method: "POST",
            body: JSON.stringify({name: user.name, password: user.password})
              })
}
export const requestUsers = () => {
  return fetch(options.devUri+'/users',{
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            method: "POST"
              })
}

export const logOut=()=>({type:LOGOUT})
export const setVideoId=(id)=>({type:SET_VIDEO_ID,payload:id})
export const setImageUrl=(url)=>({type:SET_IMAGE_URL,payload:url})

export const getPopularVideos=()=>{
      return fetch(options.youtubeGetVideosUri)
}
export const getVideoInfo=(id)=>{
      return fetch(options.youtubeGetVideoInfoUri+'&id='+id)
}
export const getImages=()=>{
  return fetch(options.pixabayUri)
}

