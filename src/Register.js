import React, { Component } from 'react'
import { connect } from 'react-redux'
import './app.css'
import {REGISTER, requestRegister} from './actions'
import RegisterForm from './RegisterForm';
import RegisterSuccess from './RegisterSuccess';

class Register extends Component {
  constructor(props){
    super(props);
    this.state={registered:false,name:"",password:"",passwordAgain:"",error:false,errorMessage:""}
  }
  checkName(name){
    if(name.length===0)return false;
    for(let c of name) 
       if (c.match(/[a-zA-Z0-9]/)===null) return false;
    return true;
  }
  onChange(e){
    const state={[e.target.name]:e.target.value,errorMessage:""}
    this.setState(state);
  }
  onSubmit(e){
    e.preventDefault();
    if (this.checkName(this.state.name)===false){
      this.setState({error:true,errorMessage:"Некорректное имя. Допустимы только латинские буквы"});
      return;
    } 
    if(this.state.password.length<5){
      this.setState({error:true,errorMessage:"Слишком короткий пароль. Минимум 5 символов"});
      return;
    }
    if(this.state.password!==this.state.passwordAgain){
      this.setState({error:true,errorMessage:"Пароли не совпадают"});
      return;
    }
    this.setState({registered:false,error:false,errorMessage:""});
    requestRegister({name:this.state.name,password:this.state.password})
                .then(res=>res.json()).then(res=>{
                      //console.log('Reg response: ',res);
                      const message=res.registered===true?'':"Пользователь уже зарегистрирован";
                      this.setState({registered:res.registered,errorMessage:message});
                      this.props.register({type:REGISTER,payload:{
                                          registered:res.registered,
                                          errorMessage:message
                                        }
                              })
                })
                .catch(function(res){ console.log(res) })

  }

  render() {
    return (
      <div className="App">
      {this.state.registered===false?
      <RegisterForm url="http://localhost:9095//register"
                    onSubmit={this.onSubmit.bind(this)}
                    onChange={this.onChange.bind(this)}
                    name={this.state.name}
                    password={this.state.password}
                    passwordAgain={this.state.passwordAgain}
                    errorMessage={this.state.errorMessage}

            />
            :<RegisterSuccess/>}
      </div>
    );
  }
}

function mapStateToProps (state) {
  return {
    registered:state.user.registered,
    errorMessage:state.user.errorMessage
  }
}
function mapDispatchToProps(dispatch){
  return {
    register:(data)=>dispatch(data)
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(Register)
