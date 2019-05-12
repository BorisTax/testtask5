import React from 'react'
import './app.css'
import 'bootstrap/dist/css/bootstrap.css'

const RegisterSuccess = ()=>{
    return (
      <div className="container-fluid h-100">
        <div className="row justify-content-center align-items-center h-100">
          <div className="col col-sm-6 col-md-6 col-lg-4 col-xl-3">
              <div className="h3">
                Регистрация прошла успешно
               </div>
               <div >
                <a className="btn btn-outline-primary"  href="/login" >На страницу входа</a>
                <a className="btn btn-outline-primary"  href="/">На главную</a>
               </div>
            </div>
        </div>
      </div>
    );
}

export default RegisterSuccess