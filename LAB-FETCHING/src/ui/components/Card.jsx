import { useEffect, useState } from "react";
import "./Card.css";

export const Card = () => {

    const [product, setProduct] = useState({});

    useEffect(() =>{
        fetch(`https://dummyjson.com/products/2`)
        .then(res => res.json())
        .then(data => {setProduct(data)})
    }, []);

    return(
        <div className="card-container">
            <p className="card-title">{product.title}</p>
            <p className="card-description">Descripcion: {product.description}</p>
            <p className="card-price">USD$: {product.price}</p>
        </div>
    )
};