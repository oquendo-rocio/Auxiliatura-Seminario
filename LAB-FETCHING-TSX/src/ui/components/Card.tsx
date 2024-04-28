import React, { useEffect, useState } from "react";
import "./Card.css";

interface Product {
  title: string;
  description: string;
  price: number;
}

const Card = () => {
  const [product, setProduct] = useState({ title: "", description: "", price: 0 });

  useEffect(() => {
    fetch(`https://dummyjson.com/products/2`)
      .then((res) => res.json())
      .then((data: Product) => setProduct(data));
  }, []);

  return (
    <div className="card-container">
      <p className="card-title">{product.title}</p>
      <p className="card-description">Descripcion: {product.description}</p>
      <p className="card-price">USD$: {product.price}</p>
    </div>
  );
};

export default Card;
