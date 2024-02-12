import React from 'react';
import Header2 from "../components/header/Header2";
import Footer2 from "../components/footer/Footer2";
import { Link } from "react-router-dom";

class AccAddress extends React.Component {
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
                                        <Link to="#">Home</Link>
                                    </li>
                                    <li className="breadcrumb-item active">My Account</li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Intro Heading ends */}
                {/* My Account */}
                <section className="section_padding acc_address">
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
                                                <Link to="/acc-address" className="active">
                                                    Address
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="/acc-order">Order</Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-9">
                                <div className="right_acc_block">
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
                                                    <br />
                                                    contact@webrul.com
                                                    <br />
                                                    +61-1234-5678-90
                                                    <br />
                                                </address>
                                                <div className="action_btn text-center">
                                                    <button type="button" className="btn gray_btn_outline">
                                                        <i className="fa fa-pencil" aria-hidden="true" />
                                                        Edit
                                                    </button>
                                                </div>
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
                                                    <br />
                                                    contact@webrul.com
                                                    <br />
                                                    +61-1234-5678-90
                                                    <br />
                                                </address>
                                                <div className="action_btn text-center">
                                                    <button type="button" className="btn gray_btn_outline">
                                                        <i className="fa fa-pencil" aria-hidden="true" />
                                                        Edit
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* My Account ends */}
                <Footer2 />
            </>
        );
    }
}


export default AccAddress;