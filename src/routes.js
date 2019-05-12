import Main from './Main.js'
import Login from './Login'
import Register from './Register'
import { Route } from 'react-router'
import React from 'react'
const routes = (
  <div>
    <Route exact path="/" component={Main} />
    <Route path="/login" component={Login} />
    <Route path="/register" component={Register} />
  </div>
)
export default routes
