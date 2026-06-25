import "./ProductSection.css";
import { useNavigate } from "react-router-dom";

function ProductSection() {

    const navigate = useNavigate();

    const products = [
        {
            id: 1,
            name: "Headphone",
            price: 999,
            color: "#95E1D3"
        },
        {
            id: 2,
            name: "Shirt",
            price: 499,
            color: "#F38181"
        },
        {
            id: 3,
            name: "Rice Bag",
            price: 799,
            color: "#FFE66D"
        }
    ];

    return (

        <div className="products">

            {
                products.map((product) => ( //map links to product array and loops through it

                    <div
                        key={product.id}
                        className="card"
                    >

                        <div
                            className="card-image"
                            style={{
                                backgroundColor: product.color
                            }}
                        >
                            📦
                        </div>

                        <h3>{product.name}</h3>

                        <p>₹{product.price}</p>

                        <button
                            onClick={() =>
                                navigate(`/category/${product.id}`) //
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