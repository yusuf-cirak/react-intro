import React, { Component } from 'react'
import * as actionTypes from './store/actionTypes'

const UserContext=React.createContext(); // Context oluşturulur.

const reducer=(state,action)=>{
    switch (action.type) {
        case actionTypes.DELETE_USER:
            return{
                ...state, // spread operator
                users:state.users.filter(user=>action.payload!==user.id)
            }
            case actionTypes.ADD_USER:
                return{
                    ...state,
                    users:[...state.users,action.payload]
                }
        default:
            return state;
    }
}

 export class UserProvider extends Component {
    state = {
        users:[
            {
                id:"1",
                firstName:"Yusuf",
                lastName:"Çırak",
                age:"21"
            },
            {
                id:"2",
                firstName:"Yusuf",
                lastName:"Çırak",
                age:"21"
            },
            {
                id:"3",
                firstName:"Yusuf",
                lastName:"Çırak",
                age:"21"
            }
        ],
        dispatch:action=>{
            this.setState(state=>reducer(state,action))
        }
    }
  render() {
    return (
        <UserContext.Provider value={this.state}>
            {this.props.children} 
        </UserContext.Provider>
    )
  }
}


const UserConsumer=UserContext.Consumer; // Consumer oluşturulur ve istenilen yerde kullanılır.

export default UserConsumer;
