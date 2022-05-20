import React, { Component } from 'react'
import uniqid from 'uniqid';
import UserConsumer from '../context'
import * as actionTypes from '../store/actionTypes'

 class UserAddForm extends Component {


    state={ // state
        firstName:"",
        lastName:"",
        age:"",
    }

    changeInput=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }

    addUser=(dispatch,e)=>{

        const {firstName,lastName,age}=this.state // state'den alanların en güncel halini alıyoruz

        const newUser={
            id:uniqid(),
            firstName, // state'ler ile User objesinin alanları aynı olduğu için böyle tanımlayabiliriz.
            lastName,
            age
        }

        dispatch({type:actionTypes.ADD_USER,payload:newUser})
        e.preventDefault(); // Sayfa yenilenmesini engelliyoruz.
    }

  render() {
      const {firstName,lastName,age}=this.state


      return(
          <UserConsumer>
              {
                  value=>{
                      const {dispatch}=value
                      return (
      <div className='userAddForm'>
          <div className="col-md-8 mb-4">
              <div className="card">
                  <div className="card-header">
                      <h4>Kullanıcı ekleme formu</h4>
                      <div className="card-body">
                          <form onSubmit={this.addUser.bind(this,dispatch)}>
                              <div className="form-group">
                                  <label htmlFor="firstName">Adınız</label>
                                  <input type="text"
                                  name='firstName'
                                  id='firstName'
                                  placeholder='Adınız'
                                  className='form-control'
                                  value={firstName}
                                  onChange={this.changeInput}/>
                              </div>
                              <div className="form-group">
                                  <label htmlFor="lastName">Soyadınız</label>
                                  <input type="text"
                                  name='lastName'
                                  id='lastName'
                                  placeholder='Soyadınız'
                                  className='form-control'
                                  value={lastName}
                                  onChange={this.changeInput}/>
                              </div>
                              <div className="form-group">
                                  <label htmlFor="age">Yaşınız</label>
                                  <input type="text"
                                  name='age'
                                  id='age'
                                  placeholder='Yaşınız'
                                  className='form-control'
                                  value={age}
                                  onChange={this.changeInput}/>
                              </div>

                              <button type='submit' className='btn btn-danger btn-block'>Kaydet</button>
                          </form>
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

export default UserAddForm;