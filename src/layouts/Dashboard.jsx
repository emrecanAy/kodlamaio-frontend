import React from "react";
import ProductList from "../pages/ProductList";
import Categories from "./Categories";
import { Grid, GridColumn } from "semantic-ui-react";
import { Route } from "react-router";
import ProductDetail from "../pages/ProductDetail";
import { ToastContainer } from "react-toastify";
import ProductAdd from "../pages/ProductAdd";

export default function Dashboard() {
  return (
    <div>
      <ToastContainer position="bottom-right"/>
      <Grid>
        <Grid.Row>
          <GridColumn width={4}>
            <Categories />
          </GridColumn>
          <GridColumn width={12}>
            <Route exact path="/" component={ProductList}/>
            <Route exact path="/products" component={ProductList}/>
            <Route path="/products/:id" component={ProductDetail}/>
            <Route path="/product/add" component={ProductAdd}/>
          </GridColumn>
        </Grid.Row>
      </Grid>
    </div>
  );
}
