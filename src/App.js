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
import { Navigate, Route, Routes, useNavigate } from 'react-router-dom';
import ProductOther from './layout/pages/products/tabs/ProductOther';
import Store from './layout/pages/products/tabs/Store';
import CommentList from './layout/pages/products/tabs/CommentList';
import PageNotFound from './layout/pages/PageNotFound';
import { ToastContainer, toast } from 'react-toastify';
import { CookiesProvider, useCookies } from 'react-cookie';
import { useEffect, useState } from 'react';
import { UserContext } from './context/UserContext';
import UserDetail from './layout/pages/users/UserDetail';
import ProductSearchResult from './layout/pages/products/ProductSearchResult';
import Cart from './layout/pages/cart/Cart';
import { getAndRemoveRedirectUrl, storeRedirectUrl } from './utils/redirect';
import TransactionHistory from './layout/pages/users/TransactionHistory';
import TransactionDetail from './layout/pages/users/TransactionDetail';
import UpdateInfor from './layout/pages/users/UpdateInfor';
import UpdatePassword from './layout/pages/users/UpdatePassword';
import ProductListAdmin from './admin/admin_page/components/ProductListAdmin';
import EditProductAdmin from './admin/admin_page/components/EditProductAdmin';
import AddProductAdmin from './admin/admin_page/components/AddProductAdmin';
import UserListAdmin from './admin/admin_page/components/UserListAdmin';
import AdminLayout from './admin/AdminLayout';
import ProductService from './service/ProductService';

function App() {
  // for login purposes
  const [isLoggedIn, setIsLoggedIn] = useState(0);
  const [cookies, setCookie, removeCookie] = useCookies(['user']);

  const navigate = useNavigate();

  const handleLogout = () => {
    removeCookie('user', { expires: new Date(0) });
    setIsLoggedIn(0);
    setCartQuantity(0);
    toast.success("Logged out, see you again!");
    // setTimeout(() => {
    //   window.location.href = '/'; 
    // }, 1500);
  }

  const handleLogin = (user) => {
    setCookie('user', user, { expires: new Date(Date.now() + 3600000) });
    setIsLoggedIn(1);
    const redirectUrl = getAndRemoveRedirectUrl();
    if (redirectUrl) {
      navigate(redirectUrl);
    } else {
      navigate("/")
    }
  }

  useEffect(() => {
    console.log(isLoggedIn);
    if (cookies.user) {
      setIsLoggedIn(1);
    } else {
      setIsLoggedIn(0);
    }
  }, [cookies]);

  useEffect(() => {
    if (!isLoggedIn) {
      const currentPageUrl = window.location.pathname;
      storeRedirectUrl(currentPageUrl);
    }
  }, [])


  // for showing number products in cart
  const [cartQuantity, setCartQuantity] = useState([]);

  const getProductInCart = (products, userId) => {
    const filteredProducts = products.map((product) => {
      const filteredCarts = product.carts.filter((cart) => cart.userId === userId);
      return { ...product, carts: filteredCarts };
    });
    const productsInCart = filteredProducts.filter((product) => product.carts.length > 0);
    return productsInCart;
  }

  const fetchProductData = () => {
    ProductService.getAllProductWithCart().then((res) => {
      let originProductList = res.data;
      originProductList = getProductInCart(originProductList, cookies.user.id);
      console.log(originProductList);
      setCartQuantity(originProductList.length);
    }).catch((err) => { console.error("Failed to get product list", err) });
  }

  useEffect(() => {
    if (cookies.user) {
      fetchProductData();
    }
  }, [cookies])

  return (
    <CookiesProvider>
      <div className="App" >
        <UserContext.Provider
          value={{
            isLoggedIn, setIsLoggedIn, cookies, setCookie, removeCookie, handleLogin, handleLogout,
            cartQuantity, setCartQuantity, getProductInCart, fetchProductData
          }}>
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
              <Route path='/products/search' element={<ProductSearchResult></ProductSearchResult>}></Route>
              {!isLoggedIn && <Route path="/cart" element={<Navigate to="/login" replace />} />}
              <Route path='/cart' element={<Cart></Cart>}></Route>
              <Route path="/policy-customers" element={<PolCustomer></PolCustomer>}></Route>
              <Route path="/policy-payment" element={<PolPayment></PolPayment>}></Route>
              <Route path="/policy-refund" element={<PolRefund></PolRefund>}></Route>
              <Route path="/policy-warranty" element={<PolWarranty></PolWarranty>}></Route>
              <Route path="/policy-security" element={<PolSecurity></PolSecurity>}></Route>
              <Route path="/about-us" element={<AboutUs></AboutUs>}></Route>
              <Route path="/contact-us" element={<Contact></Contact>}></Route>
              <Route path="/news" element={<News></News>}></Route>
              {!isLoggedIn && <Route path="/user/*" element={<Navigate to="/" replace />}></Route>}
              <Route path='/user/profile' element={<UserDetail></UserDetail>}></Route>
              <Route path='/user/profile/payment-history' element={<TransactionHistory></TransactionHistory>}></Route>
              <Route path='/user/profile/payment-detail' element={<TransactionDetail></TransactionDetail>}></Route>
              <Route path='/user/profile/update-info' element={<UpdateInfor />} />
              <Route path='/user/profile/update-security' element={<UpdatePassword />} />

              <Route path='*' element={<PageNotFound></PageNotFound>}></Route>
            </Route>
            {isLoggedIn && <Route path="/login" element={<Navigate to="/" replace />} />}
            {isLoggedIn && <Route path="/register" element={<Navigate to="/" replace />} />}
            <Route path="/register" element={<Register></Register>}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path='*' element={<PageNotFound></PageNotFound>}></Route>
            <Route path='/admin' element={<AdminLayout></AdminLayout>}>
              <Route path="/admin" element={<ProductListAdmin></ProductListAdmin>} />
              <Route path="/admin/edit/:id" element={<EditProductAdmin />} />
              <Route path="/admin/add" element={<AddProductAdmin></AddProductAdmin>} />
              <Route path="/admin/user-list" element={<UserListAdmin></UserListAdmin>} />
            </Route>
          </Routes>
          <ToastContainer toastStyle={{ backgroundColor: "#e8c284", color: "black" }} autoClose={2500} toastClassName={"app-toast"} progressClassName="app-toast-progress-bar" />
        </UserContext.Provider>
      </div >
    </CookiesProvider >
  );
}

export default App;
