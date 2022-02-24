import React, {useState,useEffect} from "react";
import { useParams } from "react-router-dom";
import { Button, Card, Image } from "semantic-ui-react";
import ProductService from "../services/productService";


export default function ProductDetail() {
  let { id } = useParams();
  // useParams parametreleri obje olarak gönderen bir react-router-dom methodudur.
  const [product, setProduct] = useState({}); // Bize tek bir product gelecek o yüzden boş obje olmalı

  useEffect(() => {
    let productService = new ProductService();
    return (
      productService
        .getProductById(id)
        .then((result) => setProduct(result.data)) // burada neden products'ı set etmek yerine setProducts'ı kullandık?
        // Javascript immutability dolayısıyla. Eğer products'ı set edersek örneğin her bir aramada sayfa yeniden yüklenecektir.
        // Array'in içine değerler atıp gösteriyoruz gibi düşünebilirsin.
        .catch()
    );
  },[id]); // Buradaki array sayesinde requestin sonsuz döngüye girmesini engelliyorduk.
  // id state'i de değişirse sayfa tekrar yüklenecektir.
  return (
    <div>
      <Card.Group>
        <Card fluid>
          <Card.Content>
            <Image
              floated="right"
              size="mini"
              src="/images/avatar/large/jenny.jpg"
            />
            <Card.Header>{product.productName}</Card.Header>
            {/* <Card.Meta>{product.categoryName}</Card.Meta> */}
            <Card.Description>
              Jenny requested permission to view your contact details
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <div className="ui two buttons">
              <Button basic color="green">
                Approve
              </Button>
              <Button basic color="red">
                Decline
              </Button>
            </div>
          </Card.Content>
        </Card>
      </Card.Group>
    </div>
  );
}
