import { Form, Formik } from "formik";
import React, { } from "react";
import * as Yup from "yup";
import {Button} from 'semantic-ui-react'
import YcTextInput from "../utilities/customFormControls/YcTextInput";
import ProductService from "../services/productService";
import { toast } from 'react-toastify';


export default function ProductAdd() {
  const initialValues = {
    productName: "",
    unitPrice: 10,
    unitsInStock:""
  };

  const schema = Yup.object({
    productName: Yup.string().required("Ürün adı alanı boş bırakılamaz"),
    unitPrice: Yup.number().required("Ürün fiyatı alanı boş bırakılamaz"),
    unitsInStock:Yup.number().required("Stok adedi alanı boş bırakılamaz")
  });




  return (
    <div>
      {/* Formik kullanarak bir form yazacaksak bir Formik tagi içerisine alıyoruz. Bunun sebebi formik
         form'u ile diğer formların karışmaması için, ek olarak Formik elementinin prop'larına validasyon gibi
          ilgili başlangıç şemalarını gönderiyoruz. */}
      <Formik initialValues={initialValues} validationSchema={schema} onSubmit={{}}>
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



    <Button color="green" type="submit">Ekle</Button>
        </Form>
      </Formik>
    </div>
    // yup ile ilgili validasyon kodlarını yazdık, prop olarak da yolladık ama program ilgili validasyonu
    // yapmayacak. aradaki bağı kurabilmek adına name="productName" şeklinde tanımlamamız gerekiyor.
  );
}
