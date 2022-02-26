import axios from "axios";
export default class ProductService {
  api= axios.create({
    baseURL:"http://localhost:3001"
})
  // getProducts() {
  //   return axios.get("http://localhost:3001/products");
  // }

  getProducts() {
    return this.api.get("/products");
  }
  getProductById(id) {
    return this.api.get(`/products/${id}`);
  }

  addProduct(product){
    const products=this.getProducts().then(response=>response.data);
    console.log(products)
    const request={
      ...product,
      id:(products.length-1)+1
    }
    const response=this.api.post("/products",request)
    return response;
  }

  // addOrUpdateProduct(product){
  //   const request={
  //     ...product
  //   }
  //   const response=this.api({method:product.id?"put":"post",data:request})
  //   console.log(response)
  //   return response;
  // }
}
