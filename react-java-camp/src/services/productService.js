import axios from "axios";
export default class ProductService {
  getProducts() {
    return axios.get("http://localhost:3000/products");
  }
  getProductById(id) {
    return axios.get(`http://localhost:3000/products/${id}`);
  }
}
