import React from 'react';
import Header2 from "../components/header/Header2";
import Footer2 from "../components/footer/Footer2";
import { Link } from "react-router-dom";

class AccWishlist extends React.Component {
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
                <div className="section_padding acc_wishlist">
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
                                                <Link to="/acc-wishlist" className="active">
                                                    Wish List
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="/acc-order">Order</Link>
                                            </li>
                                            <li>
                                                <Link to="/acc-pay-method">Payment Methods</Link>
                                            </li>
                                            <li>
                                                <Link to="#">Logout</Link>
                                            </li>
                                            {/*<li><Link to="#">Cart History</Link></li>*/}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-9">
                                <div className="right_acc_block">
                                    <div className="cart_table mr-btm-30">
                                        <div className="table-responsive">
                                            <table className="table table-striped">
                                                <thead className="thead-default">
                                                <tr>
                                                    <th>&nbsp;</th>
                                                    <th>Product</th>
                                                    <th>Name</th>
                                                    <th>Unit Price</th>
                                                    <th>Stock Status</th>
                                                </tr>
                                                </thead>
                                                <tbody>
                                                <tr>
                                                    <td className="product-delet">
                                                        <Link to="#">
                                                            <i className="fa fa-trash-o" aria-hidden="true" />
                                                        </Link>
                                                    </td>
                                                    <td className="product-thumbnail">
                                                        <Link to="/product-detail-1">
                                                            <img
                                                                src="./assets/images/150x150.jpg"
                                                                alt="image"
                                                            />
                                                        </Link>
                                                    </td>
                                                    <td className="product-name">Halter Jumpsuit in Navy</td>
                                                    <td className="unit_price">
                                                        <del>$85.00</del> <span className="price">$75.00</span>
                                                    </td>
                                                    <td className="prd_status">
                                                        <span className="instock">In Stock</span>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className="product-delet">
                                                        <Link to="#">
                                                            <i className="fa fa-trash-o" aria-hidden="true" />
                                                        </Link>
                                                    </td>
                                                    <td className="product-thumbnail">
                                                        <Link to="/product-detail-2">
                                                            <img
                                                                src="./assets/images/150x150.jpg"
                                                                alt="image"
                                                            />
                                                        </Link>
                                                    </td>
                                                    <td className="product-name">Wrist Watches</td>
                                                    <td className="unit_price">
                                                        <del>$185.00</del>
                                                        <span className="price">$160.00</span>
                                                    </td>
                                                    <td className="prd_status">
                                                        <span className="instock">In Stock</span>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className="product-delet">
                                                        <Link to="#">
                                                            <i className="fa fa-trash-o" aria-hidden="true" />
                                                        </Link>
                                                    </td>
                                                    <td className="product-thumbnail">
                                                        <Link to="/product-detail-3">
                                                            <img
                                                                src="./assets/images/150x150.jpg"
                                                                alt="image"
                                                            />
                                                        </Link>
                                                    </td>
                                                    <td className="product-name">Laptop Bag</td>
                                                    <td className="unit_price">
                                                        <del>$95.00</del> <span className="price">$75.00</span>
                                                    </td>
                                                    <td className="prd_status">
                                                        <span className="instock">In Stock</span>
                                                    </td>
                                                </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                    <div className="action_btn text-center">
                                        <button type="button" className="btn">
                                            <i className="fa fa-location-arrow" aria-hidden="true" />
                                            Continue Shopping
                                        </button>
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


export default AccWishlist;