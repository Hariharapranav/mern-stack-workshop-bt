import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Header";
import Banner from "./Banner";
import ProductSection from "./ProductSection";
import ProductPage from "./ProductPage";

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
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<ProductPage />} />
      </Routes>
    </Router>
  );
}

export default App;