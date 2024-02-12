import React from 'react';
import Header2 from "../components/header/Header2";
import Footer2 from "../components/footer/Footer2";
import { Link } from "react-router-dom";

class AccPayMethod extends React.Component {
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
                <div className="section_padding acc_payment">
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
                                                <Link to="/acc-order">Order</Link>
                                            </li>
                                            <li>
                                                <Link to="/acc-pay-method" className="active">
                                                    Payment Methods
                                                </Link>
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
                                    <div className="pay_method">
                                        <form>
                                            <div className="form-check">
                                                <label className="custom-control custom-radio">
                                                    <input
                                                        id="radioStacked1"
                                                        name="radio-stacked"
                                                        type="radio"
                                                        className="custom-control-input"
                                                        defaultChecked=""
                                                    />
                                                    <span className="custom-control-indicator" />
                                                    <span className="custom-control-description">
                  Credit Cards
                </span>
                                                </label>
                                            </div>
                                            <span className="card_img">
              <img
                  src="./assets/images/bank-payment.png"
                  alt="payment"
                  className="pay"
              />
            </span>
                                            <div className="valid_card_info">

                                                You can use the any card number with any CVC and a valid
                                                expiration date.
                                            </div>
                                            <div className="row">
                                                <div className="col-lg-6">
                                                    <div className="form-group">
                                                        <label>Card Number</label>
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            placeholder="•••• •••• •••• ••••"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-lg-4">
                                                    <div className="form-group">
                                                        <label>Expiry (MM/YY)</label>
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            placeholder="MM / YY"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-lg-2">
                                                    <div className="form-group">
                                                        <label>Card Code</label>
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            placeholder="CVC"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="action_btn text-center">
                                                <button type="button" className="btn w-100">
                                                    Add Payment Method
                                                </button>
                                            </div>
                                        </form>
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


export default AccPayMethod;