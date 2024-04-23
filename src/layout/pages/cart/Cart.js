import React from 'react';
import  '../../../css/layout/pages/cart/Cart.css';
// import 'bootstrap/dist/css/bootstrap.min.css';

function Cart() {
  return (
    <div className="Cart">
      <div className="in-cart row">
        <div className="row-information col-8">
          <h5 className="cart-option"><a href="#!" className="text-body"> &lt; Continue shopping</a></h5>
          <hr className="custom-hr"/>

          <div className="d-flex justify-content-between align-items-center mb-4">
            <div className="above-row">
              <p className="mb-1">Shopping cart</p>
              <p className="mb-0">You have 3 items in your cart</p>
            </div>
          </div>

          <div className="card ">
            <div className="card-body">
              <div className="d-flex justify-content-between">
                <div className="d-flex flex-row align-items-center">
                  <div>
                    <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-shopping-carts/img1.webp" className="img-fluid rounded-3" alt="Shopping item" style={{width: "65px"}}/>
                  </div>
                  <div className="ms-3">
                    <h5>Iphone 11 pro</h5>
                    <p className="small mb-0">256GB, Navy Blue</p>
                  </div>
                </div>
                <div className="d-flex flex-row align-items-center">
                  <div className="custom-input-left">
                    <input type="number" className="fw-normal mb-0 total" value="1" min="0"/> 
                  </div>
                  <div style={{width: "80px"}}>
                    <h5 className="mb-0">$900</h5>
                  </div>
                  <a href="#!" style={{color: "#cecece"}}><i className="fas fa-trash-alt"></i></a>
                </div>
              </div>
            </div>
          </div>

          {/* Content for second item */}
          <div className="card mb-3">
            <div className="card-body">
              <div className="d-flex justify-content-between">
                <div className="d-flex flex-row align-items-center">
                  <div>
                    <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-shopping-carts/img2.webp" className="img-fluid rounded-3" alt="Shopping item" style={{width: "65px"}}/>
                  </div>
                  <div className="ms-3">
                    <h5>Samsung galaxy Note 10</h5>
                    <p className="small mb-0">256GB, Navy Blue</p>
                  </div>
                </div>
                <div className="d-flex flex-row align-items-center">
                  <div className="custom-input-left">
                    <input type="number" className="fw-normal mb-0 total" value="1" min="0" style={{width: "100%"}}/> 
                  </div>
                  <div style={{width: "80px"}}>
                    <h5 className="mb-0">$900</h5>
                  </div>
                  <a href="#!" style={{color: "#cecece"}}><i className="fas fa-trash-alt"></i></a>
                </div>
              </div>
            </div>
          </div>

          {/* Content for third item */}
          <div className="card mb-3">
            <div className="card-body">
              <div className="d-flex justify-content-between">
                <div className="d-flex flex-row align-items-center">
                  <div>
                    <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-shopping-carts/img3.webp" className="img-fluid rounded-3" alt="Shopping item" style={{width: "65px"}}/>
                  </div>
                  <div className="ms-3">
                    <h5>Canon EOS M50</h5>
                    <p className="small mb-0">Onyx Black</p>
                  </div>
                </div>
                <div className="d-flex flex-row align-items-center">
                  <div className="custom-input-left">
                    <input type="number" className="fw-normal mb-0 total" value="1" min="0" style={{width: "100%"}}/> 
                  </div>
                  <div style={{width: "80px"}}>
                    <h5 className="mb-0">$1199</h5>
                  </div>
                  <a href="#!" style={{color: "#cecece"}}><i className="fas fa-trash-alt"></i></a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Payment section */}
        <div className="payment col-4">
          <div className='in-payment'>
            <div className="card-body">
              {/* Payment form content */}
              <div className='d-flex justify-content-between'>
              <h5 className="">Card details</h5>
              
              </div>
              
              <p className="small mb-2">Card type</p>
                <div className='d-flex justify-content-between'>
                            <a href="#!" type="submit" className="text-light"><i className="fab fa-cc-mastercard fa-4x me-4"></i></a>
                            <a href="#!" type="submit" className="text-light"><i className="fab fa-cc-visa fa-4x me-4"></i></a>
                            <a href="#!" type="submit" className="text-light"><i className="fa-brands fa-cc-apple-pay fa-4x me-4"></i></a>
                            <a href="#!" type="submit" className="text-light"><i className="fab fa-cc-paypal fa-4x"></i></a>
                </div>

              <form className="mt-4">
                <div data-mdb-input-init className="form-outline form-white mb-4">
                  <label className="form-label" htmlFor="typeName">Cardholder's Name</label>
                  <input type="text" id="typeName" className="form-control form-control-lg custom-input" size="17" placeholder="Cardholder's Name" />
                </div>

                <div data-mdb-input-init className="form-outline form-white mb-4">
                  <label className="form-label" htmlFor="typeText">Card Number</label>
                  <input type="text" id="typeText" className="form-control form-control-lg custom-input" size="17" placeholder="1234 5678 9012 3457"  minLength="19"  maxLength="19" />
                </div>

                <div className="row mb-4">
                  <div className="col-md-6">
                    <div data-mdb-input-init className="form-outline form-white">
                      <label className="form-label" htmlFor="typeExp">Expiration Date</label>
                      <input type="text" id="typeExp" className="form-control form-control-lg custom-input" placeholder="MM/YYYY" size="7" minLength="7" maxLength="7" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div data-mdb-input-init className="form-outline form-white">
                      <label className="form-label" htmlFor="typeText">CVV</label>
                      <input type="text" id="typeText" className="form-control form-control-lg custom-input" placeholder="&#9679;&#9679;&#9679;" size="1" minLength="3" maxLength="3" />
                    </div>
                  </div>
                </div>
              </form>

              <hr className="my-4"/>

              <div className="d-flex justify-content-between">
                <p className="mb-2">Subtotal</p>
                <p className="mb-2">$4798.00</p>
              </div>

              <div className="d-flex justify-content-between">
                <p className="mb-2">Shipping</p>
                <p className="mb-2">$20.00</p>
              </div>

              <div className="d-flex justify-content-between mb-4">
                <p className="mb-2">Total(Incl. taxes)</p>
                <p className="mb-2">$4818.00</p>
              </div>

              <button type="button" data-mdb-button-init data-mdb-ripple-init className="btn btn-info btn-block btn-lg submit-checkout">
                <div className="checkout d-flex justify-content-between">
                  <div><span>$4818.00</span></div> 
                  <div><span>Checkout <i className="fas fa-long-arrow-alt-right ms-2"></i></span></div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
