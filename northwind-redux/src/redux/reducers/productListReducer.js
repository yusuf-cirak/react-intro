import * as actionTypes from '../actions/actionTypes'
import initialState from './initialState';

export default function productListReducer(state=initialState.products,action){ // Aslında ilk parametre boş bir kategori döndürüyor. 
    // İkinci parametre yani action sayesinde gidip kategorimizi seçiyoruz. Tabii ki burası sadece bir state döndürüyor. 
    switch (action.type) { // productActions/ changeCategory'den gelen type
        case actionTypes.GET_PRODUCTS_SUCCESS:
            return action.payload
    
        default:
            return state;
    }
}