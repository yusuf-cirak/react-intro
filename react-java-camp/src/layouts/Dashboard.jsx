import React from "react";
import ProductList from "../pages/ProductList";
import Categories from "./Categories";
import { Grid } from "semantic-ui-react";
import { Route, Routes } from "react-router-dom";
import ProductDetail from "../pages/ProductDetail";
import CartDetail from "../pages/CartDetail";
import { ToastContainer } from "react-toastify";
import ProductAdd from "../pages/ProductAdd";

export default function Dashboard() {
  return (
    <div>
      <ToastContainer position="bottom-right"/>
      <Grid>
        <Grid.Row>
          <Grid.Column width={4}>
            <Categories />
          </Grid.Column>
        </Grid.Row>
        <Grid.Column width={12}>
          <Routes>
            <Route exact path="/" element={<ProductList/>} />
            <Route exact path="/products" element={<ProductList/>} />
            <Route exact path="/products/:id" element={<ProductDetail/>} />
            <Route exact path="/cart" element={<CartDetail/>} />
            <Route exact path="/product/add" element={<ProductAdd/>} />

          </Routes>
          {/* Exact'ın kullanım sebebi eğer ki endpoint / olması gerekirken /asdasfd olursa yine ProductList yüklenecektir.
Böyle bir durumun olmaması için exact eklenir. Default olarak true'dır.
Birden fazla Route olacaksa Routes kullanılması şart.
Ek olarak eğer tek bir Route varsa elementi <ProductList/> şeklinde vermeye gerek yok.
Ama birden fazla varsa gerekli. Diğer türlü fonksiyon olarak algılandığı için child element'in fonksiyon
olamayacağının hatasını alırsın. */}
        </Grid.Column>
      </Grid>
    </div>
  );
}
