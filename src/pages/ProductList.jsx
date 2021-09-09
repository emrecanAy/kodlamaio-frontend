import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { Button, Icon, Menu, Table } from "semantic-ui-react";
import ProductService from "../services/productService";
import { useDispatch } from "react-redux";
import { addToCart } from "../store/actions/cartActions";
import { toast } from "react-toastify";

export default function ProductList() {

  const dispatch = useDispatch() //bir fonksiyon çağırmak için dispatch kullanırız.
  //hook teknigini kullanacagiz.
  const [products, setProducts] = useState([]); //bunlar ürünler olacak
  //bu benim products diye bir datam var, bu sayfada ben onu kullanağım demektir. default değeri boş bir array
  //bu products'a müdahale edildiği anda return içeriğindeki sayfa yeniden render ediliyor.
  //useEffect fonksiyonuyla ile bunu çözeceğiz.

  useEffect(() => {
    //arrow func yaptık. sayfa yüklendiğinde yapılmasını istediğimiz kodu yazıyoruz.
    let productService = new ProductService();
    productService
      .getProducts()
      .then((result) => setProducts(result.data.data)); //11-3:44
    //getproducts promise yapısı döndürüyor. başarılı olursa then, başarısız olursa catch.
    //then içerisi ise; başarılı olursa gelecek sonuç için demek.
  }, []); //[] eklemezsek, state değişiyor. tekrardan çalışıyor. tekrar state değişyior ... sonsuza kadar gidiyor.

  const handleAddToCart = (product)=>{
    dispatch(addToCart(product));
    toast.success(`${product.productName} sepete eklendi!`);
  } 

  return (
    <div>
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Product Name</Table.HeaderCell>
            <Table.HeaderCell>Unit Price</Table.HeaderCell>
            <Table.HeaderCell>Units In Stock</Table.HeaderCell>
            <Table.HeaderCell>Description</Table.HeaderCell>
            <Table.HeaderCell>Category</Table.HeaderCell>
            <Table.HeaderCell></Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {products.map(
            (
              product //productları map et ve içerdeki mor parantez ise şu jsx'i üret demek.
            ) => (
              <Table.Row key={product.id}>
                <Table.Cell><Link to={`/products/${product.id}`}>{product.productName}</Link></Table.Cell>
                <Table.Cell>{product.unitPrice}</Table.Cell>
                <Table.Cell>{product.unitsInStock}</Table.Cell>
                <Table.Cell>{product.quantityPerUnit}</Table.Cell>
                <Table.Cell>{product.category.categoryName}</Table.Cell>
                <Table.Cell><Button onClick={()=>handleAddToCart(product)}>Sepete Ekle</Button></Table.Cell>
              </Table.Row>
            )
          )}
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
