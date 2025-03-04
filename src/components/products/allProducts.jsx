import {useState, useEffect} from "react";
import axios from "axios";
import * as React from "react";
import "./allProducts.css";
import SidebarTag from "../sidebar/sidebarTag.jsx";

export default function AllProducts() {

    const [products, setProducts] = useState([]);
    const [filter, setFilter] = useState(products);

    function errorFunction() {
        alert("Error: Could not fetch data from the API")
    }

    useEffect(() => {
        axios.get("https://fakestoreapi.com/products")
            .then((result) => {
                setProducts(result.data);
                setFilter(result.data);
            }).catch(() => {
            errorFunction();
        });
    }, []);

    return (
        <>
            <SidebarTag products={products}
                        setFilter={setFilter}/>
            <ul className="ul">
                {filter.map((product) => (
                    <li key={product.id}>
                        <div className="product-div">
                            <img src={product.image} alt="image" className="product-image"/>
                        </div>
                        <div className="product-details">
                            <div className="product-title">
                                {product.title.length >= 40
                                    ? product.title.substring(0, 40) + "..."
                                    : product.title}
                            </div>
                            <div className="product-price">
                                {product.price}$
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </>
    )
}