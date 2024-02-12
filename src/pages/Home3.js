import React from 'react';
import Header3 from "../components/header/Header3";
import Footer3 from "../components/footer/Footer3";
import { Link } from "react-router-dom";

class Home3 extends React.Component {
    render() {
        return (
            <>
                <Header3 />
                {/* Intro Banner */}
                <section className="intro_banner parallex-bg" style={{backgroundImage: "url(./assets/images/1920x730.jpg)"}}>
                    <div className="container">
                        <div className="intro_wrap">
                            <div className="white-text">
                                <h2 className="intro_border">
                                    <span>Trending 2021</span>
                                </h2>
                                <h1>Women's Collection</h1>
                                <Link to="/product" className="btn btn-lg">
                                    Shopping Now
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Intro Banner ends */}
                {/* Timer and Products */}
                <section className=" gray_bg timer_products">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-lg-3 p-0">
                                {/* Timer */}
                                <div className="timer_block">
                                    <div className="content_center">
                                        <div className="countdown white-text">
                                            <h2 className="font_36_normal">Deals of the Day</h2>
                                            <div id="deals_days_2" className="styled" />
                                            <Link to="#" className="btn-link">
                                                View All Products
                                                <i className="fa fa-angle-double-right" aria-hidden="true" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                {/* Timer ends */}
                            </div>
                            <div className="col-lg-9">
                                {/* Product Owl Slider*/}
                                <div
                                    id="feature-products_slider2"
                                    className="section_padding next_prev_style1"
                                >
                                    <div className="owl-carousel owl-theme">
                                        <div className="item">
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
                                                </div>
                                                <div className="product-column-info">
                                                    <h6>
                                                        <Link to="#">Halter Jumpsuit in Navy</Link>
                                                    </h6>
                                                    <div className="rating_center">
                                                        <div className="star-rating">

                                                            <span style={{ width: "60%" }} />
                                                        </div>
                                                    </div>
                                                    <p className="price">
                                                        <del>$82.00</del> $75.00
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="item">
                                            <div className="product-column out_of_column">
                                                <div className="product-column-pic">
                                                    <Link className="product_thumb">
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
                                                </div>
                                                <div className="product-column-info">
                                                    <h6>
                                                        <Link to="#">Men Suit</Link>
                                                    </h6>
                                                    <div className="rating_center">
                                                        <div className="star-rating">

                                                            <span style={{ width: "80%" }} />
                                                        </div>
                                                    </div>
                                                    <p className="price">
                                                        <del>$100.00</del> $95.00
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="item">
                                            <div className="product-column">
                                                <div className="product-column-pic">
                                                    <Link className="product_thumb">
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
                                                </div>
                                                <div className="product-column-info">
                                                    <h6>
                                                        <Link to="#">Cotton Rollup Sleeves</Link>
                                                    </h6>
                                                    <div className="rating_center">
                                                        <div className="star-rating">

                                                            <span style={{ width: "80%" }} />
                                                        </div>
                                                    </div>
                                                    <p className="price">
                                                        <del>$95.00</del> $85.00
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="item">
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
                                                </div>
                                                <div className="product-column-info">
                                                    <h6>
                                                        <Link to="#">Halter Jumpsuit in Navy</Link>
                                                    </h6>
                                                    <div className="rating_center">
                                                        <div className="star-rating">

                                                            <span style={{ width: "60%" }} />
                                                        </div>
                                                    </div>
                                                    <p className="price">
                                                        <del>$82.00</del> $75.00
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="item">
                                            <div className="product-column out_of_column">
                                                <div className="product-column-pic">
                                                    <Link className="product_thumb">
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
                                                </div>
                                                <div className="product-column-info">
                                                    <h6>
                                                        <Link to="#">Men Suit</Link>
                                                    </h6>
                                                    <div className="rating_center">
                                                        <div className="star-rating">

                                                            <span style={{ width: "80%" }} />
                                                        </div>
                                                    </div>
                                                    <p className="price">
                                                        <del>$100.00</del> $95.00
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="item">
                                            <div className="product-column">
                                                <div className="product-column-pic">
                                                    <Link className="product_thumb">
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
                                                </div>
                                                <div className="product-column-info">
                                                    <h6>
                                                        <Link to="#">Cotton Rollup Sleeves</Link>
                                                    </h6>
                                                    <div className="rating_center">
                                                        <div className="star-rating">

                                                            <span style={{ width: "80%" }} />
                                                        </div>
                                                    </div>
                                                    <p className="price">
                                                        <del>$95.00</del> $85.00
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* Product Owl Slider */}
                            </div>
                        </div>
                    </div>
                </section>
                {/* Timer and Products ends*/}
                {/* Collection Style */}
                <section className="padding_30x15 collection_style">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="collection_style1 white-text">
                                    <h1 className="font_40_bold">Summer Collection</h1>
                                    <h2 className="font_weight_light">Free shipping On All Order</h2>
                                    <Link to="#" className="btn white_outline">
                                        View Collections
                                    </Link>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="collection_style2 white-text">
                                    <h2 className="font_weight_light">Fashion &amp; Accessories </h2>
                                    <h1 className="font_40_bold">New Styles</h1>
                                    <Link to="#" className="btn white_outline">
                                        View Collections
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Collection Style ends*/}
                {/* Feature Product Slider 3 */}
                <section className="padding_30x15 pt-0 feature_product_slider3">
                    <div className="container-fluid">
                        <div className="gray_bg padding_4x4_60">
                            {/* Product Owl Slider*/}
                            <div id="feature_products_slider3" className="next_prev_style1">
                                <div className="section_header">
                                    <h4>
                                        <span>Featured Products</span>
                                    </h4>
                                </div>
                                <div className="owl-carousel owl-theme">
                                    <div className="item">
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
                                            </div>
                                            <div className="product-column-info">
                                                <h6>
                                                    <Link to="#">Halter Jumpsuit in Navy</Link>
                                                </h6>
                                                <div className="rating_center">
                                                    <div className="star-rating">

                                                        <span style={{ width: "60%" }} />
                                                    </div>
                                                </div>
                                                <p className="price">
                                                    <del>$82.00</del> $75.00
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="item">
                                        <div className="product-column">
                                            <div className="product-column-pic">
                                                <Link className="product_thumb">
                                                    <img
                                                        src="./assets/images/400x600.jpg"
                                                        alt="image"
                                                    />
                                                </Link>
                                                <div className="off">-70%</div>
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
                                            </div>
                                            <div className="product-column-info">
                                                <h6>
                                                    <Link to="#">Men Suit</Link>
                                                </h6>
                                                <div className="rating_center">
                                                    <div className="star-rating">

                                                        <span style={{ width: "80%" }} />
                                                    </div>
                                                </div>
                                                <p className="price">
                                                    <del>$100.00</del> $95.00
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="item">
                                        <div className="product-column">
                                            <div className="product-column-pic">
                                                <Link className="product_thumb">
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
                                            </div>
                                            <div className="product-column-info">
                                                <h6>
                                                    <Link to="#">Cotton Rollup Sleeves</Link>
                                                </h6>
                                                <div className="rating_center">
                                                    <div className="star-rating">

                                                        <span style={{ width: "80%" }} />
                                                    </div>
                                                </div>
                                                <p className="price">
                                                    <del>$95.00</del> $85.00
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="item">
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
                                            </div>
                                            <div className="product-column-info">
                                                <h6>
                                                    <Link to="#">Special Watch</Link>
                                                </h6>
                                                <div className="rating_center">
                                                    <div className="star-rating">

                                                        <span style={{ width: "60%" }} />
                                                    </div>
                                                </div>
                                                <p className="price"> $75.00</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="item">
                                        <div className="product-column">
                                            <div className="product-column-pic">
                                                <Link className="product_thumb">
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
                                            </div>
                                            <div className="product-column-info">
                                                <h6>
                                                    <Link to="#">Golden Triangle Jacket</Link>
                                                </h6>
                                                <div className="rating_center">
                                                    <div className="star-rating">

                                                        <span style={{ width: "80%" }} />
                                                    </div>
                                                </div>
                                                <p className="price">
                                                    <del>$100.00</del> $95.00
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="item">
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
                                            </div>
                                            <div className="product-column-info">
                                                <h6>
                                                    <Link to="#">Variety FullSolid Men's</Link>
                                                </h6>
                                                <div className="rating_center">
                                                    <div className="star-rating">

                                                        <span style={{ width: "60%" }} />
                                                    </div>
                                                </div>
                                                <p className="price">
                                                    <del>$82.00</del> $75.00
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Product Owl Slider */}
                        </div>
                    </div>
                </section>
                {/* Feature Product Slider 3 ends */}
                {/* Collection Accessories */}
                <section className="padding_30x15 pt-0 collection_accessories">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="collection_accessories_item collection_item1">
                                    <Link to="#">
                                        <div className="dark-overlay" />
                                        <div className="content_center white-text">
                                            <h1 className="font_40_normal">Winter Collection</h1>
                                            <h2 className="lt_space2 font_weight_light">New Trend 2021</h2>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="collection_accessories_item collection_item2">
                                            <Link to="#">
                                                <div className="dark-overlay" />
                                                <div className="content_center white-text">
                                                    <h1 className="font_40_normal">Season On Sale</h1>
                                                    <h2 className="lt_space2 font_weight_light">
                                                        Women's Fashion
                                                    </h2>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="space-30" />
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="collection_accessories_item collection_item3">
                                            <Link to="#">
                                                <div className="dark-overlay" />
                                                <div className="content_center white-text">
                                                    <h1 className="font_40_normal">Accessories</h1>
                                                    <h2 className="lt_space2 font_weight_light">Save Up 35%</h2>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Collection Accessories ends */}
                {/* Collection New and Trending Products */}
                <section className="padding_30x15 pt-0 collection_accessories">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-lg-3">
                                <div id="collection_slider1">
                                    <div className="owl-carousel owl-theme">
                                        <div className="item">
                                            <figure>
                                                <img
                                                    src="./assets/images/424x529.jpg"
                                                    alt="image"
                                                />
                                            </figure>
                                        </div>
                                        <div className="item">
                                            <figure>
                                                <img
                                                    src="./assets/images/424x529.jpg"
                                                    alt="image"
                                                />
                                            </figure>
                                        </div>
                                        <div className="item">
                                            <figure>
                                                <img
                                                    src="./assets/images/424x529.jpg"
                                                    alt="image"
                                                />
                                            </figure>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3">
                                <div
                                    id="trending_product_slider1"
                                    className="trending_products next_prev_style1"
                                >
                                    <div className="section_header_style2">
                                        <h4>New Products</h4>
                                    </div>
                                    <div className="owl-carousel owl-theme">
                                        <div className="item">
                                            <ul className="product_list">
                                                <li>
                                                    <Link to="#" className="thumb">
                                                        <figure>
                                                            <img
                                                                src="./assets/images/150x150.jpg"
                                                                alt="image"
                                                            />
                                                        </figure>
                                                        <span className="off">40%</span>
                                                    </Link>
                                                    <h6>
                                                        <Link to="#">Laptop Bag</Link>
                                                    </h6>
                                                    <div className="rating_center rating_left">
                                                        <div className="star-rating">

                                                            <span style={{ width: "60%" }} />
                                                        </div>
                                                    </div>
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
                                                        <span className="off">30%</span>
                                                    </Link>
                                                    <h6>
                                                        <Link to="#">Wrist Watchest</Link>
                                                    </h6>
                                                    <div className="rating_center rating_left">
                                                        <div className="star-rating">

                                                            <span style={{ width: "80%" }} />
                                                        </div>
                                                    </div>
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
                                                        <span className="off">60%</span>
                                                    </Link>
                                                    <h6>
                                                        <Link to="#">Halter Jumpsuit</Link>
                                                    </h6>
                                                    <div className="rating_center rating_left">
                                                        <div className="star-rating">

                                                            <span style={{ width: "60%" }} />
                                                        </div>
                                                    </div>
                                                    <p className="price">
                                                        <del>$82.00</del> $75.00
                                                    </p>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="item">
                                            <ul className="product_list">
                                                <li>
                                                    <Link to="#" className="thumb">
                                                        <figure>
                                                            <img
                                                                src="./assets/images/150x150.jpg"
                                                                alt="image"
                                                            />
                                                        </figure>
                                                        <span className="off">60%</span>
                                                    </Link>
                                                    <h6>
                                                        <Link to="#">Halter Jumpsuit</Link>
                                                    </h6>
                                                    <div className="rating_center rating_left">
                                                        <div className="star-rating">

                                                            <span style={{ width: "60%" }} />
                                                        </div>
                                                    </div>
                                                    <p className="price">
                                                        <del>$82.00</del> $75.00
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
                                                        <span className="off">30%</span>
                                                    </Link>
                                                    <h6>
                                                        <Link to="#">Wrist Watchest</Link>
                                                    </h6>
                                                    <div className="rating_center rating_left">
                                                        <div className="star-rating">

                                                            <span style={{ width: "80%" }} />
                                                        </div>
                                                    </div>
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
                                                        <span className="off">40%</span>
                                                    </Link>
                                                    <h6>
                                                        <Link to="#">Laptop Bag</Link>
                                                    </h6>
                                                    <div className="rating_center rating_left">
                                                        <div className="star-rating">

                                                            <span style={{ width: "60%" }} />
                                                        </div>
                                                    </div>
                                                    <p className="price">
                                                        <del>$75.00</del> $65.00
                                                    </p>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3">
                                <div id="collection_slider2">
                                    <div className="owl-carousel owl-theme">
                                        <div className="item">
                                            <figure>
                                                <img
                                                    src="./assets/images/424x529.jpg"
                                                    alt="image"
                                                />
                                            </figure>
                                        </div>
                                        <div className="item">
                                            <figure>
                                                <img
                                                    src="./assets/images/424x529.jpg"
                                                    alt="image"
                                                />
                                            </figure>
                                        </div>
                                        <div className="item">
                                            <figure>
                                                <img
                                                    src="./assets/images/424x529.jpg"
                                                    alt="image"
                                                />
                                            </figure>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3">
                                <div
                                    id="trending_product_slider2"
                                    className="trending_products next_prev_style1"
                                >
                                    <div className="section_header_style2">
                                        <h4>Trending Products</h4>
                                    </div>
                                    <div className="owl-carousel owl-theme">
                                        <div className="item">
                                            <ul className="product_list">
                                                <li>
                                                    <Link to="#" className="thumb">
                                                        <figure>
                                                            <img
                                                                src="./assets/images/150x150.jpg"
                                                                alt="image"
                                                            />
                                                        </figure>
                                                        <span className="off">60%</span>
                                                    </Link>
                                                    <h6>
                                                        <Link to="#">Halter Jumpsuit</Link>
                                                    </h6>
                                                    <div className="rating_center rating_left">
                                                        <div className="star-rating">

                                                            <span style={{ width: "60%" }} />
                                                        </div>
                                                    </div>
                                                    <p className="price">
                                                        <del>$82.00</del> $75.00
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
                                                        <span className="off">30%</span>
                                                    </Link>
                                                    <h6>
                                                        <Link to="#">Wrist Watchest</Link>
                                                    </h6>
                                                    <div className="rating_center rating_left">
                                                        <div className="star-rating">

                                                            <span style={{ width: "80%" }} />
                                                        </div>
                                                    </div>
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
                                                        <span className="off">40%</span>
                                                    </Link>
                                                    <h6>
                                                        <Link to="#">Laptop Bag</Link>
                                                    </h6>
                                                    <div className="rating_center rating_left">
                                                        <div className="star-rating">

                                                            <span style={{ width: "60%" }} />
                                                        </div>
                                                    </div>
                                                    <p className="price">
                                                        <del>$75.00</del> $65.00
                                                    </p>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="item">
                                            <ul className="product_list">
                                                <li>
                                                    <Link to="#" className="thumb">
                                                        <figure>
                                                            <img
                                                                src="./assets/images/150x150.jpg"
                                                                alt="image"
                                                            />
                                                        </figure>
                                                        <span className="off">40%</span>
                                                    </Link>
                                                    <h6>
                                                        <Link to="#">Laptop Bag</Link>
                                                    </h6>
                                                    <div className="rating_center rating_left">
                                                        <div className="star-rating">

                                                            <span style={{ width: "60%" }} />
                                                        </div>
                                                    </div>
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
                                                        <span className="off">30%</span>
                                                    </Link>
                                                    <h6>
                                                        <Link to="#">Wrist Watchest</Link>
                                                    </h6>
                                                    <div className="rating_center rating_left">
                                                        <div className="star-rating">

                                                            <span style={{ width: "80%" }} />
                                                        </div>
                                                    </div>
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
                                                        <span className="off">60%</span>
                                                    </Link>
                                                    <h6>
                                                        <Link to="#">Halter Jumpsuit</Link>
                                                    </h6>
                                                    <div className="rating_center rating_left">
                                                        <div className="star-rating">

                                                            <span style={{ width: "60%" }} />
                                                        </div>
                                                    </div>
                                                    <p className="price">
                                                        <del>$82.00</del> $75.00
                                                    </p>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Collection New and Trending Products ends */}
                {/* Subscribe */}
                <section className="section_padding parallex-bg subscribe_section">
                    <div className="dark-overlay" />
                    <div className="container div_zindex">
                        <div className="row">
                            <div className="col-lg-6 white-text">
                                <h1 className="font_36_normal">Get the latest info weekly</h1>
                            </div>
                            <div className="col-lg-6">
                                <form>
                                    <div className="form-group">
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Email Address"
                                        />
                                        <button type="submit" className="btn">
                                            Subscribe
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Subscribe ends*/}
                {/* News and Blogs */}
                <section className="section_padding news_blogs">
                    <div className="container">
                        <div className="section_header_style2 text-center">
                            <h2>Our News &amp; Blog</h2>
                        </div>
                        <div className="row">
                            <div className="col-lg-4">
                                {/* Blog Item*/}
                                <article className="blog">
                                    <div className="blog_thumb">
                                        
                                        <Link to="#">
                                            <img src="./assets/images/900x600.jpg" alt="image" />
                                        </Link>
                                    </div>
                                    <div className="blog_text">
                                        <h4>
                                            <Link to="#">There are many variations of passages</Link>
                                        </h4>
                                        <p>
                                            Contrary to popular belief, Lorem Ipsum is not simply random
                                            text. It has roots in a piece...
                                        </p>
                                    </div>
                                </article>
                            </div>
                            <div className="col-lg-4">
                                {/* Blog Item*/}
                                <article className="blog">
                                    <div className="blog_thumb">
                                        
                                        <Link to="#">
                                            <img src="./assets/images/900x600.jpg" alt="image" />
                                        </Link>
                                    </div>
                                    <div className="blog_text">
                                        <h4>
                                            <Link to="#">The standard chunk of Lorem Ipsum</Link>
                                        </h4>
                                        <p>
                                            Contrary to popular belief, Lorem Ipsum is not simply random
                                            text. It has roots in a piece...
                                        </p>
                                    </div>
                                </article>
                            </div>
                            <div className="col-lg-4">
                                {/* Blog Item*/}
                                <article className="blog">
                                    <div className="blog_thumb">
                                        
                                        <Link to="#">
                                            <img src="./assets/images/900x600.jpg" alt="image" />
                                        </Link>
                                    </div>
                                    <div className="blog_text">
                                        <h4>
                                            <Link to="#">There are many variations of passages</Link>
                                        </h4>
                                        <p>
                                            Contrary to popular belief, Lorem Ipsum is not simply random
                                            text. It has roots in a piece...
                                        </p>
                                    </div>
                                </article>
                            </div>
                        </div>
                    </div>
                </section>
                {/* News and Blogs ends */}
                <Footer3 />
            </>
        );
    }
}


export default Home3;