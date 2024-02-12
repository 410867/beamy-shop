import React from 'react';
import Header2 from "../components/header/Header2";
import Footer2 from "../components/footer/Footer2";
import { Link } from "react-router-dom";

class Product extends React.Component {
    render() {
        return (
            <>
                <Header2 />
                {/* Intro Banner */}
                <div className="section_padding_small product_banner">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <figure className="mb-0">
                                    <img src="./assets/images/1141x257.jpg" alt="image" />
                                </figure>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Intro Banner End */}
                {/* Productes Sections */}
                <div className="section_padding_small pt-0 product_sections">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3">
                                {/* Aside Left */}
                                <aside>
                                    <div className="module_widget module_cat">
                                        <h4>Filter By Categories</h4>
                                        <div className="module_widget_content">
                                            <ul>
                                                <li>
                                                    <Link to="#">Accessories</Link>
                                                    <span>(200)</span>
                                                </li>
                                                <li>
                                                    <Link to="#">Bags</Link> <span>(150)</span>
                                                </li>
                                                <li>
                                                    <Link to="#">Beauty</Link> <span>(50)</span>
                                                </li>
                                                <li>
                                                    <Link to="#">Clothing</Link> <span>(45)</span>
                                                </li>
                                                <li>
                                                    <Link to="#">Fashion </Link>
                                                    <span>(35)</span>
                                                </li>
                                                <li>
                                                    <Link to="#">Furniture</Link>
                                                    <span>(20)</span>
                                                </li>
                                                <li>
                                                    <Link to="#">Gifl Specail</Link>
                                                    <span>(125)</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="module_widget module_filter">
                                        <h4>Filter By Price</h4>
                                        <div className="module_widget_content">
                                            <div className="price_range_slider">
                                                <figure className="mb-0">
                                                    <img
                                                        src="./assets/images/price_range.jpg"
                                                        alt="image"
                                                    />
                                                </figure>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="module_widget module_products">
                                        <h4>Recent Products</h4>
                                        <div className="module_widget_content">
                                            <ul className="product_list">
                                                <li>
                                                    <Link to="#" className="thumb">
                                                        <figure>
                                                            <img
                                                                src="./assets/images/150x150.jpg"
                                                                alt="image"
                                                            />
                                                        </figure>
                                                    </Link>
                                                    <h6>
                                                        <Link to="#">Laptop Bag</Link>
                                                    </h6>
                                                    <p className="price">
                                                        <del>$75.00</del> $65.00
                                                    </p>
                                                </li>
                                                <li>
                                                    <Link to="#" className="thumb">
                                                        <figure>
                                                            <img
                                                                src="./assets/images/150x150.jpg"
                                                                alt="image"
                                                            />
                                                        </figure>
                                                    </Link>
                                                    <h6>
                                                        <Link to="#">Wrist Watchest</Link>
                                                    </h6>
                                                    <p className="price">
                                                        <del>$95.00</del> $85.00
                                                    </p>
                                                </li>
                                                <li>
                                                    <Link to="#" className="thumb">
                                                        <figure>
                                                            <img
                                                                src="./assets/images/150x150.jpg"
                                                                alt="image"
                                                            />
                                                        </figure>
                                                    </Link>
                                                    <h6>
                                                        <Link to="#">Halter Jumpsuit</Link>
                                                    </h6>
                                                    <p className="price">
                                                        <del>$82.00</del> $75.00
                                                    </p>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </aside>
                            </div>
                            <div className="col-lg-9">
                                <div className="product_panel">
                                    <div className="product_heading">
                                        <div className="row">
                                            <div className="col-lg-9">
                                                <ol className="breadcrumb">
                                                    <li className="breadcrumb-item">
                                                        <Link to="#">Home</Link>
                                                    </li>
                                                    <li className="breadcrumb-item">
                                                        <Link to="#">Clothing</Link>
                                                    </li>
                                                    <li className="breadcrumb-item active">Women's Clothing</li>
                                                </ol>
                                                <h4>
                                                    Womens Dresses
                                                    <small>(Showing 1 - 40 products of 24,000 products)</small>
                                                </h4>
                                            </div>
                                            <div className="col-lg-3">
                                                <div className="list_grid_btns">

                                                    <Link to="#" id="grid" className="active">

                                                        <i className="fa fa-th" aria-hidden="true" />
                                                    </Link>
                                                    <Link to="#" id="list">

                                                        <i className="fa fa-bars" aria-hidden="true" />
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div id="products" className="row list-view">
                                        <div className="item col-lg-4 col-md-4 col-sm-4 grid-group-view">
                                            <div className="product-column">
                                                <div className="product-column-pic">
                                                    <Link to="#" className="product_thumb">
                                                        <img
                                                            src="./assets/images/400x600.jpg"
                                                            alt="image"
                                                        />
                                                    </Link>
                                                    <div className="product-buttons">
                                                        <ul>
                                                            <li>
                                                                <Link to="#">
                                                                    <i className="fab fa-opencart" aria-hidden="true" />
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link to="#">
                                                                    <i className="fa fa-eye" aria-hidden="true" />
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link to="#">
                                                                    <i className="fa fa-heart-o" aria-hidden="true" />
                                                                </Link>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className="list_quick_view">

                                                        <Link to="#">
                                                            <i className="fa fa-eye" aria-hidden="true" />
                                                            Quick View
                                                        </Link>
                                                    </div>
                                                </div>
                                                <div className="product-column-info">
                                                    <h6>
                                                        <Link to="#">Palakh Embroidered Kurta</Link>
                                                    </h6>
                                                    <div className="rating_center">
                                                        <div className="star-rating">

                                                            <span style={{ width: "60%" }} />
                                                        </div>
                                                    </div>
                                                    <p className="price"> $75.00</p>
                                                    <div className="product_column_text">
                                                        <p>
                                                            At vero eos et accusamus et iusto odio dignissimos
                                                            ducimus qui blanditiis praesentium voluptatum deleniti
                                                            atque corrupti quos dolores et quas molestias excepturi
                                                            sint occaecati cupiditate non provident.
                                                        </p>
                                                        <div className="action_btn">

                                                            <Link to="#" className="btn addtocart">
                                                                <i className="fab fa-opencart" aria-hidden="true" />
                                                                Add to Cart
                                                            </Link>
                                                            <Link to="#" className="addtowishlist">
                                                                <i className="fa fa-heart-o" aria-hidden="true" /> Add
                                                                to Wishlist
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="divider" />
                                        </div>
                                        <div className="item col-lg-4 col-md-4 col-sm-4 grid-group-view">
                                            <div className="product-column">
                                                <div className="product-column-pic">
                                                    <Link to="#" className="product_thumb">
                                                        <img
                                                            src="./assets/images/400x600.jpg"
                                                            alt="image"
                                                        />
                                                    </Link>
                                                    <div className="off">-20%</div>
                                                    <div className="product-buttons">
                                                        <ul>
                                                            <li>
                                                                <Link to="#">
                                                                    <i className="fab fa-opencart" aria-hidden="true" />
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link to="#">
                                                                    <i className="fa fa-eye" aria-hidden="true" />
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link to="#">
                                                                    <i className="fa fa-heart-o" aria-hidden="true" />
                                                                </Link>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className="list_quick_view">

                                                        <Link to="#">
                                                            <i className="fa fa-eye" aria-hidden="true" />
                                                            Quick View
                                                        </Link>
                                                    </div>
                                                </div>
                                                <div className="product-column-info">
                                                    <h6>
                                                        <Link to="#">Brocade Motif Kurta</Link>
                                                    </h6>
                                                    <div className="rating_center">
                                                        <div className="star-rating">

                                                            <span style={{ width: "60%" }} />
                                                        </div>
                                                    </div>
                                                    <p className="price">
                                                        <del>$80.00</del> $70.00
                                                    </p>
                                                    <div className="product_column_text">
                                                        <p>
                                                            At vero eos et accusamus et iusto odio dignissimos
                                                            ducimus qui blanditiis praesentium voluptatum deleniti
                                                            atque corrupti quos dolores et quas molestias excepturi
                                                            sint occaecati cupiditate non provident.
                                                        </p>
                                                        <div className="action_btn">

                                                            <Link to="#" className="btn addtocart">
                                                                <i className="fab fa-opencart" aria-hidden="true" />
                                                                Add to Cart
                                                            </Link>
                                                            <Link to="#" className="btn white_btn addtowishlist">
                                                                <i className="fa fa-heart-o" aria-hidden="true" /> Add
                                                                to Wishlist
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="divider" />
                                        </div>
                                        <div className="item col-lg-4 col-md-4 col-sm-4 grid-group-view">
                                            <div className="product-column">
                                                <div className="product-column-pic">
                                                    <Link to="#" className="product_thumb">
                                                        <img
                                                            src="./assets/images/400x600.jpg"
                                                            alt="image"
                                                        />
                                                    </Link>
                                                    <div className="off">-30%</div>
                                                    <div className="product-buttons">
                                                        <ul>
                                                            <li>
                                                                <Link to="#">
                                                                    <i className="fab fa-opencart" aria-hidden="true" />
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link to="#">
                                                                    <i className="fa fa-eye" aria-hidden="true" />
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link to="#">
                                                                    <i className="fa fa-heart-o" aria-hidden="true" />
                                                                </Link>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className="list_quick_view">

                                                        <Link to="#">
                                                            <i className="fa fa-eye" aria-hidden="true" />
                                                            Quick View
                                                        </Link>
                                                    </div>
                                                </div>
                                                <div className="product-column-info">
                                                    <h6>
                                                        <Link to="#">Printed Asymmetric Kurta</Link>
                                                    </h6>
                                                    <div className="rating_center">
                                                        <div className="star-rating">

                                                            <span style={{ width: "100%" }} />
                                                        </div>
                                                    </div>
                                                    <p className="price">
                                                        <del>$65.00</del> $60.00
                                                    </p>
                                                    <div className="product_column_text">
                                                        <p>
                                                            At vero eos et accusamus et iusto odio dignissimos
                                                            ducimus qui blanditiis praesentium voluptatum deleniti
                                                            atque corrupti quos dolores et quas molestias excepturi
                                                            sint occaecati cupiditate non provident.
                                                        </p>
                                                        <div className="action_btn">

                                                            <Link to="#" className="btn addtocart">
                                                                <i className="fab fa-opencart" aria-hidden="true" />
                                                                Add to Cart
                                                            </Link>
                                                            <Link to="#" className="btn white_btn addtowishlist">
                                                                <i className="fa fa-heart-o" aria-hidden="true" /> Add
                                                                to Wishlist
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="divider" />
                                        </div>
                                        <div className="item col-lg-4 col-md-4 col-sm-4 grid-group-view">
                                            <div className="product-column">
                                                <div className="product-column-pic">
                                                    <Link to="#" className="product_thumb">
                                                        <img
                                                            src="./assets/images/400x600.jpg"
                                                            alt="image"
                                                        />
                                                    </Link>
                                                    <div className="off">-40%</div>
                                                    <div className="product-buttons">
                                                        <ul>
                                                            <li>
                                                                <Link to="#">
                                                                    <i className="fab fa-opencart" aria-hidden="true" />
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link to="#">
                                                                    <i className="fa fa-eye" aria-hidden="true" />
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link to="#">
                                                                    <i className="fa fa-heart-o" aria-hidden="true" />
                                                                </Link>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className="list_quick_view">

                                                        <Link to="#">
                                                            <i className="fa fa-eye" aria-hidden="true" />
                                                            Quick View
                                                        </Link>
                                                    </div>
                                                </div>
                                                <div className="product-column-info">
                                                    <h6>
                                                        <Link to="#">Printed Sleeveless</Link>
                                                    </h6>
                                                    <div className="rating_center">
                                                        <div className="star-rating">

                                                            <span style={{ width: "60%" }} />
                                                        </div>
                                                    </div>
                                                    <p className="price">
                                                        <del>$95.00</del> $60.00
                                                    </p>
                                                    <div className="product_column_text">
                                                        <p>
                                                            At vero eos et accusamus et iusto odio dignissimos
                                                            ducimus qui blanditiis praesentium voluptatum deleniti
                                                            atque corrupti quos dolores et quas molestias excepturi
                                                            sint occaecati cupiditate non provident.
                                                        </p>
                                                        <div className="action_btn">

                                                            <Link to="#" className="btn addtocart">
                                                                <i className="fab fa-opencart" aria-hidden="true" />
                                                                Add to Cart
                                                            </Link>
                                                            <Link to="#" className="btn white_btn addtowishlist">
                                                                <i className="fa fa-heart-o" aria-hidden="true" /> Add
                                                                to Wishlist
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="divider" />
                                        </div>
                                        <div className="item col-lg-4 col-md-4 col-sm-4 grid-group-view">
                                            <div className="product-column">
                                                <div className="product-column-pic">
                                                    <Link to="#" className="product_thumb">
                                                        <img
                                                            src="./assets/images/400x600.jpg"
                                                            alt="image"
                                                        />
                                                    </Link>
                                                    <div className="off">-25%</div>
                                                    <div className="product-buttons">
                                                        <ul>
                                                            <li>
                                                                <Link to="#">
                                                                    <i className="fab fa-opencart" aria-hidden="true" />
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link to="#">
                                                                    <i className="fa fa-eye" aria-hidden="true" />
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link to="#">
                                                                    <i className="fa fa-heart-o" aria-hidden="true" />
                                                                </Link>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className="list_quick_view">

                                                        <Link to="#">
                                                            <i className="fa fa-eye" aria-hidden="true" />
                                                            Quick View
                                                        </Link>
                                                    </div>
                                                </div>
                                                <div className="product-column-info">
                                                    <h6>
                                                        <Link to="#">Tropical Asymmetrical</Link>
                                                    </h6>
                                                    <div className="rating_center">
                                                        <div className="star-rating">

                                                            <span style={{ width: "70%" }} />
                                                        </div>
                                                    </div>
                                                    <p className="price">
                                                        <del>$90.00</del> $85.00
                                                    </p>
                                                    <div className="product_column_text">
                                                        <p>
                                                            At vero eos et accusamus et iusto odio dignissimos
                                                            ducimus qui blanditiis praesentium voluptatum deleniti
                                                            atque corrupti quos dolores et quas molestias excepturi
                                                            sint occaecati cupiditate non provident.
                                                        </p>
                                                        <div className="action_btn">

                                                            <Link to="#" className="btn addtocart">
                                                                <i className="fab fa-opencart" aria-hidden="true" />
                                                                Add to Cart
                                                            </Link>
                                                            <Link to="#" className="btn white_btn addtowishlist">
                                                                <i className="fa fa-heart-o" aria-hidden="true" /> Add
                                                                to Wishlist
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="divider" />
                                        </div>
                                        <div className="item col-lg-4 col-md-4 col-sm-4 grid-group-view">
                                            <div className="product-column out_of_column">
                                                <div className="product-column-pic">
                                                    <Link to="#" className="product_thumb">
                                                        <img
                                                            src="./assets/images/400x600.jpg"
                                                            alt="image"
                                                        />
                                                    </Link>
                                                    <div className="off">-70%</div>
                                                    <div className="out_stock">Out of stock</div>
                                                    <div className="product-buttons">
                                                        <ul>
                                                            <li>
                                                                <Link to="#">
                                                                    <i className="fa fa-eye" aria-hidden="true" />
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link to="#">
                                                                    <i className="fa fa-heart-o" aria-hidden="true" />
                                                                </Link>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className="list_quick_view">

                                                        <Link to="#">
                                                            <i className="fa fa-eye" aria-hidden="true" />
                                                            Quick View
                                                        </Link>
                                                    </div>
                                                </div>
                                                <div className="product-column-info">
                                                    <h6>
                                                        <Link to="#">Embroidered Three-Quarter</Link>
                                                    </h6>
                                                    <div className="rating_center">
                                                        <div className="star-rating">

                                                            <span style={{ width: "90%" }} />
                                                        </div>
                                                    </div>
                                                    <p className="price">
                                                        <del>$95.00</del> $40.00
                                                    </p>
                                                    <div className="product_column_text">
                                                        <p>
                                                            At vero eos et accusamus et iusto odio dignissimos
                                                            ducimus qui blanditiis praesentium voluptatum deleniti
                                                            atque corrupti quos dolores et quas molestias excepturi
                                                            sint occaecati cupiditate non provident.
                                                        </p>
                                                        <div className="action_btn">

                                                            <Link to="#" className="btn addtocart disabled">
                                                                <i className="fab fa-opencart" aria-hidden="true" />
                                                                Add to Cart
                                                            </Link>
                                                            <Link to="#" className="btn white_btn addtowishlist">
                                                                <i className="fa fa-heart-o" aria-hidden="true" /> Add
                                                                to Wishlist
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="divider" />
                                        </div>
                                        <div className="item col-lg-4 col-md-4 col-sm-4 grid-group-view">
                                            <div className="product-column">
                                                <div className="product-column-pic">
                                                    <Link to="#" className="product_thumb">
                                                        <img
                                                            src="./assets/images/400x600.jpg"
                                                            alt="image"
                                                        />
                                                    </Link>
                                                    <div className="off">-20%</div>
                                                    <div className="product-buttons">
                                                        <ul>
                                                            <li>
                                                                <Link to="#">
                                                                    <i className="fab fa-opencart" aria-hidden="true" />
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link to="#">
                                                                    <i className="fa fa-eye" aria-hidden="true" />
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link to="#">
                                                                    <i className="fa fa-heart-o" aria-hidden="true" />
                                                                </Link>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className="list_quick_view">

                                                        <Link to="#">
                                                            <i className="fa fa-eye" aria-hidden="true" />
                                                            Quick View
                                                        </Link>
                                                    </div>
                                                </div>
                                                <div className="product-column-info">
                                                    <h6>
                                                        <Link to="#">Embroidered Curved</Link>
                                                    </h6>
                                                    <div className="rating_center">
                                                        <div className="star-rating">

                                                            <span style={{ width: "40%" }} />
                                                        </div>
                                                    </div>
                                                    <p className="price">
                                                        <del>$70.00</del> $60.00
                                                    </p>
                                                    <div className="product_column_text">
                                                        <p>
                                                            At vero eos et accusamus et iusto odio dignissimos
                                                            ducimus qui blanditiis praesentium voluptatum deleniti
                                                            atque corrupti quos dolores et quas molestias excepturi
                                                            sint occaecati cupiditate non provident.
                                                        </p>
                                                        <div className="action_btn">

                                                            <Link to="#" className="btn addtocart">
                                                                <i className="fab fa-opencart" aria-hidden="true" />
                                                                Add to Cart
                                                            </Link>
                                                            <Link to="#" className="btn white_btn addtowishlist">
                                                                <i className="fa fa-heart-o" aria-hidden="true" /> Add
                                                                to Wishlist
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="divider" />
                                        </div>
                                        <div className="item col-lg-4 col-md-4 col-sm-4 grid-group-view">
                                            <div className="product-column">
                                                <div className="product-column-pic">
                                                    <Link to="#" className="product_thumb">
                                                        <img
                                                            src="./assets/images/400x600.jpg"
                                                            alt="image"
                                                        />
                                                    </Link>
                                                    <div className="off">-40%</div>
                                                    <div className="product-buttons">
                                                        <ul>
                                                            <li>
                                                                <Link to="#">
                                                                    <i className="fab fa-opencart" aria-hidden="true" />
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link to="#">
                                                                    <i className="fa fa-eye" aria-hidden="true" />
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link to="#">
                                                                    <i className="fa fa-heart-o" aria-hidden="true" />
                                                                </Link>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className="list_quick_view">

                                                        <Link to="#">
                                                            <i className="fa fa-eye" aria-hidden="true" />
                                                            Quick View
                                                        </Link>
                                                    </div>
                                                </div>
                                                <div className="product-column-info">
                                                    <h6>
                                                        <Link to="#">Sunset Ombre Round Notch </Link>
                                                    </h6>
                                                    <div className="rating_center">
                                                        <div className="star-rating">

                                                            <span style={{ width: "100%" }} />
                                                        </div>
                                                    </div>
                                                    <p className="price">
                                                        <del>$95.00</del> $65.00
                                                    </p>
                                                    <div className="product_column_text">
                                                        <p>
                                                            At vero eos et accusamus et iusto odio dignissimos
                                                            ducimus qui blanditiis praesentium voluptatum deleniti
                                                            atque corrupti quos dolores et quas molestias excepturi
                                                            sint occaecati cupiditate non provident.
                                                        </p>
                                                        <div className="action_btn">

                                                            <Link to="#" className="btn addtocart">
                                                                <i className="fab fa-opencart" aria-hidden="true" />
                                                                Add to Cart
                                                            </Link>
                                                            <Link to="#" className="btn white_btn addtowishlist">
                                                                <i className="fa fa-heart-o" aria-hidden="true" /> Add
                                                                to Wishlist
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="divider" />
                                        </div>
                                        <div className="item col-lg-4 col-md-4 col-sm-4 grid-group-view">
                                            <div className="product-column">
                                                <div className="product-column-pic">
                                                    <Link to="#" className="product_thumb">
                                                        <img
                                                            src="./assets/images/400x600.jpg"
                                                            alt="image"
                                                        />
                                                    </Link>
                                                    <div className="product-buttons">
                                                        <ul>
                                                            <li>
                                                                <Link to="#">
                                                                    <i className="fab fa-opencart" aria-hidden="true" />
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link to="#">
                                                                    <i className="fa fa-eye" aria-hidden="true" />
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link to="#">
                                                                    <i className="fa fa-heart-o" aria-hidden="true" />
                                                                </Link>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className="list_quick_view">

                                                        <Link to="#">
                                                            <i className="fa fa-eye" aria-hidden="true" />
                                                            Quick View
                                                        </Link>
                                                    </div>
                                                </div>
                                                <div className="product-column-info">
                                                    <h6>
                                                        <Link to="#">Lacy Round Neck</Link>
                                                    </h6>
                                                    <div className="rating_center">
                                                        <div className="star-rating">

                                                            <span style={{ width: "60%" }} />
                                                        </div>
                                                    </div>
                                                    <p className="price">$80.00</p>
                                                    <div className="product_column_text">
                                                        <p>
                                                            At vero eos et accusamus et iusto odio dignissimos
                                                            ducimus qui blanditiis praesentium voluptatum deleniti
                                                            atque corrupti quos dolores et quas molestias excepturi
                                                            sint occaecati cupiditate non provident.
                                                        </p>
                                                        <div className="action_btn">

                                                            <Link to="#" className="btn addtocart">
                                                                <i className="fab fa-opencart" aria-hidden="true" />
                                                                Add to Cart
                                                            </Link>
                                                            <Link to="#" className="btn white_btn addtowishlist">
                                                                <i className="fa fa-heart-o" aria-hidden="true" /> Add
                                                                to Wishlist
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="divider" />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <nav>
                                                <ul className="pagination justify-content-center">
                                                    <li className="page-item disabled">

                                                        <Link className="page-link" to="#" aria-label="Previous">

                                                            <i
                                                                className="fa fa-angle-double-left"
                                                                aria-hidden="true"
                                                            />
                                                        </Link>
                                                    </li>
                                                    <li className="page-item active">
                                                        <Link className="page-link" to="#">
                                                            1
                                                        </Link>
                                                    </li>
                                                    <li className="page-item">
                                                        <Link className="page-link" to="#">
                                                            2
                                                        </Link>
                                                    </li>
                                                    <li className="page-item">
                                                        <Link className="page-link" to="#">
                                                            3
                                                        </Link>
                                                    </li>
                                                    <li className="page-item">
                                                        <Link className="page-link" to="#">
                                                            4
                                                        </Link>
                                                    </li>
                                                    <li className="page-item">
                                                        <Link className="page-link" to="#">
                                                            5
                                                        </Link>
                                                    </li>
                                                    <li className="page-item">

                                                        <Link className="page-link" to="#" aria-label="Next">

                                                            <i
                                                                className="fa fa-angle-double-right"
                                                                aria-hidden="true"
                                                            />
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </nav>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Productes Sections End */}
                {/* Clients */}
                <div className="section_padding our_clients">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div id="clients_slider" className="next_prev_style2">
                                    <div className="owl-carousel owl-theme">
                                        <div className="item">
                                            <figure>

                                                <img
                                                    src="./assets/images/263x163.png"
                                                    alt="image"
                                                />
                                            </figure>
                                        </div>
                                        <div className="item">
                                            <figure>

                                                <img
                                                    src="./assets/images/263x163.png"
                                                    alt="image"
                                                />
                                            </figure>
                                        </div>
                                        <div className="item">
                                            <figure>

                                                <img
                                                    src="./assets/images/263x163.png"
                                                    alt="image"
                                                />
                                            </figure>
                                        </div>
                                        <div className="item">
                                            <figure>

                                                <img
                                                    src="./assets/images/263x163.png"
                                                    alt="image"
                                                />
                                            </figure>
                                        </div>
                                        <div className="item">
                                            <figure>

                                                <img
                                                    src="./assets/images/263x163.png"
                                                    alt="image"
                                                />
                                            </figure>
                                        </div>
                                        <div className="item">
                                            <figure>

                                                <img
                                                    src="./assets/images/263x163.png"
                                                    alt="image"
                                                />
                                            </figure>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Clients End */}
                <Footer2 />
            </>
        );
    }
}


export default Product;