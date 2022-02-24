import React, { Component } from 'react';

export default class FormDemo extends Component {
    state={userName:''}
    onChangeHandler=(e)=>{
        // this.setState({userName: e.target.value})
        let inputName=e.target.name;
        let inputValue=e.target.value;
        this.setState({[inputName]:inputValue})
    }

    onSubmitHandler=(e)=>{


        e.preventDefault()
    }
  render() {
    return <div>
        <form id="form" onSubmit={this.onSubmitHandler}>
            <h3>User Name</h3>
            <input name="userName" onChange={this.onChangeHandler} type="text"></input>
            <h3>User name is : {this.state.userName.length>0?this.state.userName:null}</h3>

            <input name="city" onChange={this.onChangeHandler} type="text"></input>
            <h3>City is : {this.state.city}</h3>
            <input name="submit123" type="submit" value="Submit"></input>
        </form>
    </div>;
  }
}
