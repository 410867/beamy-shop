import React from 'react';
import Header2 from "../components/header/Header2";
import Footer2 from "../components/footer/Footer2";
import { Link } from "react-router-dom";

class AccOrderDetail extends React.Component {
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
                {/* Intro Heading Ends */}
                {/* My Account */}
                <div className="section_padding acc_orders">
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
                                                <Link to="/acc-address">Address</Link>
                                            </li>
                                            <li>
                                                <Link to="/acc-order" className="active">
                                                    Order
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-9">
                                <div className="right_acc_block">
                                    <div className="cart_table acc_order_table">
                                        <div className="table-responsive">
                                            <table className="table table-striped">
                                                <thead className="thead-default">
                                                <tr>
                                                    <th>Product</th>
                                                    <th>Name</th>
                                                    <th>Order ID</th>
                                                    <th>Status</th>
                                                    <th>Price</th>
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
                                                    <td className="product-name">
                                                        <ul className="list-style-none">
                                                            <li>Halter Jumpsuit in Navy</li>
                                                            <li>
                                                                Quantity: <strong>1</strong>
                                                            </li>
                                                        </ul>
                                                    </td>
                                                    <td>#512025</td>
                                                    <td>On hold</td>
                                                    <td className="unit_price">
                                                        <span className="price">$75.00</span>
                                                    </td>
                                                    <td>
                                                        <Link
                                                            className="btn small_btn"
                                                            to="/product-detail-1"
                                                        >
                                                            <i className="fa fa-eye" />
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
                                                    <td className="product-name">
                                                        <ul className="list-style-none">
                                                            <li>Wrist Watches</li>
                                                            <li>
                                                                Quantity: <strong>1</strong>
                                                            </li>
                                                        </ul>
                                                    </td>
                                                    <td>#514525</td>
                                                    <td>
                                                        <span className="instock">Shipped</span>
                                                    </td>
                                                    <td className="unit_price">
                                                        <span className="price">$160.00</span>
                                                    </td>
                                                    <td>
                                                        <Link
                                                            className="btn small_btn"
                                                            to="/product-detail-2"
                                                        >
                                                            <i className="fa fa-eye" />
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
                                                    <td className="product-name">
                                                        <ul className="list-style-none">
                                                            <li>Laptop Bag</li>
                                                            <li>
                                                                Quantity: <strong>1</strong>
                                                            </li>
                                                        </ul>
                                                    </td>
                                                    <td>#514555</td>
                                                    <td>
                                                        <span className="instock">Shipped</span>
                                                    </td>
                                                    <td className="unit_price">
                                                        <span className="price">$75.00</span>
                                                    </td>
                                                    <td>
                                                        <Link
                                                            className="btn small_btn"
                                                            to="/product-detail-3"
                                                        >
                                                            <i className="fa fa-eye" />
                                                        </Link>
                                                    </td>
                                                </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* My Account Ends */}
                <Footer2 />
            </>
        );
    }
}


export default AccOrderDetail;