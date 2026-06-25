import "./ProductSection.css";
import { useNavigate } from "react-router-dom";
import headphoneImg from "./assets/product_headphone.png";
import shirtImg from "./assets/product_shirt.png";
import riceImg from "./assets/product_rice.png";

function ProductSection() {

    const navigate = useNavigate();

    const products = [
        {
            id: 1,
            name: "Premium Headphones",
            price: 999,
            image: headphoneImg
        },
        {
            id: 2,
            name: "Classic Cotton Shirt",
            price: 499,
            image: shirtImg
        },
        {
            id: 3,
            name: "Organic Jasmine Rice",
            price: 799,
            image: riceImg
        }
    ];

    return (

        <div className="products">

            {
                products.map((product) => (

                    <div
                        key={product.id}
                        className="card"
                    >

                        <div className="card-image-container">
                            <img 
                                src={product.image} 
                                alt={product.name} 
                                className="card-image"
                            />
                        </div>

                        <h3>{product.name}</h3>

                        <p>₹{product.price}</p>

                        <button
                            onClick={() =>
                                navigate(`/category/${product.id}`)
                            }
                        >
                            View Details
                        </button>

                    </div>

                ))
            }

        </div>

    );

}

export default ProductSection;