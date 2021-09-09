import axios from "axios";

export default class ProductService{
    getProducts(){
        return axios.get("http://localhost:8080/api/products/getall"); //istekte bulunacağımız api adresi
    }

    getByProductName(productName){
        return axios.get("http://localhost:8080/api/products/getByProductName?productName="+ productName); //istekte bulunacağımız api adresi
    }

    getById(id){
        return axios.get("http://localhost:8080/api/products/getById?id="+id); //istekte bulunacağımız api adresi
    }

}