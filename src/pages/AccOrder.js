import React from 'react';
import Header2 from "../components/header/Header2";
import Footer2 from "../components/footer/Footer2";
import { Link } from "react-router-dom";

class AccOrder extends React.Component {
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
                                    <div className="cart_table acc_order_table">
                                        <div className="table-responsive">
                                            <table className="table table-striped">
                                                <thead className="thead-default">
                                                <tr>
                                                    <th>Order ID</th>
                                                    <th>Date</th>
                                                    <th>Status</th>
                                                    <th>Total</th>
                                                    <th className="text-center">Track Order</th>
                                                    <th>&nbsp;</th>
                                                </tr>
                                                </thead>
                                                <tbody>
                                                <tr>
                                                    <td>
                                                        <Link to="/acc-view-order">#512025</Link>
                                                    </td>
                                                    <td>Aug 25, 2021</td>
                                                    <td>On hold</td>
                                                    <td>$310.00 for 3 items</td>
                                                    <td className="text-center">
                                                        <Link
                                                            className="btn outline small_btn"
                                                            to="/acc-order-track"
                                                        >
                                                            <i className="fa fa-truck" aria-hidden="true" />
                                                        </Link>
                                                    </td>
                                                    <td>
                                                        <Link className="btn small_btn" to="/acc-view-order">
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
                {/* My Account ends */}
                <Footer2 />
            </>
        );
    }
}


export default AccOrder;