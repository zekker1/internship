import "./mainTag.css"
import axios from "axios"
import {useState} from "react";
import {useEffect} from "react";
import HeaderTag from "../Header/headerTag.jsx";

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
            <div className="mainContainer">
                <ul className="ul">
                    {products.map((product) => (
                        <li key={product.id}>
                            <div className="productDiv">
                                <img src={product.image} alt="image" className="productImage"/>
                            </div>
                            <div className="productDetails">
                                <div className="productTitle">{product.title}</div>
                                <div className="productPrice">{product.price}$</div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </main>
    );
}