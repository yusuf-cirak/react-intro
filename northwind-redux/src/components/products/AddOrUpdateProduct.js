import React, { useState, useEffect } from "react";
// useEffect'i componentDidMount yerine kullanacağız.
// useState, setState'e karşılık geliyor.
import { connect } from "react-redux";
import { getCategories } from "../../redux/actions/categoryActions";
import { saveProduct } from "../../redux/actions/productActions";
import ProductDetail from "./ProductDetail";

function AddOrUpdateProduct({
  products,
  categories,
  getProducts,
  getCategories,
  saveProduct,
  history,
  ...props
}) {
  const [product, setProduct] = useState({ ...props.product });
  // product state'ini veya state'deki product'ı ...props'ın product'ı ile set et.

  const [errors, setErrors] = useState({});

  useEffect(() => {
    // Category yoksa demek ki kullanıcı direkt linki kullanarak gelmiş.
    if (categories.length === 0) getCategories();

    setProduct({ ...props.product });
  }, [props.product]); // history.push'un sebep olduğu sonsuz döngüyü engellemek için. props.product exist olduğunda
  // useEffect çalışmayı bırakacak.

  function validate(name, value) {
    if (value === "") {
      setErrors((prevErrors) => ({
        ...prevErrors, // önceki error'lar.
        name: `The ${name} field is required`, // validate'de hata alınırsa ilgili error ismiyle beraber errors'a eklenecek.
      }));
    }else{
      setErrors((prevErrors) => ({
        ...prevErrors,
        name: ``,
      }));
    }
  }

  function handleChange(e) {
    const { name, value } = e.target; // e içerisindeki name ve value'yi değişkenlere atamış olduk.
    setProduct((previousProduct) => ({
      ...previousProduct, // burası bize prop olarak gelen product'a eşit.
      [name]: name === "categoryId" ? parseInt(value, 10) : value,
      // parseInt(string,radix) şeklinde yazılır.
      // Radix bir sayı sistemidir. 10 değeri decimal olan sayılar için yapılır. 2 binary için vb.
      // Default olarak radix 10 değerini kullanır aslında yazmasak da olur.
      // categoryId'si varsa değeri int'e çevir, yoksa direkt value'yi dön.
    }));
    validate(name, value);
  }

  function handleSave(e) {
    saveProduct(product).then(() => {
      history.push("/"); // Daha önce geldiğimiz sayfaya yönlendirme yapan bir araç.
      // React'in bir özelliğidir. Fakat bir bugu var, bu işlem yapıldığında uygulama sonsuz döngüye giriyor.
      // Bunu çözmek için useEffect'in sonuna [props.product] ekliyoruz. props.product olduğunda
      // useEffect çalışmayı bırakıyor ve sonsuz döngü engelleniyor
    });
    e.preventDefault();
  }

  return (
    <div>
      {product && (
        <ProductDetail
          product={product}
          categories={categories} // özellikleri yollamak çok önemli.
          onChange={handleChange}
          onSave={handleSave}
          errors={errors}
        />
      )}
    </div>
  );
}

export function getProductById(products, productId) {
  let product =
    products.find((product) => product.id === parseInt(productId)) || null;
  return product;
}

function mapStateToProps(state,ownProps={}) {
  const  {productId}  = ownProps

  const product =
    productId && state.productListReducer.length > 0 // productId varsa ve productReducer da varsa
      ? getProductById(state.productListReducer, productId) // state'den products'ları ve productId yi al
      : {}; // getProductById null döndüyse boş bir obje döndür.

  return {
    product: product,
    products: state.productListReducer,
    categories: state.categoryListReducer,
  };
}

const mapDispatchToProps = { getCategories, saveProduct };
// Fonksiyondaki uzun kullanıma gerek yok. Bu şekilde de dispatch işlemini halledebiliyoruz.

export default connect(mapStateToProps, mapDispatchToProps)(AddOrUpdateProduct);
