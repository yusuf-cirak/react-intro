import * as actionTypes from '../actions/actionTypes'
import initialState from './initialState';

export default function saveProductReducer(state=initialState.savedProduct,action){
    switch (action.type) { // productActions/ çalışan fonksiyonun adı, magic stringi yani.
        // kısaca action.type saveProduct'ın dispatch işleminden geliyor.
        // payload sayesinde de güncellenen product'ı veya eklenen product'ın verilerini dönebiliyoruz.
        case actionTypes.UPDATE_PRODUCT_SUCCESS:
            return action.payload
            case actionTypes.CREATE_PRODUCT_SUCCESS:
            return action.payload
    
        default:
            return state;
    }
}