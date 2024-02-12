import React from 'react';
import { Link } from "react-router-dom";

class Footer1 extends React.Component {
    render() {
        return (
            <>
                <footer className="footer footer_style1">
                    <div className="footer_top gray_bg section_padding">
                        <div className="container">
                            <div className="row">
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
                                                <Link to="/checkout.html">Checkout</Link>
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
                                                <Link to="/checkout.html">Checkout</Link>
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
                                                <Link to="/checkout.html">Checkout</Link>
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
                                                <Link to="/checkout.html">Checkout</Link>
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
                            </div>
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="space-60"/>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="pay_method">
                                        <h6>Payment Method :</h6>
                                        <figure className="figure">
                                            <img
                                                src="./assets/images/payment_options.png"
                                                alt="image"
                                            />
                                        </figure>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="getin_touch">
                                        <h6>Get in touch :</h6>
                                        <div className="getin_touch_contact">
                                            <span>
                                                <a href="mailto:hello@webrul.com">hello@weburl.com</a>
                                            </span>
                                            <span>+61-1234-5678-09</span>
                                            <ul className="social_group_style">
                                                <li>
                                                    <Link to="#">
                                                        <i className="fab fa-facebook-f" aria-hidden="true"/>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to="#">
                                                        <i className="fab fa-twitter" aria-hidden="true" />
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to="#">
                                                        <i className="fab fa-linkedin" aria-hidden="true" />
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to="#">
                                                        <i className="fab fa-pinterest-p" aria-hidden="true" />
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to="#">
                                                        <i className="fab fa-instagram" aria-hidden="true" />
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="space-60"/>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-4">
                                    <div className="ship_service_column">
                                        <Link to="#">
                                            <div className="ship_service_column_inner">

                                                <i className="fa fa-usd" aria-hidden="true"/> 100% Money Back
                                                Guarantee
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="ship_service_column">
                                        <Link to="#">
                                            <div className="ship_service_column_inner">

                                                <i className="fa fa-truck" aria-hidden="true"/> Free Shipping
                                                Over 1000$
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="ship_service_column">
                                        <Link to="#">
                                            <div className="ship_service_column_inner">

                                                <i className="fa fa-clock-o" aria-hidden="true"/> 24/7 Customer
                                                Service
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="space-60"/>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="disclamer">
                                        <h6>Disclaimer :</h6>
                                        <p>
                                            Lorem Ipsum is simply dummy text of the printing and typesetting
                                            industry. Lorem Ipsum has been the industry's standard dummy text
                                            ever since the 1500s, when an unknown printer took a galley of
                                            type and scrambled it to make a type specimen book. It has
                                            survived not only five centuries, but also the leap into
                                            electronic typesetting, remaining essentially unchanged. It was
                                            popularised in the 1960s with the release of Letraset sheets
                                            containing Lorem Ipsum passages, and more recently with desktop
                                            publishing software like Aldus PageMaker including versions of
                                            Lorem Ipsum.
                                        </p>
                                        <p>
                                            Lorem Ipsum is simply dummy text of the printing and typesetting
                                            industry. Lorem Ipsum has been the industry's standard dummy text
                                            ever since the 1500s, when an unknown printer took a galley of
                                            type and scrambled it to make a type specimen book.
                                        </p>
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
            </>
        );
    }
}


export default Footer1;