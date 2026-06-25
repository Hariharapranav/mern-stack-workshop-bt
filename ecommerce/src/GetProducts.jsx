import { useState, useEffect } from "react";
import "./GetProducts.css";

function GetProducts() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/products")
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => console.error("Error fetching products:", error));
  }, []);

  return (
    <div className="products-page">
      <h1 className="products-title">Products</h1>
      <div className="products-container">
        {products.map((product) => (
          <div className="product-card" key={product._id}>
            <div className="product-card-image">Image placeholder</div>
            <div className="product-card-details">
              <h2>{product.name}</h2>
              <p>{product.description}</p>
              <div className="product-meta-row">
                <div className="product-price">₹{product.price}</div>
                <button className="buy-now-button">Buy Now</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default GetProducts;