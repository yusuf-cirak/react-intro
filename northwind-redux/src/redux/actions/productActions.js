import * as actionTypes from "./actionTypes";

export function getProductsSuccess(products) {
  // type
  return { type: actionTypes.GET_PRODUCTS_SUCCESS, payload: products }; // payload ilgili component'in state'i olacak.
}

export function getProducts(categoryId) {
  return function (dispatch) {
    let url = "http://localhost:3000/products";
    if (categoryId) url = url + "?categoryId=" + categoryId;
    return fetch(url)
      .then((response) => response.json())
      .then((result) => dispatch(getProductsSuccess(result)));
  };
}

export function createProductSuccess(product) {
  return { type: actionTypes.CREATE_PRODUCT_SUCCESS, payload: product };
}

export function updateProductSuccess(product) {
  return { type: actionTypes.UPDATE_PRODUCT_SUCCESS, payload: product };
}

export async function saveProductApi(product) {
    return fetch("http://localhost:3000/products/" + (product.id || ""), {
// fetch url'si sonrası product.id gönderildiyse göster, gönderilmediyse hiçbir şey koyma şeklinde "" koyduk.
// burda aslında bir sorgu yok. program sadece product id varsa koyacak yoksa hiçbir şey yapmayacak.
      method: product.id ? "PUT" : "POST",
// product.id varsa bu bir put requesttir, yoksa post requesttir.
      headers: { "content-type": "application/json" },
      body: JSON.stringify(product),
    }).then(handleResponse).catch(handleError)
    // başarılı olursa handleResponse'a verileri gönder.
    // başarısız olursa handleError'a hatayı gönder.
  }

export function saveProduct(product) {
// Burası işin redux kısmı, reducerını devreye sokmuş olduk. state management yapıyoruz.
    return function (dispatch) {
        saveProductApi(product).then(savedProduct=>{
            product.id?dispatch(updateProductSuccess(savedProduct)):dispatch(updateProductSuccess(savedProduct))
// saveProductApi işlemi yapıldıktan sonra dispatch ile state management'ı uyguluyoruz.    
        }).catch(err=>{throw err;})
    }

}

export async function handleResponse(response){ 
// saveProductApi'de then.handleResponse yerine buradaki kodlar yazılabilirdi, kod tekrarı olmaması için böyle yazdık.
    if(response.ok) return response.json()
    const error=await response.text()
    throw new Error(error);
}

export async function handleError(error){
    throw error;
}

