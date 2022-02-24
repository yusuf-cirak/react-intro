import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { decreaseCounter } from "../redux/actions/counterActions";

class DecreaseCounter extends Component {
  render() {
    return (
      <div>
        <button onClick={() => this.props.dispatch(decreaseCounter())}>
          1 azalt
        </button>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(decreaseCounter, dispatch) };
  /*
Burada ise farklı bir yol izliyoruz. Counter'da sadece get işlemi
yapmıştık.  Burada sayıyı da arttırmamız gerek. Bunun için de ilgili fonksiyonu kullanmamız lazım. Normal şartlarda fonksiyonu one way binding
ile almamız gerekirdi. redux'ın bindActionCreators methodu sayesinde işlemimizi gerçekleştiriyoruz. fonksiyonumuzu obje olarak döndürüyoruz, 
value değeri bindActionCreators'ı kullandığımız yer.
kullanmak istediğimiz fonksiyon ile vermek istediğimiz prop adını parametreden alıyoruz. ikisi arasında bağ oluyor gibi düşünebiliriz.
connect işlemini yapıp export ettikten sonra dispatch propunu yani methodunu, kullanmak istediğimiz method için kullanabiliyoruz.
daha sonra ise dispatch prop'unu yani methodunu kullanarak bind ettiğimiz fonksiyonu çağırabiliyoruz.
     */
}

export default connect(mapDispatchToProps)(DecreaseCounter);
