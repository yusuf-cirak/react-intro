import {createStore} from 'redux'

import reducers from './index' // Bütün yaptığımız işlemleri index dosyasında reducer'da toplamıştık.

// İşlemleri özetlemek gerekirse,
/* 
1- actionTypes'da aksiyonlarımızı değişken olarak yazdık.
2- counterActions'a actionType'ları import ettik daha sonra her bir action için fonksiyon yazdık.
fonksiyon ama içerisinde obje dönen bir fonksiyon yazdık. ()=>({}) şeklinde. (type ve payload özellikleri var)
3- counterReducer'da actionType'ları import ettik ve counterReducer adlı fonksiyonumuzu state ve action parametreleriyle oluşturduk.
4- index.js'e counterReducer'ı import ettik ve Redux'ın combineReducers methodunu kullanıp obje şeklinde counterReducer'ı gönderdik.
reducers fonksiyonuyla da export ettik.
Reducer oluşturdukça burdan yollayabiliriz.
5- configureStore'da reducers'ı index'ten import ettik, redux'ın createStore özelliğini yolladık.
6- projemizin index.js'inde react-redux'ın Provider'ını kullanıyoruz. App'i Provider içine atıp, provider'ın store attribute'u olarak da
configureStore'u veriyoruz.
*/

// Configure Store state'lerin veri tabanı gibidir.

export default function configureStore(){
    return createStore(reducers) // State'i yöneten reducer'ların state veri tabanına yüklenmesi gibi düşünebiliriz.
}