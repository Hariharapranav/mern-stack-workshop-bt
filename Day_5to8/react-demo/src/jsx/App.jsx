import Header from '../jsx/Header.jsx'
import Banner from '../jsx/Banner.jsx'
import Des from '../jsx/Description.jsx'
import Product from '../jsx/Product.jsx'
import productImage from '../assets/product.png'
function App() {

  return (
    <>
    <Header />
    <Banner />
    <Des /><br />
    <Product url={productImage} title="E-Book" price="Rs.2000"/>
    <Product url={productImage} title="Paper Back" price="Rs.3000" />
    <Product url={productImage} title="Complete Edition" price="Rs.5000"/>
    </>
  )
}

export default App
