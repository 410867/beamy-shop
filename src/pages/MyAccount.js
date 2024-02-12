import React from 'react';
import Header2 from "../components/header/Header2";
import Footer2 from "../components/footer/Footer2";
import { Link } from "react-router-dom";

class MyAccount extends React.Component {
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
                <div className="section_padding my_account">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3">
                                <div className="module_widget aside_account">
                                    <div className="block_title2">Account</div>
                                    <div className="module_widget_content">
                                        <ul>
                                            <li>
                                                <Link to="/my-account.html" className="active">
                                                    My Account
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="/acc-wishlist.html">Wish List</Link>
                                            </li>
                                            <li>
                                                <Link to="/acc-order.html">Order</Link>
                                            </li>
                                            <li>
                                                <Link to="/acc-pay-method.html">Payment Methods</Link>
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
                                    <div className="welcome_text">
                                        Hello, <span className="user_name">Matt Higgins!</span>
                                        <p>To update your account information.</p>
                                    </div>
                                    <form>
                                        {/* Personal Detail */}
                                        <div className="card card_panel">
                                            <div className="card-header">Personal Details</div>
                                            <div className="card-body">
                                                <div className="row">
                                                    <div className="col-lg-6">
                                                        <div className="form-group">
                                                            <label>First Name</label>
                                                            <input className="form-control" type="text" />
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-6">
                                                        <div className="form-group">
                                                            <label>Last Name</label>
                                                            <input className="form-control" type="text" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-lg-12">
                                                        <div className="form-group">
                                                            <label>E-Mail</label>
                                                            <input className="form-control" type="text" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* Change Password */}
                                        <div className="card card_panel">
                                            <div className="card-header">Change Password</div>
                                            <div className="card-body">
                                                <div className="row">
                                                    <div className="col-lg-6">
                                                        <div className="form-group">
                                                            <label>Old Password</label>
                                                            <input className="form-control" type="password" />
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-6">
                                                        <div className="form-group">
                                                            <label>New Password</label>
                                                            <input className="form-control" type="password" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-lg-12">
                                                        <div className="form-group">
                                                            <label>Confirm New Password</label>
                                                            <input className="form-control" type="password" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* Action Buttons */}
                                        <div className="action_btn text-center">
                                            <button type="button" className="btn gray_btn_outline">
                                                Reset
                                            </button>
                                            <button type="button" className="btn">
                                                Save Change
                                            </button>
                                        </div>
                                    </form>
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


export default MyAccount;