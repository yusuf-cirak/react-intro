import * as actionTypes from '../actions/actionTypes'
import initialState from './initialState';

export default function categoryListReducer(state=initialState.categories,action){ // Aslında ilk parametre boş bir kategori döndürüyor. 
    // İkinci parametre yani action sayesinde gidip kategorimizi seçiyoruz. Tabii ki burası sadece bir state döndürüyor. 
    switch (action.type) { // categoryActions/ changeCategory'den gelen type
        case actionTypes.GET_CATEGORIES_SUCCESS:
            return action.payload
    
        default:
            return state;
    }
}