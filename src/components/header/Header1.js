import React from 'react';
import { Link } from "react-router-dom";

class Header1 extends React.Component {
    render() {
        return (
            <>
                {/* Header */}
                <header className="header header_style1">
                    <div className="secondary_bg top_bar">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-4 col-md-4">
                                    <div className="top_left_menu">
                                        <ul>
                                            <li><Link to="/contact-2">Contact</Link></li>
                                            <li className="divider_line">/</li>
                                            <li><Link to="#">Download App</Link></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-lg-8 col-md-8">
                                    <div className="top_right_menu pull-right">
                                        <ul className="cart_wishlist">
                                            <li>
                                                <Link to="/wishlist">Wishlist <span className="wish_item">(0)</span></Link>
                                            </li>
                                            <li className="divider_line">/</li>
                                            <li>
                                                <Link to="#" id="cart-item-bar">
                                                    3 items <span className="item_price">| $310.00</span>
                                                </Link>
                                                <div className="cart_header_widget">
                                                    <div className="cart_item_close">
                                                        <i className="fa fa-close" /> Close
                                                    </div>
                                                    <h5>Cart</h5>
                                                    <ul>
                                                        <li>
                                                            <figure>
                                                                <img src="./assets/images/150x150.jpg" alt="image" />
                                                            </figure>
                                                            <Link to="#" className="title_product">
                                                                Halter Jumpsuit
                                                            </Link>
                                                            <span className="quantity">Quantity - 1</span>
                                                            <p className="price">$75.00</p>
                                                            <Link className="delete_icon" to="#">
                                                                <i className="fa fa-trash-o" aria-hidden="true" />
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <figure>
                                                                <img src="./assets/images/150x150.jpg" alt="image" />
                                                            </figure>
                                                            <Link to="#" className="title_product">
                                                                Wrist Watches
                                                            </Link>
                                                            <span className="quantity">Quantity - 1</span>
                                                            <p className="price">$160.00</p>
                                                            <Link className="delete_icon" to="#">
                                                                <i className="fa fa-trash-o" aria-hidden="true" />
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <figure>
                                                                <img src="./assets/images/150x150.jpg" alt="image" />
                                                            </figure>
                                                            <Link to="#" className="title_product">
                                                                Laptop Bag
                                                            </Link>
                                                            <span className="quantity">Quantity - 1</span>
                                                            <p className="price">$75.00</p>
                                                            <Link className="delete_icon" to="#">
                                                                <i className="fa fa-trash-o" aria-hidden="true" />
                                                            </Link>
                                                        </li>
                                                    </ul>
                                                    <div className="mini_cart_total">
                                                        <strong>Subtotal:</strong>
                                                        <span className="price_amount">$310.00</span>
                                                    </div>
                                                    <div className="mini_cart_btns">
                                                        <Link to="/cart" className="btn btn-sm">View Cart</Link>
                                                        <Link to="/checkout" className="btn btn-sm outline">Checkout</Link>
                                                    </div>
                                                    <div className="no_product_cart" style={{ display: "none" }}>
                                                        <i className="fa fa-frown-o" aria-hidden="true" />
                                                        <h6>Sorry</h6>
                                                        <p>No products in the cart</p>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                        <ul className="login_register">
                                            <li>
                                                <Link
                                                    to="#"
                                                    data-bs-toggle="modal"
                                                    data-bs-target="#login_register"
                                                >
                                                    Login
                                                </Link>
                                            </li>
                                            <li className="divider_line">/</li>
                                            <li>
                                                <Link
                                                    to="#"
                                                    data-bs-toggle="modal"
                                                    data-bs-target="#login_register"
                                                >

                                                    Register
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="top_menu">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-8">
                                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                                        <div className="logo">
                                            <Link className="navbar-brand" to="/">
                                                <img src="./assets/images/logo.png" alt="image" />
                                            </Link>
                                        </div>
                                        <button
                                            className="navbar-toggler"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#navbarSupportedContent"
                                            aria-controls="navbarSupportedContent"
                                            aria-expanded="false"
                                            aria-label="Toggle navigation"
                                        >

                                            <span className="navbar-toggler-icon" />
                                        </button>
                                        <div
                                            className="collapse navbar-collapse"
                                            id="navbarSupportedContent"
                                        >
                                            <ul className="navbar-nav mr-auto">
                                                <li className="nav-item dropdown active">
                                                    <Link
                                                        className="nav-link dropdown-toggle"
                                                        to="#"
                                                        id="navbarDropdownMenuHome"
                                                        data-bs-toggle="dropdown"
                                                        aria-haspopup="true"
                                                        aria-expanded="false"
                                                    >
                                                        Home
                                                    </Link>
                                                    <span className="arrow" />
                                                    <div
                                                        className="dropdown-menu"
                                                        aria-labelledby="navbarDropdownMenuHome"
                                                    >
                                                        <ul>
                                                            <li>
                                                                <Link className="dropdown-item" to="/">
                                                                    Home Page 1
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link className="dropdown-item" to="/home-2">
                                                                    Home Page 2
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link className="dropdown-item" to="/home-3">
                                                                    Home Page 3
                                                                </Link>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </li>
                                                <li className="nav-item dropdown">
                                                    <Link
                                                        className="nav-link dropdown-toggle"
                                                        to="#"
                                                        id="navbarDropdownMenuShop"
                                                        data-bs-toggle="dropdown"
                                                        aria-haspopup="true"
                                                        aria-expanded="false"
                                                    >
                                                        Shop
                                                    </Link>
                                                    <span className="arrow" />
                                                    <div
                                                        className="dropdown-menu"
                                                        aria-labelledby="navbarDropdownMenuShop"
                                                    >
                                                        <ul>
                                                            <li>
                                                                <Link className="dropdown-item" to="/product">Mens</Link>
                                                            </li>
                                                            <li>
                                                                <Link className="dropdown-item" to="/product">Womens</Link>
                                                            </li>
                                                            <li>
                                                                <Link className="dropdown-item" to="/product">Kids</Link>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </li>
                                                <li className="nav-item dropdown">
                                                    <Link
                                                        className="nav-link dropdown-toggle"
                                                        to="#"
                                                        id="navbarDropdownMenuPage"
                                                        data-bs-toggle="dropdown"
                                                        aria-haspopup="true"
                                                        aria-expanded="false"
                                                    >
                                                        Pages
                                                    </Link>
                                                    <span className="arrow" />
                                                    <div
                                                        className="dropdown-menu"
                                                        aria-labelledby="navbarDropdownMenuPage"
                                                    >
                                                        <ul>
                                                            <li>
                                                                <Link className="dropdown-item" to="/product">
                                                                    Products
                                                                </Link>
                                                            </li>
                                                            <li className="dropdown dropdown-sub_menu">
                                                                <Link
                                                                    className="dropdown-item dropdown-toggle"
                                                                    to="#"
                                                                    data-bs-toggle="dropdown"
                                                                >
                                                                    Product Detail
                                                                </Link>
                                                                <span className="arrow" />
                                                                <div
                                                                    className="dropdown-menu"
                                                                    aria-labelledby="navbarDropdownMenuShop"
                                                                >
                                                                    <ul>
                                                                        <li>
                                                                            <Link
                                                                                className="dropdown-item"
                                                                                to="/product-detail-1"
                                                                            >
                                                                                Product Detail 1
                                                                            </Link>
                                                                        </li>
                                                                        <li>
                                                                            <Link
                                                                                className="dropdown-item"
                                                                                to="/product-detail-2"
                                                                            >
                                                                                Product Detail 2
                                                                            </Link>
                                                                        </li>
                                                                        <li>
                                                                            <Link
                                                                                className="dropdown-item"
                                                                                to="/product-detail-3"
                                                                            >
                                                                                Product Detail 3
                                                                            </Link>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </li>
                                                            <li className="dropdown dropdown-sub_menu">
                                                                <Link
                                                                    className="dropdown-item dropdown-toggle"
                                                                    to="#"
                                                                    data-bs-toggle="dropdown"
                                                                >
                                                                    About Us
                                                                </Link>
                                                                <span className="arrow" />
                                                                <div
                                                                    className="dropdown-menu"
                                                                    aria-labelledby="navbarDropdownMenuShop"
                                                                >
                                                                    <ul>
                                                                        <li>
                                                                            <Link
                                                                                className="dropdown-item"
                                                                                to="/about-us-1"
                                                                            >
                                                                                About Us 1
                                                                            </Link>
                                                                        </li>
                                                                        <li>
                                                                            <Link
                                                                                className="dropdown-item"
                                                                                to="/about-us-2"
                                                                            >
                                                                                About Us 2
                                                                            </Link>
                                                                        </li>
                                                                        <li>
                                                                            <Link
                                                                                className="dropdown-item"
                                                                                to="/about-us-3"
                                                                            >
                                                                                About Us 3
                                                                            </Link>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </li>
                                                            <li className="dropdown">
                                                                <Link className="dropdown-item" to="/checkout">
                                                                    Checkout
                                                                </Link>
                                                            </li>
                                                            <li className="dropdown dropdown-sub_menu">
                                                                <Link
                                                                    className="dropdown-item dropdown-toggle"
                                                                    to="#"
                                                                    data-bs-toggle="dropdown"
                                                                >
                                                                    Contact Us
                                                                </Link>
                                                                <span className="arrow" />
                                                                <div
                                                                    className="dropdown-menu"
                                                                    aria-labelledby="navbarDropdownMenuShop"
                                                                >
                                                                    <ul>
                                                                        <li>
                                                                            <Link
                                                                                className="dropdown-item"
                                                                                to="/contact-1"
                                                                            >
                                                                                Contact Us 1
                                                                            </Link>
                                                                        </li>
                                                                        <li>
                                                                            <Link
                                                                                className="dropdown-item"
                                                                                to="/contact-2"
                                                                            >
                                                                                Contact Us 2
                                                                            </Link>
                                                                        </li>
                                                                        <li>
                                                                            <Link
                                                                                className="dropdown-item"
                                                                                to="/contact-3"
                                                                            >
                                                                                Contact Us 3
                                                                            </Link>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </li>
                                                <li className="nav-item dropdown">
                                                    <Link
                                                        className="nav-link dropdown-toggle"
                                                        to="#"
                                                        id="navbarDropdownMenuBlog"
                                                        data-bs-toggle="dropdown"
                                                        aria-haspopup="true"
                                                        aria-expanded="false"
                                                    >
                                                        Blog
                                                    </Link>
                                                    <span className="arrow" />
                                                    <div
                                                        className="dropdown-menu"
                                                        aria-labelledby="navbarDropdownMenuBlog"
                                                    >
                                                        <ul>
                                                            <li>
                                                                <Link className="dropdown-item" to="/blog-detail">
                                                                    Detail View
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link className="dropdown-item" to="/blog-grid">
                                                                    Grid View
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link
                                                                    className="dropdown-item"
                                                                    to="/blog-grid-large"
                                                                >
                                                                    Grid Large View
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link
                                                                    className="dropdown-item"
                                                                    to="/blog-grid-left"
                                                                >
                                                                    Grid Left View
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link
                                                                    className="dropdown-item"
                                                                    to="/blog-grid-right"
                                                                >
                                                                    Grid Right View
                                                                </Link>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </nav>
                                </div>
                                <div className="col-lg-4">
                                    <div className="top_search">
                                        <form>
                                            <div className="form-group">
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Search"
                                                />
                                                <button type="submit" className="btn search-btn">
                                                    <i className="fa fa-search" aria-hidden="true" />
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
                {/* Header ends */}
            </>
        );
    }
}


export default Header1;