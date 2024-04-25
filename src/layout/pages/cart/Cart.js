import React, { useContext, useEffect, useState } from 'react';
import '../../../css/layout/pages/cart/Cart.css';
import { Link } from 'react-router-dom';
import ProductLineCard from '../../../components/parts/ProductLineCard';
import { UserContext } from '../../../context/UserContext';
import ProductService from '../../../service/ProductService';
import CartService from '../../../service/CartService';
import { toast } from 'react-toastify';
import TransactionService from '../../../service/TransactionService.';

function Cart() {
  const { cookies, isLoggedIn } = useContext(UserContext);

  const [productList, setProductList] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalPriceAfterSale, setTotalPriceAfterSale] = useState(0);

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
      setProductList(originProductList);
    }).catch((err) => { console.error("Failed to get product list", err) });
  }

  const calTotalPrice = (products) => {
    const total = products.reduce((accumulator, product) => {
      const productTotal = product.price * product.carts[0].quantity;
      return accumulator + productTotal;
    }, 0);
    console.log("Before Sale: " + total);
    setTotalPrice(total);
  }

  const calTotalPriceAfterSale = (products) => {
    const total = products.reduce((accumulator, product) => {
      const productTotal = (product.price * product.carts[0].quantity * (product.sale > 0 ? product.sale : 100)) / 100;
      return accumulator + productTotal;
    }, 0);
    console.log("After Sale: " + total);
    setTotalPriceAfterSale(total);
  }

  const removeFromCart = (cartId) => {
    CartService.removeProductFromCart(cartId).then((res) => {
      fetchProductData();
      toast.error("Removed from cart");
    }).catch((err) => { console.error("Failed to remove", err) });
  }

  const increaseQuantity = (cartId, currentQuantity) => {
    const cartToIncrease = {
      id: cartId,
      quantity: currentQuantity + 1
    };
    CartService.increaseQuantity(cartToIncrease).then((res) => {
      fetchProductData();
    }).catch((err) => { console.error("Failed to increase quantity", err) });
  }

  const decreaseQuantity = (cartId, currentQuantity) => {
    if (currentQuantity <= 1) {
      removeFromCart(cartId);
    } else {
      const cartToDecrease = {
        id: cartId,
        quantity: currentQuantity - 1
      };
      CartService.increaseQuantity(cartToDecrease).then((res) => {
        fetchProductData();
      }).catch((err) => { console.error("Failed to increase quantity", err) });
    }
  }

  const createTransaction = (productsInCart, totalPrice) => {
    const transaction = {
      userId: cookies.user.id,
      date_created: new Date(),
      total_paid: totalPrice,
      products: productsInCart.map((product) => {
        return {
          id: product.id,
          name_code: product.name_code,
          price: product.price,
          sale: product.sale,
          quantity: product.carts[0].quantity
        };
      })
    }
    TransactionService.createTransaction(transaction)
      .catch((error) => { console.error("Failed to save transaction history", error) });
  }

  const removeAllProductFromCart = (products) => {
    const removalPromises = products.map((product) => {
      return CartService.removeProductFromCart(product.carts[0].id);
    });

    Promise.all(removalPromises).then((res) => {
      createTransaction(productList, totalPriceAfterSale);
    })
      .catch((err) => {
        console.error("Failed to remove products:", err);
      });

    //mimic data solving :))
    return new Promise(resolve => setTimeout(resolve, 3000));
  }

  const payNow = () => {
    toast.promise(
      removeAllProductFromCart(productList),
      {
        pending: 'Requesting Payment, please wait',
        success: 'Payment Successfully! You can check your payment history in your profile',
        error: 'Payment rejected 😢'
      }
    ).then((res) => { fetchProductData(); });
  }

  useEffect(() => {
    calTotalPrice(productList);
    calTotalPriceAfterSale(productList);
  }, [productList])

  useEffect(() => {
    fetchProductData();
  }, [])



  return (
    <div className="Cart text-light" >
      <div className="text-light" style={{ overflow: "hidden", marginBottom: "1%" }}>
        {/* <img src="/img/banner_sales.svg" style={{ objectFit: "cover", width: "auto" }} /> */}
        <h2 className="d-flex justify-content-center" style={{ backgroundColor: "#E8C284", padding: "10px", color: "black" }}>
          Free exchange and returns within
          <span className="product-detail-glitter"> &nbsp;30&nbsp;</span>days
        </h2>
      </div>
      <div className="in-cart d-flex">
        <div className="row-information" style={{ width: "70%", padding: "10px" }}>
          <h5 className="cart-option text-start">
            Shopping cart
          </h5>
          <div style={{ height: "2px", backgroundColor: "white", marginTop: "3%", marginBottom: "3%" }} />
          <p className="text-start" style={{ marginBottom: "3%" }}>You have {productList.length} items in your cart</p>

          <div className="product-line-card d-flex" style={{ backgroundColor: "white", marginBottom: "4%", borderRadius: "4px", color: "black" }}>
            <div className="d-flex justify-content-center" style={{ padding: "0", width: "60%" }}>
              <div>Product Info</div>
            </div>
            <div className="" style={{ padding: "0", width: "20%" }}>Quantity</div>
            <div className="text-start" style={{ padding: "0", width: "15%" }}>
              Price
            </div>
            <div className="" style={{ padding: "0", width: "5%" }}>

            </div>
          </div>

          {productList.map((product) => (
            <ProductLineCard product={product}
              removeFromCart={removeFromCart}
              increaseQuantity={increaseQuantity}
              decreaseQuantity={decreaseQuantity}
              key={product.id}></ProductLineCard>
          ))}


        </div>
        {/* Payment section */}
        <div className="payment" style={{ width: "30%", padding: "10px" }}>
          <div className='in-payment'>
            <div className="card-body">
              {/* Payment form content */}
              <div className='text-start'>
                <h4 className="">Delivered: </h4>
                <div className='d-flex justify-content-between'>
                  <h6 style={{ marginBottom: "0" }}><b>{cookies.user && cookies.user.Fullname}</b></h6>
                  <p style={{ marginBottom: "0" }}> || </p>
                  <h6 style={{ marginBottom: "0" }}><b>{cookies.user && cookies.user.phone}</b></h6>
                </div>
                <h6>{cookies.user && cookies.user.address}</h6>
              </div>
              <hr className="my-4" />
              <div className='d-flex justify-content-between'>
                <h4 className="">Provisional total amount</h4>
              </div>

              <hr className="my-4" />

              <div className="d-flex justify-content-between">
                <p className="mb-2">Subtotal</p>
                <p className="mb-2">${totalPrice.toLocaleString()}</p>
              </div>

              <div className="d-flex justify-content-between">
                <p className="mb-2">Discount</p>
                <p className="mb-2">-${(totalPrice - totalPriceAfterSale).toLocaleString()}</p>
              </div>

              <div className="d-flex justify-content-between mb-4">
                <p className="mb-2">Total(Incl. taxes)</p>
                <p className="mb-2">${totalPriceAfterSale.toLocaleString()}</p>
              </div>
              <div className='d-flex justify-content-center'>
                {productList.length > 0
                  ? <button type="button" className="checkout" onClick={() => payNow()}>
                    <div>Checkout <i className="fas fa-long-arrow-alt-right ms-2"></i></div>
                  </button>
                  : <Link to={"/products"} className="checkout btn">
                    <div>Go to shop <i className="fas fa-long-arrow-alt-right ms-2"></i></div>
                  </Link>}
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
