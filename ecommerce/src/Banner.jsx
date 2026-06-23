import "./Banner.css";

function Banner() {
  return (
    <div>

      <div className="banner-container">

        <div 
          className="banner"
          style={{
            backgroundColor: '#FF6B6B',
            backgroundImage: 'linear-gradient(135deg, #FF6B6B, #FF8E72)'
          }}
        >
          Summer Sale
        </div>

        <div 
          className="banner"
          style={{
            backgroundColor: '#4ECDC4',
            backgroundImage: 'linear-gradient(135deg, #4ECDC4, #44B8B3)'
          }}
        >
          New Arrivals
        </div>

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