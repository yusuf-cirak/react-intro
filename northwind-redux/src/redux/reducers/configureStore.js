import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import rootReducer from './index'



export default function configureStore(){
    return createStore(rootReducer,applyMiddleware(thunk))
}

// Thunk bir middleware, async fonksiyonları döndürürken kullanmamız gerekiyor. applyMiddleware redux'dan geliyor, thunk da redux-thunk'dan.
// Aslında bizim yaptığımız hiçbir şey yok. Hazır olan fonksiyonları kullanıyoruz.