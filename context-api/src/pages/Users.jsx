import React, { Component } from "react";
import UserConsumer from "../context";
import User from './User'

export default class Users extends Component {
  render() {
    return (
      <UserConsumer>
        {(value) => {
          const { users } = value;

          return <div>{users.map(user=>{
              return(
                  <User
                   key={user.id}
                   id={user.id}
                   firstName={user.firstName}
                   lastName={user.lastName}
                   salary={user.salary}
                   department={user.department}

                   />
              )
          })}</div>;
        }}
      </UserConsumer>
    );
  }
}
