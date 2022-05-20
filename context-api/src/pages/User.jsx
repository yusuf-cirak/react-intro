import React, { Component } from "react";
import UserConsumer from "../context";
import PropTypes from "prop-types";
import * as actionTypes from '../store/actionTypes'


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

  onDeleteUser = (dispatch, e) => { // bind ederken dispatch sonda, fonksiyonda başta kullanılır.
    const { id } = this.props;
    // Consumer dispatch
    dispatch({ type: actionTypes.DELETE_USER, payload: id });
  };
  render() {
    const { firstName, lastName, age } = this.props;
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
                          <p className="card-text">{age}</p>
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
    age:PropTypes.number.isRequired
}
// User.defaultProps // Eğer prop gönderilmemişse
export default User;
