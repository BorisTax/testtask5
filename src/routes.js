import Main from './components/Main'
import Login from './components/Login'
import Register from './components/Register'
import { Route } from 'react-router'
import React from 'react'
import UserList from './components/UserList';
const routes = (
  <div>
    <Route exact path="/" component={Main} />
    <Route path="/login" component={Login} />
    <Route path="/register" component={Register} />
    <Route path="/users" component={UserList} />
  </div>
)
export default routes
