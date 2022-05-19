import React, { Component } from 'react'
import UserConsumer from '../context'

 class User extends Component {

    state={
        isVisible:true
    }

    
     onClickEvent=(e)=>{
         this.setState({
             isVisible:!this.state.isVisible
         })

    }

    onDeleteUser=(dispatch,e)=>{
        const {id}=this.props;
        // Consumer dispatch
        dispatch({type:"DELETE_USER",payload:id})
    }
  render() {
      const {firstName,lastName,age}=this.props;
      const {isVisible}=this.state


      return (
          <UserConsumer>
          {
              value=>{
      const {dispatch}=value;
                    return (
      <div className="userComponent">
          <div className="col-md-8 mb-4">
              <div className="card">
                  <div className="card-header d-flex justify-content-between">
                      <h4 className="d-inline" onClick={this.onClickEvent}>{firstName} {lastName}</h4>
                      <i className="fa-solid fa-trash-can" onClick={this.onDeleteUser.bind(this,dispatch)} style={{cursor:"pointer"}}></i>
                      <div>
                          {
                              isVisible?<div className="card-body">
                                  <p className="card-text">{age}</p>
                              </div>
                              :null
                          }
                      </div>
                  </div>
                  
              </div>
          </div>
      </div>
    )
  }

              }

      </UserConsumer>
      )
      

}
 }
export default User;