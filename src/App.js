import './App.css';
import Layout from './layout/Layout';
import Home from './layout/pages/Home';
import PolCustomer from './layout/pages/policies/PolCustomer';
import PolPayment from './layout/pages/policies/PolPayment';
import PolRefund from './layout/pages/policies/PolRefund';
import PolSecurity from './layout/pages/policies/PolSecurity';
import PolWarranty from './layout/pages/policies/PolWarranty';
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
          <Route path="/policy-customers" element={<PolCustomer></PolCustomer>}></Route>
          <Route path="/policy-payment" element={<PolPayment></PolPayment>}></Route>
          <Route path="/policy-refund" element={<PolRefund></PolRefund>}></Route>
          <Route path="/policy-warranty" element={<PolWarranty></PolWarranty>}></Route>
          <Route path="/policy-security" element={<PolSecurity></PolSecurity>}></Route>
        </Route>
      </Routes>
    </div >
  );
}

export default App;
