import { combineReducers } from "redux"; // Redux combineReducers methodumuz
import counterReducer from './counterReducer' // Reducerlarımızdan birisi

const reducers=combineReducers({ // Redux'ın reducer'ları bağlama işlemini yapan methodu, obje olarak tutulduğu için obje yolluyoruz.
    // counterReducer:counterReducer normalde bu şekilde işlem yapmamız gerekiyordu. isimleri aynı olduğu için gerek yok.
    counterReducer
})

export default reducers; // Bu reducer'ları export ediyoruz.