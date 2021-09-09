import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
import * as Yup from "yup";
import { Button, FormField, Label } from "semantic-ui-react";
import KodlamaIoTextInput from "../utilities/customFormControls/KodlamaIoTextInput";

export default function ProductAdd() {
  const initialValues = { productName: "", unitPrice: 10 };

  const schema = Yup.object({
    productName: Yup.string().required("Ürün adı zorunludur!"),
    unitPrice: Yup.number().required("Ürün fiyatı zorunludur!"),
  });

  return (
      <Formik 
      initialValues={initialValues} 
      validationSchema={schema} 
      onSubmit = {(values)=>{
          console.log(values) //yani burada axios çağırırsak post yapabiliriz.
      }}
      >
        <Form className="ui form">
            <KodlamaIoTextInput name="productName" placeholder="Ürün adı"/>
            <KodlamaIoTextInput name="unitPrice" placeholder="Ürün fiyatı"/>
          <Button color="green" type="submit">Ekle</Button>
        </Form>
      </Formik>
  );
}