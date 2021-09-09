import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import ProductService from "../services/productService";
import { Button, Card, Image, Label } from 'semantic-ui-react'

export default function ProductDetail() {
  let { id } = useParams(); //parametreleri object olarak verir. hangi parametreler Route'larda belirttiğimiz path parametreleri

  const [product, setProduct] = useState({}); //tek bir değer gelecği için ilk default değeri dizi değil obje.

  useEffect(() => {
    let productService = new ProductService();
    productService
      .getById(id)
      .then(result => setProduct(result.data.data))
  }, []);


  return (
    <div>
      <Card.Group>
        <Card fluid>
          <Card.Content>
            <Image
              floated="right"
              size="mini"
              src="/images/avatar/large/steve.jpg"
            />
            <Card.Header>{product.productName}</Card.Header>
            <Card.Meta>{product.category?.categoryName}</Card.Meta> {/*  -------------> SORUN BURADA YAŞANIYOR <-------------*/}
            <Card.Meta>{product.unitPrice}</Card.Meta>
            <Card.Meta>{product.unitsInStock}</Card.Meta>
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