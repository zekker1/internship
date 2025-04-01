import "./content.css";
import { useContext } from "react";
import { ProductsContext } from "../API/ProductContext.jsx";

export default function Content() {
    const { filter } = useContext(ProductsContext);

    return (
        <main>
            <ul className="ul">
                {filter.map((product) => (
                    <li className="product-item"
                        key={product.id}>
                        <div className="product-div">
                            <img src={product.image} alt="image"
                                 className="product-image"/>
                        </div>
                        <div className="product-details">
                            <div className="product-title">
                                {product.title.length >= 30
                                    ? product.title.substring(0, 30) + "..."
                                    : product.title}
                            </div>
                            <div className="product-price">
                                {product.price}$
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </main>
    );
}