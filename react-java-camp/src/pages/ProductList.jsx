import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { Icon, Menu, Table,Button } from "semantic-ui-react";
import ProductService from "../services/productService";
import { addToCart } from "../store/actions/cartActions";
import {toast} from 'react-toastify'

export default function ProductList() {

  const dispatch=useDispatch()

  const handleAddToCart=(product)=>{
    dispatch(addToCart(product))
    toast.success(`${product.productName} sepete eklendi!`)
  }


  // destructing with React Hook
  const [products, setProducts] = useState([]);
  // React'ın yaşam döngüsüne müdahale ediyoruz.
  // State değiştiği anda sayfa yeniden render edilecek
  // componentDidMount yerine useEffect kullanıyoruz. Class component'te componentDidMount kullanılır.
  // Biz ise function kullanıyoruz.
  useEffect(() => {
    let productService = new ProductService();
    return (
      productService
        .getProducts()
        .then((result) => setProducts(result.data)) // burada neden products'ı set etmek yerine setProducts'ı kullandık?
        // Javascript immutability dolayısıyla. Eğer products'ı set edersek örneğin her bir aramada sayfa yeniden yüklenecektir.
        // Array'in içine değerler atıp gösteriyoruz gibi düşünebilirsin.
        .catch()
    );
  },[]);

  return (
    <div>
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>#</Table.HeaderCell>
            <Table.HeaderCell>Ürün Adı</Table.HeaderCell>
            <Table.HeaderCell>Birim Adet</Table.HeaderCell>
            <Table.HeaderCell>Fiyat</Table.HeaderCell>
            <Table.HeaderCell>Stok Adedi</Table.HeaderCell>
            <Table.HeaderCell></Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {products.map((product) => (
            <Table.Row key={product.id}>
              <Table.Cell>{product.id}</Table.Cell>
              <Table.Cell><Link to={`/products/${product.id}`}>{product.productName}</Link></Table.Cell>
              <Table.Cell>{product.quantityPerUnit}</Table.Cell>
              <Table.Cell>{product.unitPrice}</Table.Cell>
              <Table.Cell>{product.unitsInStock}</Table.Cell>
              <Table.Cell><Button onClick={()=>handleAddToCart(product)}>Sepete ekle</Button></Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>

        <Table.Footer>
          <Table.Row>
            <Table.HeaderCell colSpan="3">
              <Menu floated="right" pagination>
                <Menu.Item as="a" icon>
                  <Icon name="chevron left" />
                </Menu.Item>
                <Menu.Item as="a">1</Menu.Item>
                <Menu.Item as="a">2</Menu.Item>
                <Menu.Item as="a">3</Menu.Item>
                <Menu.Item as="a">4</Menu.Item>
                <Menu.Item as="a" icon>
                  <Icon name="chevron right" />
                </Menu.Item>
              </Menu>
            </Table.HeaderCell>
          </Table.Row>
        </Table.Footer>
      </Table>
    </div>
  );
}
