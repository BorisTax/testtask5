import React from 'react'
import './app.css'
import 'bootstrap/dist/css/bootstrap.css'

const RegisterForm = (props)=> {
    return (
      <div className="form-parent-container">
        <div className="form-container">
          <div className="column justify-content-center align-items-center h-100">
            <form method="POST" action={props.url} onSubmit={props.onSubmit}>
              <div className="form-group">
                  <input id="name" type="text" name="name" className="form-control" 
                          onChange={props.onChange} value={props.name}
                          placeholder="Имя"
                          required/>
               </div>
               <div className="form-group">
                <input id="pass" className="form-control" 
                        type="password" name="password" 
                        onChange={props.onChange} value={props.password}
                        placeholder="Пароль"
                        required/>
               </div>
               <div className="form-group">
                <input id="passAgain" className="form-control" 
                       type="password" name="passwordAgain" 
                       onChange={props.onChange} value={props.passwordAgain}
                       placeholder="Пароль повторно"
                       required/>
               </div>
               <div className="form-group">
                <input className="btn btn-primary" type="submit" value="Регистрация"/>
                <a href="/" className="btn btn-secondary" >На главную</a>
                </div>
            </form>
          </div>
        </div>
        {props.errorMessage!==''?<div className="alert alert-danger alert-dismissible small text-nowrap">
                      {props.errorMessage}
                    </div>:""}
      </div>
    );
}

export default RegisterForm