import React, { Component } from 'react'
import {connect} from 'react-redux'

class Counter extends Component {
  render() {
    return (
      <div>
          <h1>{this.props.counter}</h1>
      </div>
    )
  }
}

 const mapStateToProps=(state)=>{ 
    return {counter:state.counterReducer}
    /* buradaki kodumuz aslında hiçbir şey ifade etmiyor. counter prop'ı döndürüyor. state'in counterReducer özelliğini alıyor.  
    counterReducer'ı aldığımız yer. CounterReducer'da state'imiz vardı yani sayı değerimiz,
     aksiyon isimlerine göre işlemler yapıyorduk.*/
}

export default connect(mapStateToProps)(Counter) /* react-redux'ın connect methodu, mapState ile propları seçiyoruz, Counter'a atıyoruz.
connect methoduna fonksiyoumzu gönderiyoruz. app.js'e provider'ın store'ını alıyor. oradan da reducers'a ulaşıyor, state = reducers oluyor yani.
daha sonra state.counterReducer deyip istediğimiz aksiyonları alıyoruz. Counter component'inin içine atıyoruz. */