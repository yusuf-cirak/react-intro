import React, { Component } from 'react'
import { connect } from 'react-redux'
import {bindActionCreators} from 'redux'
import {increaseCounter} from '../redux/actions/counterActions'

class IncreaseCounter extends Component {
  render() {
    return (
      <div>
          <button onClick={()=>this.props.dispatch(increaseCounter())}>1 arttır</button>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch){ // dispatch çağırmak istediğimiz operasyon, yani aksiyonun ta kendisi için verdiğimiz prop ismi.
    return {actions:bindActionCreators(increaseCounter,dispatch)} // İkisi birleşince bir aksiyon oluşturulabiliyor.
    // bindActionCreators bir method, ilgili methodu ismini verdiğimiz propun içinde çağrılabilecek şekilde set ediyoruz. Şu anki koddan
    // anlaşılan, dispatch adında bir prop yani fonksiyon oluşturuluyor ve return increaseHunter() şeklinde dönüyor.
}


export default connect(mapDispatchToProps)(IncreaseCounter)