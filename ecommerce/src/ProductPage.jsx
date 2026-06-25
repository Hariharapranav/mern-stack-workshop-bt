import { useParams, useNavigate } from "react-router-dom";
import Header from "./Header";
import headphoneImg from "./assets/product_headphone.png";
import shirtImg from "./assets/product_shirt.png";
import riceImg from "./assets/product_rice.png";
import "./ProductPage.css";

const productDetails = {
  1: {
    name: "Premium Headphones",
    price: 999,
    image: headphoneImg,
    description: "Experience high-fidelity audio with active noise cancellation and a 40-hour battery life. Perfect for work, travel, and music lovers who appreciate pristine acoustics.",
    features: [
      "Active Noise Cancellation",
      "Up to 40 Hours Battery Life",
      "Ultra-comfortable Ergonomic Cushioning",
      "Hi-Res Wireless Audio Certified"
    ]
  },
  2: {
    name: "Classic Cotton Shirt",
    price: 499,
    image: shirtImg,
    description: "Crafted from 100% organic long-staple cotton, this classic casual shirt offers breathable comfort, refined durability, and a clean, versatile style suitable for any occasion.",
    features: [
      "100% Organic Long-Staple Cotton",
      "Breathable Lightweight Fabric",
      "Pre-shrunk for Perfect Fit",
      "Machine Wash Safe"
    ]
  },
  3: {
    name: "Organic Jasmine Rice",
    price: 799,
    image: riceImg,
    description: "Naturally fragrant, soft-textured, and delicious premium quality jasmine rice. Sourced directly from certified organic farms to bring a healthy, aromatic dining experience to your family.",
    features: [
      "100% Certified Organic Jasmine Rice",
      "Naturally Aromatic and Fluffy Texture",
      "Grown using Sustainable Farming",
      "Gluten-Free and Non-GMO"
    ]
  }
};

function ProductPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = productDetails[id];

  if (!product) {
    return (
      <div>
        <Header />
        <div className="not-found">
          <h2>Product Not Found</h2>
          <button className="back-btn" onClick={() => navigate("/")}>Go Back Home</button>
        </div>
      </div>
    );
  }

  return (
    <div>
      <Header />
      <div className="product-page-container">
        <button className="back-link" onClick={() => navigate("/")}>
          &larr; Back to Shop
        </button>
        
        <div className="product-detail-wrapper">
          <div className="product-image-gallery">
            <img src={product.image} alt={product.name} className="product-image" />
          </div>
          
          <div className="product-details-info">
            <span className="product-category-tag">Featured Product</span>
            <h1 className="product-title">{product.name}</h1>
            <div className="product-price-row">
              <span className="product-price-tag">₹{product.price}</span>
              <span className="stock-status">In Stock</span>
            </div>
            
            <p className="product-desc">{product.description}</p>
            
            <div className="product-features-list">
              <h3>Key Features</h3>
              <ul>
                {product.features.map((feat, index) => (
                  <li key={index}>{feat}</li>
                ))}
              </ul>
            </div>
            
            <div className="purchase-actions">
              <button className="add-to-cart-btn">Add to Cart</button>
              <button className="buy-now-btn">Buy It Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductPage;