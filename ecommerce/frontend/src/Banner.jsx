import { useNavigate } from "react-router-dom";
import "./Banner.css";
import summerSaleImg from "./assets/summer_sale.png";
import newArrivalsImg from "./assets/new_arrivals.png";

function Banner() {
  const navigate = useNavigate();

  return (
    <div>
      <div className="banner-container">
        <div
          className="banner"
          style={{
            backgroundImage: `url(${summerSaleImg})`
          }}
        />

        <div
          className="banner"
          style={{
            backgroundImage: `url(${newArrivalsImg})`
          }}
        />
      </div>

      <div className="categories-row">
        <div className="categories">
          <button>Electronics</button>
          <button>Groceries</button>
          <button>Clothes</button>
        </div>

        <button className="show-all-button" onClick={() => navigate("/products")}>Show All Products</button>
      </div>
    </div>
  );
}

export default Banner;