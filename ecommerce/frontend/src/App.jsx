import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Header";
import Banner from "./Banner";
import ProductSection from "./ProductSection";
import ProductPage from "./ProductPage";
import GetProducts from "./GetProducts";
import Login from "./Login";
import Orders from "./Orders";
import { AuthProvider } from "./AuthContext";

function Home() {
  return (
    <div>
      <Header />
      <Banner />
      <ProductSection />
    </div>
  );
}

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/category/:id" element={<ProductPage />} />
          <Route path="/products" element={<GetProducts />} />
          <Route path="/login" element={<Login />} />
          <Route path="/orders" element={<Orders />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}
export default App;