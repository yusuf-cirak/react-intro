import { Form, Formik } from "formik";
import React, { } from "react";
import * as Yup from "yup";
import {Button} from 'semantic-ui-react'
import YcTextInput from "../utilities/customFormControls/YcTextInput";
import ProductService from "../services/productService";
import { toast } from 'react-toastify';


export default function ProductAdd() {
  const initialValues = { // Başlangıç değerleri bu şekilde gönderilebilir. Formik default olarak istiyor.
    productName: "",
    unitPrice: "",
    unitsInStock:""
  };

  const schema = Yup.object({ // Formik default olarak bir şema da istiyor. Validasyonumuzu bu şekilde yapıyoruz.
    productName: Yup.string().required("Ürün adı alanı boş bırakılamaz"),
    unitPrice: Yup.number().required("Ürün fiyatı alanı boş bırakılamaz"),
    unitsInStock:Yup.number().required("Stok adedi alanı boş bırakılamaz")
  });


const productService=new ProductService();
  const addProductHandler=async (product)=>{
   await productService.addProduct(product);
    toast.info(`${product.productName} veri tabanına eklendi`)
  }


  return (
    <div>
      {/* Formik kullanarak bir form yazacaksak bir Formik tagi içerisine alıyoruz. Bunun sebebi formik
         form'u ile diğer formların karışmaması için, ek olarak Formik elementinin prop'larına validasyon gibi
          ilgili başlangıç şemalarını gönderiyoruz. */}
      <Formik initialValues={initialValues} validationSchema={schema} onSubmit={addProductHandler}>
        <Form className="ui form">
        {/* <FormField>
      <Field name="productName" placeholder="Ürün Adı"></Field>
      <ErrorMessage name="productName" render={error=>
          <Label pointing basic color="red" content={error}></Label>
      }></ErrorMessage>
    </FormField> */}
    <YcTextInput name="productName" placeholder="Ürün Adı"/>
    <YcTextInput name="unitPrice" placeholder="Ürün Fiyatı"/>
    <YcTextInput name="unitsInStock" placeholder="Stok Adedi"/>
    {/* Custom form'un ekmeğini yiyoruz. */}



    <Button color="green" type="submit">Ekle</Button>
        </Form>
      </Formik>
    </div>
    // yup ile ilgili validasyon kodlarını yazdık, prop olarak da yolladık ama program ilgili validasyonu
    // yapmayacak. aradaki bağı kurabilmek adına name="productName" şeklinde tanımlamamız gerekiyor.
  );
}
