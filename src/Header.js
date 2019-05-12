import React, { Component } from 'react'
import { connect } from 'react-redux'
import './app.css'
import 'bootstrap/dist/css/bootstrap.css'
import {logOut} from './actions';


class Header extends Component {

  onLogClick(e){
    e.preventDefault();
    if(this.props.user.anonym===false) {
        if(confirm("Вы хотите выйти?")){
            this.props.logOut();
            this.props.history.push('/')
            }
    }else this.props.history.push('/login')
  }

  render() {
    return (
        <div className="navbar bg-dark justify-content-end align-items-center">
            <div className="user noselect">{this.props.user.name}</div>
            <a href="/login" className="btn btn-outline-primary" 
                    onClick={this.onLogClick.bind(this)}>
                    {this.props.user.anonym===true?"Вход":"Выход"}
                    </a>
            <a href="/register" className="btn btn-outline-secondary">
                    Регистрация
                    </a>
        </div>
    );
  }
}

function mapStateToProps (state) {
  console.log('mapStateHeader',state)
  return {
    user:state.user.user,
    
  }
}
function mapDispatchToProps(dispatch){
  return {
    logOut:()=>dispatch(logOut()),
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Header)
