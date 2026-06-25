import { useState, useEffect } from "react";
import Header from "./Header";
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
    <div>
      <Header />
      <div className="products-page">
        <h1 className="products-title">All Products</h1>
        
        {products.length === 0 ? (
          <div className="no-products">
            <svg xmlns="http://www.w3.org/2000/svg" className="no-products-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
            </svg>
            <p>No products found in the database. Start the backend API to load products.</p>
          </div>
        ) : (
          <div className="products-container">
            {products.map((product) => (
              <div className="product-card" key={product._id}>
                <div className="product-card-image-container">
                  {product.image ? (
                    <img src={product.image} alt={product.name} className="product-card-image" />
                  ) : (
                    <div className="product-card-placeholder">
                      <svg xmlns="http://www.w3.org/2000/svg" className="placeholder-box-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                      </svg>
                      <span>No Image Available</span>
                    </div>
                  )}
                </div>
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
        )}
      </div>
    </div>
  );
}

export default GetProducts;