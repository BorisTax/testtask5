import decode from 'jwt-decode'
const INITIALIZE = 'INITIALIZE'
export const LOGIN = 'LOGIN'
export const REGISTER = 'REGISTER'
export const LOGOUT = 'LOGOUT'
export const SET_USER = 'SET_USER'

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
  return fetch('http://192.168.0.102:9095/login',{
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        method: "POST",
        body: JSON.stringify({name: user.name, password: user.password})
          })
}

export const requestRegister = (user) => {
  return fetch('http://192.168.0.102:9095/register',{
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            method: "POST",
            body: JSON.stringify({name: user.name, password: user.password})
              })
          
    
}

export const logOut=()=>({type:LOGOUT})

export const setCurrentUser = (user) => {
  return {type:SET_USER,payload:user}
}
