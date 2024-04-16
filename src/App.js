import './App.css';
import Layout from './layout/Layout';
import Home from './layout/pages/Home';
import Login from './layout/pages/auth/Login';
import Register from './layout/pages/auth/Register';
import AboutUs from './layout/pages/misc/AboutUs';
import Contact from './layout/pages/misc/Contact';
import News from './layout/pages/misc/News';
import PolCustomer from './layout/pages/policies/PolCustomer';
import PolPayment from './layout/pages/policies/PolPayment';
import PolRefund from './layout/pages/policies/PolRefund';
import PolSecurity from './layout/pages/policies/PolSecurity';
import PolWarranty from './layout/pages/policies/PolWarranty';
import ProductDetail from './layout/pages/products/ProductDetail';
import ProductList from './layout/pages/products/ProductList';
import { Route, Routes } from 'react-router-dom';
import ProductOther from './layout/pages/products/tabs/ProductOther';
import Store from './layout/pages/products/tabs/Store';
import CommentList from './layout/pages/products/tabs/CommentList';
import PageNotFound from './layout/pages/PageNotFound';
import { ToastContainer } from 'react-toastify';
import { CookiesProvider, useCookies } from 'react-cookie';
import { UserContext, UserProvider } from './context/UserContext';
import { useEffect, useState } from 'react';

function App() {
  // const [isLoggedIn, setIsLoggedIn] = useState(0);
  // const [cookies, setCookie, removeCookie] = useCookies(['user']);

  // const handleLogout = () => {
  //   removeCookie('user');
  //   setIsLoggedIn(0);
  // }

  // const handleLogin = (user) => {
  //   setCookie('user', user, { expires: new Date(Date.now() + 3600000) });
  //   setIsLoggedIn(1);
  //   console.log("login?:" + isLoggedIn);
  // }

  // useEffect(() => {
  //   console.log(isLoggedIn ? "Logged in" : "Not logged in");
  //   console.log(cookies);
  //   if (cookies.user) {
  //     setIsLoggedIn(1);
  //     console.log("yes"+isLoggedIn);
  //   } else {
  //     setIsLoggedIn(0);
  //     console.log("no" + isLoggedIn);
  //   }
  // }, [isLoggedIn]);

  return (
    <CookiesProvider>
      <div className="App" >
        <UserProvider>
          <Routes>
            <Route path="/" element={<Layout></Layout>}>
              <Route path="/" element={<Home />}></Route>
              <Route path="/products" element={<ProductList></ProductList>}></Route>
              <Route path="/products/:category" element={<ProductList></ProductList>}></Route>
              <Route path="/products/detail/:productId" element={<ProductDetail></ProductDetail>}>
                <Route path='' element={<ProductOther></ProductOther>} />
                <Route path='store' element={<Store></Store>} />
                <Route path='comment' element={<CommentList></CommentList>} />
              </Route>
              <Route path="/policy-customers" element={<PolCustomer></PolCustomer>}></Route>
              <Route path="/policy-payment" element={<PolPayment></PolPayment>}></Route>
              <Route path="/policy-refund" element={<PolRefund></PolRefund>}></Route>
              <Route path="/policy-warranty" element={<PolWarranty></PolWarranty>}></Route>
              <Route path="/policy-security" element={<PolSecurity></PolSecurity>}></Route>
              <Route path="/about-us" element={<AboutUs></AboutUs>}></Route>
              <Route path="/contact-us" element={<Contact></Contact>}></Route>
              <Route path="/news" element={<News></News>}></Route>
              <Route path='*' element={<PageNotFound></PageNotFound>}></Route>
            </Route>
            <Route path="/register" element={<Register></Register>}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path='*' element={<PageNotFound></PageNotFound>}></Route>
          </Routes>
          <ToastContainer />
        </UserProvider>
      </div >
    </CookiesProvider >
  );
}

export default App;
