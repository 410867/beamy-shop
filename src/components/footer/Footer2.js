import React from 'react';
import { Link } from "react-router-dom";

class Footer2 extends React.Component {
    render() {
        return (
            <>
                {/* Footer */}
                <footer className="footer footer_style2">
                    <div className="footer_top secondary_bg section_padding">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-3">
                                    <div className="footer_logo">
                                        <Link to="/">
                                            <img
                                                src="./assets/images/logo_white.png"
                                                alt="image"
                                            />
                                        </Link>
                                    </div>
                                    <p>
                                        Lorem Ipsum is simply dummy text of the printing and typesetting
                                        industry. Lorem Ipsum has been the industry's standard dummy text
                                        ever since the 1500s, when an unknown printer took a galley of
                                        type and scrambled it to make.
                                    </p>
                                </div>
                                <div className="col-lg-3">
                                    <nav>
                                        <h6>My Account</h6>
                                        <ul>
                                            <li>
                                                <Link to="/acc-order">My orders</Link>
                                            </li>
                                            <li>
                                                <Link to="#">Returns</Link>
                                            </li>
                                            <li>
                                                <Link to="/acc-order-detail">Order History</Link>
                                            </li>
                                            <li>
                                                <Link to="/acc-wishlist">Wishlist</Link>
                                            </li>
                                            <li>
                                                <Link to="/checkout">Checkout</Link>
                                            </li>
                                            <li>
                                                <Link to="/my-account">My Account</Link>
                                            </li>
                                            <li>
                                                <Link to="#">Unsubscribe Notification</Link>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                                <div className="col-lg-3">
                                    <nav>
                                        <h6>Customer Service</h6>
                                        <ul>
                                            <li>
                                                <Link to="/acc-order">My orders</Link>
                                            </li>
                                            <li>
                                                <Link to="#">Returns</Link>
                                            </li>
                                            <li>
                                                <Link to="/acc-order-detail">Order History</Link>
                                            </li>
                                            <li>
                                                <Link to="/acc-wishlist">Wishlist</Link>
                                            </li>
                                            <li>
                                                <Link to="/checkout">Checkout</Link>
                                            </li>
                                            <li>
                                                <Link to="/my-account">My Account</Link>
                                            </li>
                                            <li>
                                                <Link to="#">Unsubscribe Notification</Link>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                                <div className="col-lg-3">
                                    <div className="footer_newsletter">
                                        <h6>Newsletter</h6>
                                        <p>Sign up for our newsletter to get up-to-date from us</p>
                                        <form>
                                            <div className="form-group">
                                                <input
                                                    type="text"
                                                    placeholder="Name"
                                                    className="form-control"
                                                />
                                            </div>
                                            <div className="form-group">
                                                <input
                                                    type="text"
                                                    placeholder="Email Address"
                                                    className="form-control"
                                                />
                                            </div>
                                            <button type="submit" className="btn w-100">
                                            Subscribe
                                            </button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="space-60" />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-4">
                                    <div className="footer_gray_bg footer_social">
                                        <div className="content_center">
                                            <ul className="social_group_style">
                                                <li>
                                                    <Link to="#">
                                                        <i className="fab fa-facebook-square" aria-hidden="true" />
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to="#">
                                                        <i className="fab fa-linkedin-square" aria-hidden="true" />
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to="#">
                                                        <i className="fab fa-twitter-square" aria-hidden="true" />
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to="#">
                                                        <i className="fab fa-pinterest-square" aria-hidden="true" />
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="pay_method footer_gray_bg">
                                        <div className="content_center">
                                            <figure className="figure">
                                                <img src="./assets/images/payment_options.png" alt="image" />
                                            </figure>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="footer_gray_bg footer_web">
                                        <div className="content_center">
                                            <span>
                                                <Link to="mailto:hello@webrul.com">hello@weburl.com</Link>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="footer_bottom">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-6">
                                    <p>© Home1 2021. All right reserved.</p>
                                </div>
                                <div className="col-lg-6">
                                    <ul className="footer_link pull-right">
                                        <li>
                                            <Link to="/privacy-policy">Returns Policy</Link>
                                        </li>
                                        <li className="divider_line">/</li>
                                        <li>
                                            <Link to="/terms-conditions">Terms of use</Link>
                                        </li>
                                        <li className="divider_line">/</li>
                                        <li>
                                            <Link to="/privacy-policy">Privacy</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
                {/* Footer ends */}
            </>
        );
    }
}


export default Footer2;