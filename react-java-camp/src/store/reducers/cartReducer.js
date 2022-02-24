import { ADD_TO_CART, REMOVE_FROM_CART } from "../actions/actionTypes";
import { cartItems } from "../initialValues/cartItems";

const initialState = {
  cartItems: cartItems,
};

export default function cartReducer(state = initialState, { type, payload }) {
  // Sepetin son halini tuttuğumuz yer, gönderdiğimiz aksiyona göre.
  // type ve payload aynı isimle geldği için type=type şeklinde tanımlamaya gerek yok
  switch (type) {
    case ADD_TO_CART:
      let product = state.cartItems.find((c) => c.product.id === payload.id);
      if (product) {
        product.quantity++;
        return {
          ...state,
        };
      } else {
        return {
          ...state /* Burada tekrar yazmamızın sebebi eğer initialState'in içerisinde cartItems dışında başka
                    başka state'ler varsa onları ayırması için.
                    */,
          cartItems: [...state.cartItems, { quantity: 1, product: payload }],
          // Array notasyonu ile burada da ayrılmış cartItems state'imize yeni değerini ve yeni referansını kazandırıyoruz
        };
      }
    case REMOVE_FROM_CART:
      return {
        ...state, // Burada state'in kopyasını alıyoruz. Obje içinde değil de direkt normal bir şekilde parçalama işi yapsaydık işimize yaramazdı.
        cartItems: state.cartItems.filter((c) => c.product.id !== payload.id),
        // Buradaki kod yeni bir referans oluşturuyor. Yeni bir array oluştur, içinde attığım id'deki ürün olmasın.
        // Tam olarak bu işe yarıyor. Mantığını kavra.
      };
    default:
      return state;
  }
}
