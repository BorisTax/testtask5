import React from 'react'
import '../app.css'

//экран загрузки
const Loading = ()=> {
    return (
      <div className="form-parent-container">
        <div className="form-container noselect">
          <div className="column justify-content-center align-items-center h-100 p-3">
          <h4>Загрузка</h4>
            <div className="spinner"></div>
          </div>
        </div>
      </div>
    );
  }
 export default Loading
