import React from 'react'
import '../app.css'

const LoginForm = (props)=> {
    return (
      <div className="form-parent-container">
        <div className="form-container">
          <div className="column justify-content-center align-items-center h-100">
            <form method="POST" action="/login" onSubmit={props.onSubmit}>
              <div className="form-group">
                <input id="name" type="text" 
                          name="name" className="form-control" 
                          onChange={props.onChange} value={props.name}
                          placeholder="Имя"
                          required/>
              </div>
              <div className="form-group">
                <input  id="pass" type="password" 
                          name="password" className="form-control" 
                          onChange={props.onChange} value={props.password}
                          placeholder="Пароль"
                          required/>
              </div>
              <div className="form-group">
              <input className="btn btn-primary btn-block" type="submit" value="Вход"/>
              <a href="/" className="btn btn-secondary btn-block" >На главную</a>
              </div>
              </form>
            </div>
            </div>
            {props.error===true?<div className="alert alert-danger alert-dismissible small">
                      <strong>Ошибка!</strong> Неправильное имя пользователя и/или пароль.
                    </div>:""}
          
        </div>
    );
  }
 export default LoginForm
