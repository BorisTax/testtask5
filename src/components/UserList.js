import React, { Component } from 'react'
import { connect } from 'react-redux'
import {requestUsers} from '../actions';
import UserListForm from './UserListForm';
import Loading from './Loading';

class UserList extends Component {
  constructor(){
    super();
    this.state={users:[],loading:false}
  }
  componentDidMount(){
    requestUsers()
              .then(res=>res.json()).then(res=>{
              this.setState({...res,loading:false});
              })
              .catch(function(res){console.error(res)})
  this.setState({loading:true})
   }
   
  render() {
    return (
      <div >
        {this.state.loading===false?<UserListForm users={this.state.users}/>:<Loading/>}
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

export default connect(mapStateToProps,mapDispatchToProps)(UserList)
