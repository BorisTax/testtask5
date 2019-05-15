import React, { Component } from 'react'
import { connect } from 'react-redux'
import {LOGIN,  requestLogin } from '../actions';
import LoginForm from './LoginForm';

//компонент отображает страницу входа
class Login extends Component {
  constructor(){
    super();
    this.state={name:"",password:"",error:false}
  }

  onChange(e){
    //при изменении input-ов, сохраняем их значения в state
    let user={name:this.state.name,pass:this.state.password}
    user[e.target.name]=e.target.value
    this.setState({...user,error:false});
  }

  onSubmit(e){
    e.preventDefault();
    requestLogin(this.state)//делаем запрос на вход
            .then(res=>res.json()).then(res=>{
                      //при получении ответа, отправляем данные в общий state, 
                     this.props.logIn({type:LOGIN,payload:{token:res.token,error:!res.success}})
                      //в локальном state сохраняем только результат true или false
                     this.setState({error:!res.success})
                     if(res.success===true) this.props.history.push('/')
                  })
            .catch(function(res){ console.log(res) })
  }

  render() {
    return (
      <div >
        <LoginForm  onSubmit={this.onSubmit.bind(this)}
                    onChange={this.onChange.bind(this)}
                    name={this.state.name}
                    password={this.state.password}
                    error={this.state.error}
                    />
      </div>
    );
  }
}

function mapStateToProps (state) {
  return {
    error:state.user.logError,
  }
}
function mapDispatchToProps (dispatch) {
  return {
    logIn:(data)=>dispatch(data)
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Login)
