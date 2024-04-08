import './App.css';
import Layout from './layout/Layout';
import Home from './layout/pages/Home';
import ProductList from './layout/pages/products/ProductList';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout></Layout>}>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/products" element={<ProductList></ProductList>}></Route>
          <Route path="/products/:category" element={<ProductList></ProductList>}></Route>
          <Route path="/products/:category/:productId" element={<ProductList></ProductList>}></Route>
        </Route>
      </Routes>
    </div >
  );
}

export default App;
