import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const ProductsContext = createContext();

export const ProductsProvider = ({ children }) => {
    const [products, setProducts] = useState([]);
    const [filter, setFilter] = useState([]);

    useEffect(() => {
        axios.get("https://fakestoreapi.com/products")
            .then((result) => {
                setProducts(result.data);
                setFilter(result.data);
            }).catch(() => {
            alert("Error: Could not fetch data from the API");
        });
    }, []);

    return (
        <ProductsContext.Provider value={{ products, filter, setFilter }}>
            {children}
        </ProductsContext.Provider>
    );
};