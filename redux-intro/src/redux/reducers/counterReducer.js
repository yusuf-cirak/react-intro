import * as actionTypes from "../actions/actionTypes";
// Reducer'da basit state kontorlü yapılır.
const counterReducer = (state = 0, action) => { // Asıl aksiyonun olduğu yer, isimlere göre ayırt ettiğimiz için yapılacak işlemleri tek tek yazdık.
  // State kontrolü
  let newState;
  switch (
    action.type // Gönderilen action'ın type'ı
  ) {

    case actionTypes.INCREASE_COUNTER: // action.type===actionTypes.INCREASE_COUNTER?
      return (newState = state + action.payload);

    case actionTypes.DECREASE_COUNTER:
      return (newState = state - action.payload);

    case actionTypes.INCREASE_BY_TWO_COUNTER:
      // eslint-disable-next-line no-unused-vars
      return (newState = state + action.payload);

    default:
      return state; // Default ise state değişmemiş demektir, kendisini dönüyoruz.
  }
};

// Javascript Immutability

export default counterReducer; // Redux'ta export işlemleri genelde bu şekilde yapılıyor.
