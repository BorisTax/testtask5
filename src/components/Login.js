import React, { Component } from 'react'
import { connect } from 'react-redux'
import {LOGIN,  requestLogin } from '../actions';
import LoginForm from './LoginForm';

class Login extends Component {
  constructor(){
    super();
    this.state={name:"",password:"",logged:false,logError:false}
  }

  onChange(e){
    let user={name:this.state.name,pass:this.state.password}
    user[e.target.name]=e.target.value
    this.setState({...user,logError:false});
  }
  onSubmit(e){
    e.preventDefault();
    requestLogin(this.state)
            .then(res=>res.json()).then(res=>{
                     this.props.logIn({type:LOGIN,payload:{token:res.token,error:!res.success}})
                     this.setState({logError:!res.success})
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
                    logError={this.state.logError}
                    />
      </div>
    );
  }
}

function mapStateToProps (state) {
  return {
    logError:state.user.logError,
  }
}
function mapDispatchToProps (dispatch) {
  return {
    logIn:(data)=>dispatch(data)
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Login)
