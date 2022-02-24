import * as actionTypes from "../actions/actionTypes";
import initialState from "./initialState";

export default function cartReducer(state = initialState.cart, action) {
  switch (action.type) {
    case actionTypes.ADD_TO_CART:
      var addedItem = state.find(
        (c) => c.product.id === action.payload.product.id
      ); // Cart'ta ilgili product zaten varsa
      if (addedItem) {
        var newState = state.map((cartItem) => {
          // Cart'taki bütün productları gez
          if (cartItem.product.id === action.payload.product.id) {
            // Cart'ta zaten bulunan bir product eklenmeye çalışılmışsa
            return Object.assign({}, addedItem, {
              quantity: addedItem.quantity + 1,
            });
            // {} aslında copy anlamına geliyor,kopyalanacak değişken,{spesifik olarak ilgili güncelleme}
          }
          return cartItem; // cartItem map methodunun parametresi olduğu için newState'e atılır.
        });
        return newState; // newState döndürülür.
      } else {
        return [...state, { ...action.payload }]; // State'in kopyasını al, üstüne action'ın payload'ını ekle.
        // Aslında kopya alma işlemi yok, overwrite işlemi var. Aynı olan değerler aynı kalıyor, action.payload'ındaki farklı değerler
        // değişiyor.
      }

      case actionTypes.REMOVE_FROM_CART:
          const deleteState=state.filter(cartItem=>cartItem.product.id!==action.payload.id)
          return deleteState;

    default:
      return state;
  }
}
