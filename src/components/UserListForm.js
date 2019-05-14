import React from 'react'
import '../app.css'

const LoginForm = (props)=> {
  const list=props.users.length>0?props.users.map((user,index)=>
                          <li className="formgroup" key={index}>
                          {user}
                          </li>):"В базе данных нет пользователей"
  
    return (
      <div className="form-parent-container">
        <div className="form-container noselect">
          <div className="column justify-content-center align-items-center h-100 p-3">
          <h4>Список пользователей: </h4>
            <ul className="userlist"> 
             {list}
            </ul>
            <a href="/" className="btn btn-secondary" >На главную</a>
          </div>
        </div>
      </div>
    );
  }
 export default LoginForm
