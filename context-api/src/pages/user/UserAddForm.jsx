import axios from 'axios';
import React, { Component } from 'react'
// import uniqid from 'uniqid';
import UserConsumer from '../../context'
import * as actionTypes from '../../store/actionTypes'

 class UserAddForm extends Component {


    state={ // state
        firstName:"",
        lastName:"",
        salary:"",
        department:""
    }

    changeInput=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }

    addUser= async(dispatch,e)=>{
        e.preventDefault(); // Sayfa yenilenmesini engelliyoruz.
        // Eğer ki bir form gönderildikten sonra sayfa yenilenmemeliyse preventDefault en başta kullanılmalı,
        // burada en sonda kullanılırsa sayfa yenilenir ve datalar query'ye gönderilir.

        const {firstName,lastName,salary,department}=this.state // state'den alanların en güncel halini alıyoruz

        const newUser={
            // id:uniqid(), // axios id ekliyor
            firstName, // state'ler ile User objesinin alanları aynı olduğu için böyle tanımlayabiliriz.
            lastName,
            salary,
            department
        }

        const response=await axios.post("http://localhost:3001/users",newUser)

        dispatch({type:actionTypes.ADD_USER,payload:response.data})
    }

  render() {
      const {firstName,lastName,salary,department}=this.state


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
                                  <label htmlFor="salary">Maaşınız</label>
                                  <input type="text"
                                  name='salary'
                                  id='salary'
                                  placeholder='Maaşınız'
                                  className='form-control'
                                  value={salary}
                                  onChange={this.changeInput}/>
                              </div>
                              <div className="form-group">
                                  <label htmlFor="department">Departmanınız</label>
                                  <input type="text"
                                  name='department'
                                  id='department'
                                  placeholder='Departmanınız'
                                  className='form-control'
                                  value={department}
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