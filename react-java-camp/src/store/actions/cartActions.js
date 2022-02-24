import * as actionTypes from './actionTypes';

export function addToCart(product){
    return { 
        type:actionTypes.ADD_TO_CART,
        payload:product
    }
}

export function removeFromCart(product){
    return { 
        type:actionTypes.REMOVE_FROM_CART,
        payload:product
    }
}

/* Redux bir action gerçekleştiğinde kendisine bir obje dönülmesini bekler. Bu objenin içerisinde de ilgili
aksiyonun ismini, ve state'i etkileyecek olan veriyi bekler. */