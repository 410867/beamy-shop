import React from 'react';
import Header2 from "../components/header/Header2";
import Footer2 from "../components/footer/Footer2";
import { Link } from "react-router-dom";

class Checkout extends React.Component {
    render() {
        return (
            <>
                <Header2 />
                {/* Intro Heading */}
                <section className="section_padding gray_bg intro_heading">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <h1>Checkout</h1>
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item">
                                        <Link to="/">Home</Link>
                                    </li>
                                    <li className="breadcrumb-item">
                                        <Link to="/product">Product</Link>
                                    </li>
                                    <li className="breadcrumb-item active">Checkout</li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Intro Heading ends */}
                {/* Cart Detail */}
                <section className="section_padding cart-checkout">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 left">
                                <h2>Billing Detail</h2>
                                <form>
                                    <div className="row">
                                        <div className="col-md-12">
                                            <div className="form-group">
                                                <select className="form-control">
                                                    <option>Select Country</option>
                                                    <option>Select Country 1</option>
                                                    <option>Select Country 2</option>
                                                    <option>Select Country 3</option>
                                                    <option>Select Country 4</option>
                                                    <option>Select Country 5</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-12">
                                            <div className="form-group">
                                                <select className="form-control">
                                                    <option>Select State</option>
                                                    <option>Select State 1</option>
                                                    <option>Select State 2</option>
                                                    <option>Select State 3</option>
                                                    <option>Select State 4</option>
                                                    <option>Select State 5</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Name"
                                                />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Last Name"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-12">
                                            <div className="form-group">
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Company Name"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-12">
                                            <div className="form-group">
              <textarea
                  className="form-control"
                  placeholder="Address"
                  defaultValue={""}
              />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-12">
                                            <div className="form-group">
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Town / City"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-12">
                                            <div className="form-group">
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Postcode / Zip"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Email Address"
                                                />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Phone Number"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-12">
                                            <div className="form-group">
                                                <label className="custom-control custom-checkbox">
                                                    <input
                                                        type="checkbox"
                                                        className="custom-control-input"
                                                        required=""
                                                    />
                                                    <span className="custom-control-indicator" />
                                                    <span className="custom-control-description">
                  Ship to a different address?
                </span>
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-12">
                                            <div className="form-group">
              <textarea
                  className="form-control"
                  placeholder="Order Notes"
                  defaultValue={""}
              />
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div className="col-lg-6 right">
                                <h2>Your Order</h2>
                                <div className="cart_table">
                                    <div className="table-responsive">
                                        <table className="table table-striped">
                                            <thead className="thead-default">
                                            <tr>
                                                <th>Product</th>
                                                <th>Name</th>
                                                <th>Price</th>
                                                <th>Quantity</th>
                                                <th>Total</th>
                                                <th>&nbsp;</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            <tr>
                                                <td className="product-thumbnail">
                                                    <Link to="#">
                                                        <img
                                                            src="./assets/images/150x150.jpg"
                                                            alt="image"
                                                        />
                                                    </Link>
                                                </td>
                                                <td className="product-name">Halter Jumpsuit in Navy</td>
                                                <td className="cart_product-price"> $75.00</td>
                                                <td>
                                                    <span className="qty_count">1</span>
                                                </td>
                                                <td className="cart-subtotal">$75.00</td>
                                                <td className="product-delet">
                                                    <Link to="#">
                                                        <i className="fa fa-trash-o" aria-hidden="true" />
                                                    </Link>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="product-thumbnail">
                                                    <Link to="#">
                                                        <img
                                                            src="./assets/images/150x150.jpg"
                                                            alt="image"
                                                        />
                                                    </Link>
                                                </td>
                                                <td className="product-name">Wrist Watches</td>
                                                <td className="cart_product-price">$160.00</td>
                                                <td>
                                                    <span className="qty_count">1</span>
                                                </td>
                                                <td className="cart-subtotal">$160.00</td>
                                                <td className="product-delet">
                                                    <Link to="#">
                                                        <i className="fa fa-trash-o" aria-hidden="true" />
                                                    </Link>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="product-thumbnail">
                                                    <Link to="#">
                                                        <img
                                                            src="./assets/images/150x150.jpg"
                                                            alt="image"
                                                        />
                                                    </Link>
                                                </td>
                                                <td className="product-name">Laptop Bag</td>
                                                <td className="cart_product-price"> $75.00</td>
                                                <td>
                                                    <span className="qty_count">1</span>
                                                </td>
                                                <td className="cart-subtotal">$75.00</td>
                                                <td className="product-delet">
                                                    <Link to="#">
                                                        <i className="fa fa-trash-o" aria-hidden="true" />
                                                    </Link>
                                                </td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                                <div className="order_checkout">
                                    <div className="table-responsive">
                                        <table className="table">
                                            <tbody>
                                            <tr className="checkout-subtotal">
                                                <th>Subtotal</th>
                                                <td>$310.00</td>
                                            </tr>
                                            <tr className="shipping">
                                                <th>Shipping</th>
                                                <td>
                                                    <ul className="list-style-none">
                                                        <li>Flat Rate: $0.00</li>
                                                        <li>Free Shipping</li>
                                                        <li>Local Delivery</li>
                                                    </ul>
                                                </td>
                                            </tr>
                                            <tr className="checkout-total total">
                                                <th>Total</th>
                                                <td>$310.00</td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                                <div className="direct_transfer">
                                    <h3>Direct Bank Transfer</h3>
                                    <p>
                                        Make your payment directly into our bank account. Please use your
                                        Order ID as the payment reference. Your order won't be shipped
                                        until the funds have cleared in our account.
                                    </p>
                                    <div className="pay-style">
                                        <ul>
                                            <li>
                                                <div className="form-check">
                                                    <label className="custom-control custom-radio">
                                                        <input
                                                            id="radioStacked1"
                                                            name="radio-stacked"
                                                            type="radio"
                                                            className="custom-control-input"
                                                        />
                                                        <span className="custom-control-indicator" />
                                                        <span className="custom-control-description">
                    Check Payment
                  </span>
                                                    </label>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="form-check">
                                                    <label className="custom-control custom-radio">
                                                        <input
                                                            id="radioStacked2"
                                                            name="radio-stacked"
                                                            type="radio"
                                                            className="custom-control-input"
                                                        />
                                                        <span className="custom-control-indicator" />
                                                        <span className="custom-control-description">
                    Cash On Delivery
                  </span>
                                                    </label>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="form-check">
                                                    <label className="custom-control custom-radio">
                                                        <input
                                                            id="radioStacked3"
                                                            name="radio-stacked"
                                                            type="radio"
                                                            className="custom-control-input"
                                                        />
                                                        <span className="custom-control-indicator" />
                                                        <span className="custom-control-description">Paypal</span>
                                                    </label>
                                                    <img
                                                        src="./assets/images/bank-payment.png"
                                                        alt="payment"
                                                        className="pay"
                                                    />
                                                </div>
                                            </li>
                                            <li>
                                                <div className="form-check">
                                                    <label className="custom-control custom-checkbox">
                                                        <input
                                                            type="checkbox"
                                                            className="custom-control-input"
                                                            required=""
                                                        />
                                                        <span className="custom-control-indicator" />
                                                        <span className="custom-control-description">
                    I've read &amp; accept the
                                                            <Link to="/terms-conditions">
                      terms &amp; conditions
                    </Link>
                  </span>
                                                    </label>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                    <button className="btn full_width" type="submit">
                                        Place Order
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Cart Detail ends */}
                <Footer2 />
            </>
        );
    }
}


export default Checkout;