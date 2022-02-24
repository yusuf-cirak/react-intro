import * as actionTypes from '../actions/actionTypes'
import initialState from './initialState';

export default function changeCategoryReducer(state=initialState.currentCategory,action){ // Aslında ilk parametre boş bir kategori döndürüyor. 
    // İkinci parametre yani action sayesinde gidip kategorimizi seçiyoruz. Tabii ki burası sadece bir state döndürüyor. 
    switch (action.type) { // categoryActions/ changeCategory'den gelen type
        case actionTypes.CHANGE_CATEGORY:
            return action.payload
    
        default:
            return state;
    }
}