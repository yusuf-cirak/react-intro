import CategoryList from "./CategoryList";
import Navi from "./Navi";
import ProductList from "./ProductList";
import { Container, Row, Col } from "reactstrap";

import React, { Component } from "react";
import alertify from "alertifyjs";
import { Route, Routes } from "react-router-dom";
import NotFound from "./NotFound";
import CartList from "./CartList";
import FormDemo from "./FormDemo";
import FormDemo2 from "./FormDemo2";

export default class App extends Component {
  // Veri taşımak için App.js'i bir rcc haline getirdik.
  state = {
    // Değişkenlerimizi state objesinde tutuyoruz. Başka sayfaya aktaracağımız için state içerisinde yazdık.
    currentCategory: "", // Değişkenlerimizi bu şekilde key:value şeklinde tanımlıyoruz. Çünkü state temelde JavaScript objesi
    products: [],
    cart: [],
  }; // CategoryList'ten buraya taşındı.

  // Lifecycle codes
  componentDidMount() { // Render işlemi yapıldıktan sonra çalışır. Bir life cycle'dır.
    this.getProducts();
  }
  // currentCategory=""
  changeCategory = (category) => {
    // CategoryList'ten buraya taşındı
    this.setState({ currentCategory: category.categoryName });
    this.getProducts(category.id); // Burada gönderdik çünkü changeCategory çalıştığında bu da çalışmalı.
  };
  // setState ilgili state'in değerini değiştirmek için kullanılıyor. currentCategory'yi seçip
  // parametreden gelen category'nin categoryName'i olacak şekilde ayarladık.

  // Product Codes
  getProducts = (categoryId) => {
    let url = "http://localhost:3000/products";
    if (categoryId)
      /* isdefined ise yani undefined değilse */ url +=
        "?categoryId=" + categoryId;
    fetch(url)
      .then((response) => response.json())
      .then((data) => this.setState({ products: data }))
      .catch((err) => err.json());
  };

  addToCart = (product) => {
    let newCart = this.state.cart;
    // var addedItem=newCart.find(c=>c.product.id===product.id);
    newCart.push({ product: product, quantity: +1 });
    this.setState({ cart: newCart });
    alertify.success(product.productName + " added to your cart", 2); // 2 sn kalsın.
  };

  removeFromCart = (product) => {
    let newCart = this.state.cart.filter(c => c.product.id !== product.id);
    this.setState({ cart: newCart });
    alertify.error(product.productName + " removed from your cart", 2); // 2 sn kalsın.
  };

  render() {
    let productInfo = { title: "ProductList" };
    let categoryInfo = { title: "CategoryList" };
    return (
      <div>
        <Container>
          <Navi removeFromCart={this.removeFromCart} cart={this.state.cart} />

          <Row>
            <Col xs="3">
              <CategoryList
                changeCategory={this.changeCategory}
                currentCategory={this.state.currentCategory} // Burası çok önemli. CategoryList'e göndermek istediğin propları
                //düzgün aktarmalısın.
                info={categoryInfo}
              />
            </Col>
            <Col xs="9">
              <Routes>
                <Route
                  exact
                  path="/"
                  element={
                    <ProductList
                      currentCategory={this.state.currentCategory}
                      products={this.state.products}
                      addToCart={this.addToCart}
                      info={productInfo}
                    />
                  }
                />
                <Route
                  exact
                  path="/cart"
                  element={
                    <CartList
                      products={this.state.products}
                      removeFromCart={this.removeFromCart}
                      cart={this.state.cart}
                    />
                  } 
                />
                <Route
                  exact
                  path="/form1"
                  element={
                    <FormDemo/>
                  } 
                />
                <Route
                  exact
                  path="/form2"
                  element={
                    <FormDemo2/>
                  } 
                />
                <Route element={<NotFound/>}/>
              </Routes>
            </Col>
          </Row>
        </Container>
      </div>
      // return edilen kodda bir container olması gereklidir. Bu <container/> da olabilir, <div/> de olabilir.
    );
  }
}

// function App() {
//   return (
//     <div>

//       <Container>
//         <Row>
//         <Navi/>
//         </Row>

//         <Row>
//           <Col xs="3">
//           <CategoryList title="categoryList"></CategoryList>
//           </Col>
//           <Col xs="9">
//           <ProductList title="productList"></ProductList>
//           </Col>
//         </Row>
//       </Container>

//     </div>
//   );
// }
