import React from 'react';
import Header2 from "../components/header/Header2";
import Footer2 from "../components/footer/Footer2";
import { Link } from "react-router-dom";

class Cart extends React.Component {
    render() {
        return (
            <>
                <Header2 />
                {/* Intro Heading */}
                <section className="section_padding gray_bg intro_heading">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <h1>Cart Detail</h1>
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item">
                                        <Link to="/">Home</Link>
                                    </li>
                                    <li className="breadcrumb-item">
                                        <Link to="/product">Product</Link>
                                    </li>
                                    <li className="breadcrumb-item active">Cart</li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Intro Heading ends */}
                {/* Cart Detail */}
                <section className="section_padding cart_detail">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
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
                                                    <Link to="/product-detail-1">
                                                        <img
                                                            src="./assets/images/150x150.jpg"
                                                            alt="image"
                                                        />
                                                    </Link>
                                                </td>
                                                <td className="product-name">Halter Jumpsuit in Navy</td>
                                                <td className="cart_product-price"> $75.00</td>
                                                <td>
                                                    <div className="quantity">
                                                        <form>
                                                            <div className="product-quantity">
                                                                <button className="qtyminus">-</button>
                                                                <input
                                                                    type="text"
                                                                    name="quantity"
                                                                    defaultValue={1}
                                                                    className="qty form-control"
                                                                />
                                                                <button className="qtyplus">+</button>
                                                            </div>
                                                        </form>
                                                    </div>
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
                                                    <Link to="/product-detail-2">
                                                        <img
                                                            src="./assets/images/150x150.jpg"
                                                            alt="image"
                                                        />
                                                    </Link>
                                                </td>
                                                <td className="product-name">Wrist Watches</td>
                                                <td className="cart_product-price">$160.00</td>
                                                <td>
                                                    <div className="quantity">
                                                        <form>
                                                            <div className="product-quantity">
                                                                <button className="qtyminus">-</button>
                                                                <input
                                                                    type="text"
                                                                    name="quantity"
                                                                    defaultValue={1}
                                                                    className="qty form-control"
                                                                />
                                                                <button className="qtyplus">+</button>
                                                            </div>
                                                        </form>
                                                    </div>
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
                                                    <Link to="/product-detail-3">
                                                        <img
                                                            src="./assets/images/150x150.jpg"
                                                            alt="image"
                                                        />
                                                    </Link>
                                                </td>
                                                <td className="product-name">Laptop Bag</td>
                                                <td className="cart_product-price"> $75.00</td>
                                                <td>
                                                    <div className="quantity">
                                                        <form>
                                                            <div className="product-quantity">
                                                                <button className="qtyminus">-</button>
                                                                <input
                                                                    type="text"
                                                                    name="quantity"
                                                                    defaultValue={1}
                                                                    className="qty form-control"
                                                                />
                                                                <button className="qtyplus">+</button>
                                                            </div>
                                                        </form>
                                                    </div>
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
                                <div className="cart_btn_subtotal">
                                    <div className="row">
                                        <div className="col-lg-6 order-lg-6">
                                            <div className="cart_final_total text-right">
                                                <span>SUB TOTAL:</span>$310.00
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            
                                            <Link to="/product" className="btn outline">
                                                <i className="fa fa-location-arrow" aria-hidden="true" />
                                                Continue Shopping
                                            </Link>
                                            <Link to="#" className="btn">
                                                <i className="fa fa-opencart" aria-hidden="true" /> Update
                                                Cart
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="gray_bg padding_4x4_30 apply_subtotal">
                                    <div className="row">
                                        <div className="col-lg-4 coupan_code">
                                            <h6>Coupon Code</h6>
                                            <form>
                                                <div className="form-group">
                                                    <input
                                                        type="text"
                                                        placeholder="Enter Coupon Code"
                                                        className="form-control"
                                                    />
                                                </div>
                                                <button className="btn outline" type="submit">
                                                    Apply
                                                </button>
                                            </form>
                                        </div>
                                        <div className="col-lg-4 availability">
                                            <h6>Check Availability</h6>
                                            <form>
                                                <div className="form-group">
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        placeholder="Enter Pin Code"
                                                    />
                                                </div>
                                                <button className="btn outline" type="submit">
                                                    Check
                                                </button>
                                            </form>
                                        </div>
                                        <div className="col-lg-4 total_final_checkout">
                                            <ul className="list-style-none">
                                                <li>
                                                    
                                                    <span className="pull-left">Shipping Cost:</span>
                                                    <span className="pull-right">
                      <strong>$0.00</strong>
                    </span>
                                                </li>
                                                <li>
                                                    
                                                    <span className="pull-left">Coupon Off:</span>
                                                    <span className="pull-right">
                      <strong>$0.00</strong>
                    </span>
                                                </li>
                                                <li>
                                                    
                                                    <span className="pull-left">Taxes:</span>
                                                    <span className="pull-right">
                      <strong>$0.00</strong>
                    </span>
                                                </li>
                                            </ul>
                                            <div className="product-subtotal">
                                                
                                                <span className="pull-left">TOTAL:</span>
                                                <span className="pull-right">$310.00</span>
                                            </div>
                                            <button className="btn w-100" type="submit">
                                                Proceed To Checkout
                                            </button>
                                        </div>
                                    </div>
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


export default Cart;

