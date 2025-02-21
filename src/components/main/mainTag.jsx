import "./mainTag.css"
import axios from "axios"
import {useState} from "react";
import {useEffect} from "react";
import HeaderTag from "../header/headerTag.jsx";

export default function MainTag() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get("https://fakestoreapi.com/products")
            .then((result) => {
                setProducts(result.data);
            });
    }, []);

    return (
        <main>
            <HeaderTag setProducts={setProducts} />
            <div className="main-container">
                <ul className="ul">
                    {products.map((product) => (
                        <li key={product.id}>
                            <div className="product-div">
                                <img src={product.image} alt="image" className="product-image"/>
                            </div>
                            <div className="product-details">
                                <div className="product-title">{product.title}</div>
                                <div className="product-price">{product.price}$</div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </main>
    );
}