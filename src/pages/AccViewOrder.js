import React from 'react';
import Header2 from "../components/header/Header2";
import Footer2 from "../components/footer/Footer2";
import { Link } from "react-router-dom";

class AccViewOrder extends React.Component {
    render() {
        return (
            <>
                <Header2 />
                {/* Intro Heading */}
                <section className="section_padding gray_bg intro_heading">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <h1>My Account</h1>
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item">
                                        <Link to="/">Home</Link>
                                    </li>
                                    <li className="breadcrumb-item active">My Account</li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Intro Heading ends */}
                {/* My Account View Order */}
                <div className="section_padding acc_view_orders">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3">
                                <div className="module_widget aside_account">
                                    <div className="block_title2">Account</div>
                                    <div className="module_widget_content">
                                        <ul>
                                            <li>
                                                <Link to="/my-account">My Account</Link>
                                            </li>
                                            <li>
                                                <Link to="/acc-wishlist">Wish List</Link>
                                            </li>
                                            <li>
                                                <Link to="/acc-order" className="active">
                                                    Order
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="/acc-pay-method">Payment Methods</Link>
                                            </li>
                                            <li>
                                                <Link to="#">Logout</Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-9">
                                <div className="right_acc_block">
                                    <div className="order_placed">
                                        <p>
                                            Order <span className="col_theme">#512025</span> was placed on
                                            <strong>Aug 25, 2021</strong> and is currently
                                            <strong>On hold</strong>.
                                        </p>
                                    </div>
                                    <h2 className="font_36_bold mr-btm-30">Order Detail</h2>
                                    <div className="cart_table acc_view_order_table">
                                        <div className="table-responsive">
                                            <table className="table table-striped">
                                                <thead className="thead-default">
                                                <tr>
                                                    <th>Product</th>
                                                    <th>Name</th>
                                                    <th>Quantity</th>
                                                    <th>Total</th>
                                                </tr>
                                                </thead>
                                                <tbody>
                                                <tr>
                                                    <td className="product-thumbnail">
                                                        <Link to="/product-detail-1">
                                                            <img
                                                                src="./assets/images/150x150.jpg"
                                                                alt="image"
                                                            />
                                                        </Link>
                                                    </td>
                                                    <td className="product-name">Halter Jumpsuit in Navy</td>
                                                    <td>
                                                        <div className="quantity">

                                                            <strong>1</strong>
                                                        </div>
                                                    </td>
                                                    <td className="cart_product-price">$75.00</td>
                                                </tr>
                                                <tr>
                                                    <td className="product-thumbnail">
                                                        <Link to="/product-detail-2">
                                                            <img
                                                                src="./assets/images/150x150.jpg"
                                                                alt="image"
                                                            />
                                                        </Link>
                                                    </td>
                                                    <td className="product-name">Wrist Watches</td>
                                                    <td>
                                                        <div className="quantity">

                                                            <strong>1</strong>
                                                        </div>
                                                    </td>
                                                    <td className="cart_product-price">$160.00</td>
                                                </tr>
                                                <tr>
                                                    <td className="product-thumbnail">
                                                        <Link to="/product-detail-3">
                                                            <img
                                                                src="./assets/images/150x150.jpg"
                                                                alt="image"
                                                            />
                                                        </Link>
                                                    </td>
                                                    <td className="product-name">Laptop Bag</td>
                                                    <td>
                                                        <div className="quantity">

                                                            <strong>1</strong>
                                                        </div>
                                                    </td>
                                                    <td className="cart_product-price">$75.00</td>
                                                </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                    <div className="row bank_row">
                                        <div className="col-lg-12">
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
                                                        <tr className="checkout-subtotal pay_method">
                                                            <th>Payment method</th>
                                                            <td>Direct Bank Transfer</td>
                                                        </tr>
                                                        <tr className="checkout-total total">
                                                            <th>Total</th>
                                                            <td>$310.00</td>
                                                        </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <div className="customer_details">
                                                <h2>Customer details</h2>
                                                <ul>
                                                    <li>
                                                        <strong>Email: </strong>contact@webrul.com
                                                    </li>
                                                    <li>
                                                        <strong>Phone: </strong>+61-1234-5678-90
                                                    </li>
                                                </ul>
                                                <div className="row">
                                                    <div className="col-lg-6">
                                                        <div className="ship_bill_address">
                                                            <h2>Billing Address</h2>
                                                            <address>
                                                                Matt Higgins
                                                                <br />
                                                                Alnahas Building, 2 AlBahr St,
                                                                <br />
                                                                Tanta AlGharbia, Egypt
                                                                <br />
                                                                301414
                                                            </address>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-6">
                                                        <div className="ship_bill_address">
                                                            <h2>Shipping Address</h2>
                                                            <address>
                                                                Matt Higgins
                                                                <br />
                                                                Alnahas Building, 2 AlBahr St,
                                                                <br />
                                                                Tanta AlGharbia, Egypt
                                                                <br />
                                                                301414
                                                            </address>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* My Account View Order ends */}
                <Footer2 />
            </>
        );
    }
}


export default AccViewOrder;