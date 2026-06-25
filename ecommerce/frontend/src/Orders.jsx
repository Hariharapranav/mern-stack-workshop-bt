import { useContext, useEffect, useState } from "react";
import Header from "./Header";
import { AuthContext } from "./AuthContext";
import { useNavigate } from "react-router-dom";
import "./Orders.css";

function Orders() {
  const { user } = useContext(AuthContext);
  const [orders, setOrders] = useState([]);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/login");
      return;
    }

    async function fetchOrders() {
      try {
        const response = await fetch(`http://localhost:3000/orders?userId=${user.id}`);
        if (!response.ok) {
          throw new Error("Failed to load orders");
        }
        const data = await response.json();
        setOrders(data);
      } catch (err) {
        setError(err.message || "Unable to fetch orders");
      }
    }

    fetchOrders();
  }, [user, navigate]);

  return (
    <div>
      <Header />
      <div className="orders-page">
        <h2>My Orders</h2>
        {error && <div className="orders-error">{error}</div>}
        {orders.length === 0 ? (
          <p>No orders yet. Buy a product to see it here.</p>
        ) : (
          <div className="orders-list">
            {orders.map((order) => (
              <div key={order._id} className="order-card">
                <div className="order-image">
                  <img src={order.image} alt={order.productName} />
                </div>
                <div className="order-details">
                  <h3>{order.productName}</h3>
                  <p>Price: ₹{order.price}</p>
                  <p>Ordered by: {order.username}</p>
                  <p>{new Date(order.createdAt).toLocaleString()}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Orders;
