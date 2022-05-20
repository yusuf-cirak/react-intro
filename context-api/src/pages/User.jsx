import React, { Component } from "react";
import UserConsumer from "../context";
import PropTypes from "prop-types";
import * as actionTypes from '../store/actionTypes'
import axios from 'axios'

class User extends Component {
  state = {
    isVisible: true,
    hover:false
  };

  onClickEvent = (e) => {
    this.setState({
      isVisible: !this.state.isVisible,
    });
  };

  onHoverEvent=(e)=>{
    this.setState({
      hover:!this.state.hover
    })
  }

  onDeleteUser = async(dispatch, e) => { // bind ederken dispatch sonda, fonksiyonda başta kullanılır.
    const { id } = this.props;
    // Consumer dispatch
    await axios.delete(`http://localhost:3001/users/${id}`)
    dispatch({ type: actionTypes.DELETE_USER, payload: id });
  };
  render() {
    const { firstName, lastName, salary,department } = this.props;
    const { isVisible,hover } = this.state;

    return (
      <UserConsumer>
        {(value) => {
          const { dispatch } = value;
          return (
            <div className="userComponent">
              <div className="col-md-8 mb-4">
                <div className="card" style={hover?{backgroundColor:"#6b885e"}:null}>
                  <div className="card-header d-flex justify-content-between">
                    <h4 className="d-inline" onMouseEnter={this.onHoverEvent} onMouseLeave={this.onHoverEvent} onClick={this.onClickEvent}>
                      {firstName} {lastName}
                    </h4>
                    <i
                      className="fa-solid fa-trash-can"
                      onClick={this.onDeleteUser.bind(this, dispatch)}
                      style={{ cursor: "pointer" }}
                    ></i>
                    <div>
                      {isVisible ? (
                        <div className="card-body">
                          <p className="card-text">Maaş : {salary}</p>
                          <p className="card-text">Departman : {department}</p>

                        </div>
                      ) : null}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        }}
      </UserConsumer>
    );
  }
}

User.propTypes={
  id:PropTypes.string.isRequired,
    firstName:PropTypes.string.isRequired,
    lastName:PropTypes.string.isRequired,
    salary:PropTypes.string.isRequired,
    department:PropTypes.string.isRequired
}
// User.defaultProps // Eğer prop gönderilmemişse
export default User;
