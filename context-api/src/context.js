import React, { Component } from 'react'
import * as actionTypes from './store/actionTypes'
import axios from 'axios'

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
        users:[],
        dispatch:action=>{
            this.setState(state=>reducer(state,action))
        }
    }

    componentDidMount= async()=>{
        const response=await axios.get("http://localhost:3001/users");
        this.setState({
            users:response.data
        })
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
