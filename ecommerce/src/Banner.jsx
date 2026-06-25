import "./Banner.css";
import summerSaleImg from "./assets/summer_sale.png";
import newArrivalsImg from "./assets/new_arrivals.png";

function Banner() {
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

      <div className="categories">

        <button>Electronics</button>

        <button>Groceries</button>

        <button>Clothes</button>

      </div>

    </div>
  );
}

export default Banner;