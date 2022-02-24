import * as actionTypes from './actionTypes';

export function changeCategory(category){
    return {type:actionTypes.CHANGE_CATEGORY,payload:category}
}


export function getCategoriesSuccess(categories){ // type 
    return {type:actionTypes.GET_CATEGORIES_SUCCESS,payload:categories} // payload ilgili component'in state'i olacak.
}

export function getCategories(){
    return function(dispatch){
        let url="http://localhost:3000/categories";
        return fetch(url)
        .then(response=>response.json())
        .then(result=>dispatch(getCategoriesSuccess(result)))

    }
}
