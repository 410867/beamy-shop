import React from 'react';
import Header1 from "../components/header/Header1";
import Footer1 from "../components/footer/Footer1";
import { Link } from "react-router-dom";

class Home1 extends React.Component {
    render() {
        return (
            <>
                <Header1 />
                <section className="intro_banner parallex-bg" style={{backgroundImage: "url(./assets/images/1920x730.jpg)"}}>
                    <div className="dark-overlay"/>
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
                <section className="section_padding product_deal">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3 col-md-12">
                                <div className="best_deal">
                                    <h2>Deals of the Day</h2>
                                    <div className="best_deal_bg">
                                        <div className="dark-overlay">
                                            <div className="deal_content div_zindex">
                                                <i className="fa fa-clock-o" aria-hidden="true"/>
                                                <div className="timer">
                                                    <div id="deals_days" className="styled"/>
                                                </div>
                                            </div>
                                            <div className="clear"/>
                                            <Link to="/product" className="btn btn-sm text-uppercase">
                                                View All Products
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-9 col-md-12">
                                <div id="feature-products_slider" className="products_slider_style1">
                                    <div className="owl-carousel owl-theme">
                                        <div className="item">
                                            <div className="product-column">
                                                <div className="product-column-pic">
                                                    <Link to="#" className="product_thumb">
                                                        <img src="./assets/images/400x600.jpg" alt="image"/>
                                                    </Link>
                                                    <div className="off">-20%</div>
                                                    <div className="product-buttons">
                                                        <ul>
                                                            <li>
                                                                <Link to="#">
                                                                    <i className="fab fa-opencart" aria-hidden="true"/>
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link to="#">
                                                                    <i className="fa fa-eye" aria-hidden="true"/>
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link to="#">
                                                                    <i className="fa fa-heart-o" aria-hidden="true"/>
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
                                                            <span style={{width: "60%"}}/>
                                                        </div>
                                                    </div>
                                                    <p className="price">
                                                        <del>$82.00</del>
                                                        $75.00
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="item">
                                            <div className="product-column out_of_column">
                                                <div className="product-column-pic">
                                                    <Link className="product_thumb">
                                                        <img src="././assets/images/400x600.jpg" alt="image"/>
                                                    </Link>
                                                    <div className="off">-70%</div>
                                                    <div className="out_stock">Out of stock</div>
                                                    <div className="product-buttons">
                                                        <ul>
                                                            <li>
                                                                <Link to="#">
                                                                    <i className="fa fa-eye" aria-hidden="true"/>
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link to="#">
                                                                    <i className="fa fa-heart-o" aria-hidden="true"/>
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

                                                            <span style={{width: "80%"}}/>
                                                        </div>
                                                    </div>
                                                    <p className="price">
                                                        <del>$100.00</del>
                                                        $95.00
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="item">
                                            <div className="product-column">
                                                <div className="product-column-pic">
                                                    <Link className="product_thumb">
                                                        <img src="./assets/images/400x600.jpg" alt="image"/>
                                                    </Link>
                                                    <div className="off">-20%</div>
                                                    <div className="product-buttons">
                                                        <ul>
                                                            <li>
                                                                <Link to="#">
                                                                    <i className="fab fa-opencart" aria-hidden="true"/>
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link to="#">
                                                                    <i className="fa fa-eye" aria-hidden="true"/>
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link to="#">
                                                                    <i className="fa fa-heart-o" aria-hidden="true"/>
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

                                                            <span style={{width: "80%"}}/>
                                                        </div>
                                                    </div>
                                                    <p className="price">
                                                        <del>$95.00</del>
                                                        $85.00
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="item">
                                            <div className="product-column">
                                                <div className="product-column-pic">
                                                    <Link to="#" className="product_thumb">
                                                        <img src="./assets/images/400x600.jpg" alt="image"/>
                                                    </Link>
                                                    <div className="off">-20%</div>
                                                    <div className="product-buttons">
                                                        <ul>
                                                            <li>
                                                                <Link to="#">
                                                                    <i className="fab fa-opencart" aria-hidden="true"/>
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link to="#">
                                                                    <i className="fa fa-eye" aria-hidden="true"/>
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link to="#">
                                                                    <i className="fa fa-heart-o" aria-hidden="true"/>
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

                                                            <span style={{width: "60%"}}/>
                                                        </div>
                                                    </div>
                                                    <p className="price">
                                                        <del>$82.00</del>
                                                        $75.00
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="item">
                                            <div className="product-column out_of_column">
                                                <div className="product-column-pic">
                                                    <Link className="product_thumb">
                                                        <img src="./assets/images/400x600.jpg" alt="image"/>
                                                    </Link>
                                                    <div className="off">-70%</div>
                                                    <div className="out_stock">Out of stock</div>
                                                    <div className="product-buttons">
                                                        <ul>
                                                            <li>
                                                                <Link to="#">
                                                                    <i className="fa fa-eye" aria-hidden="true"/>
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link to="#">
                                                                    <i className="fa fa-heart-o" aria-hidden="true"/>
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

                                                            <span style={{width: "80%"}}/>
                                                        </div>
                                                    </div>
                                                    <p className="price">
                                                        <del>$100.00</del>
                                                        $95.00
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="item">
                                            <div className="product-column">
                                                <div className="product-column-pic">
                                                    <Link className="product_thumb">
                                                        <img src="./assets/images/400x600.jpg" alt="image"/>
                                                    </Link>
                                                    <div className="off">-20%</div>
                                                    <div className="product-buttons">
                                                        <ul>
                                                            <li>
                                                                <Link to="#">
                                                                    <i className="fab fa-opencart" aria-hidden="true"/>
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link to="#">
                                                                    <i className="fa fa-eye" aria-hidden="true"/>
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link to="#">
                                                                    <i className="fa fa-heart-o" aria-hidden="true"/>
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

                                                            <span style={{width: "80%"}}/>
                                                        </div>
                                                    </div>
                                                    <p className="price">
                                                        <del>$95.00</del>
                                                        $85.00
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section_padding pt-0">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="sale_start sale_1 white-text">
                                    <h1>70% Off</h1>
                                    <h2>Sale Starts Today </h2>
                                    <Link to="#" className="btn btn-sm text-uppercase white_btn">
                                        Shop Now
                                    </Link>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="sale_start sale_2 white-text">
                                    <h1>70% Off</h1>
                                    <h2>Sale Starts Today </h2>
                                    <Link to="#" className="btn btn-sm text-uppercase white_btn">
                                        Shop Now
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section_padding pt-0 new-products_slider">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="section_header text-center">
                                    <h4>
                                        <span>New Products</span>
                                    </h4>
                                </div>
                                <div id="new-products_slider" className="products_slider_style2">
                                    <div className="owl-carousel owl-theme">
                                        <div className="item">
                                            <div className="product-column">
                                                <div className="product-column-pic">
                                                    <Link to="#" className="product_thumb">
                                                        <img src="./assets/images/400x600.jpg" alt="image"/>
                                                    </Link>
                                                    <div className="off">-20%</div>
                                                    <div className="product-buttons">
                                                        <ul>
                                                            <li>
                                                                <Link to="#">
                                                                    <i className="fab fa-opencart" aria-hidden="true"/>
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link to="#">
                                                                    <i className="fa fa-eye" aria-hidden="true"/>
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link to="#">
                                                                    <i className="fa fa-heart-o" aria-hidden="true"/>
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

                                                            <span style={{width: "60%"}}/>
                                                        </div>
                                                    </div>
                                                    <p className="price">
                                                        <del>$82.00</del>
                                                        $75.00
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="item">
                                            <div className="product-column out_of_column">
                                                <div className="product-column-pic">
                                                    <Link className="product_thumb">
                                                        <img src="./assets/images/400x600.jpg" alt="image"/>
                                                    </Link>
                                                    <div className="off">-70%</div>
                                                    <div className="out_stock">Out of stock</div>
                                                    <div className="product-buttons">
                                                        <ul>
                                                            <li>
                                                                <Link to="#">
                                                                    <i className="fa fa-eye" aria-hidden="true"/>
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link to="#">
                                                                    <i className="fa fa-heart-o" aria-hidden="true"/>
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

                                                            <span style={{width: "80%"}}/>
                                                        </div>
                                                    </div>
                                                    <p className="price">
                                                        <del>$100.00</del>
                                                        $95.00
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="item">
                                            <div className="product-column">
                                                <div className="product-column-pic">
                                                    <Link className="product_thumb">
                                                        <img src="./assets/images/400x600.jpg" alt="image"/>
                                                    </Link>
                                                    <div className="off">-30%</div>
                                                    <div className="product-buttons">
                                                        <ul>
                                                            <li>
                                                                <Link to="#">
                                                                    <i className="fab fa-opencart" aria-hidden="true"/>
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link to="#">
                                                                    <i className="fa fa-eye" aria-hidden="true"/>
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link to="#">
                                                                    <i className="fa fa-heart-o" aria-hidden="true"/>
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

                                                            <span style={{width: "80%"}}/>
                                                        </div>
                                                    </div>
                                                    <p className="price">
                                                        <del>$95.00</del>
                                                        $85.00
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="item">
                                            <div className="product-column">
                                                <div className="product-column-pic">
                                                    <Link to="#" className="product_thumb">
                                                        <img src="./assets/images/400x600.jpg" alt="image"/>
                                                    </Link>
                                                    <div className="product-buttons">
                                                        <ul>
                                                            <li>
                                                                <Link to="#">
                                                                    <i className="fab fa-opencart" aria-hidden="true"/>
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link to="#">
                                                                    <i className="fa fa-eye" aria-hidden="true"/>
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link to="#">
                                                                    <i className="fa fa-heart-o" aria-hidden="true"/>
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

                                                            <span style={{width: "60%"}}/>
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
                                                        <img src="./assets/images/400x600.jpg" alt="image"/>
                                                    </Link>
                                                    <div className="off">-30%</div>
                                                    <div className="product-buttons">
                                                        <ul>
                                                            <li>
                                                                <Link to="#">
                                                                    <i className="fab fa-opencart" aria-hidden="true"/>
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link to="#">
                                                                    <i className="fa fa-eye" aria-hidden="true"/>
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link to="#">
                                                                    <i className="fa fa-heart-o" aria-hidden="true"/>
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

                                                            <span style={{width: "80%"}}/>
                                                        </div>
                                                    </div>
                                                    <p className="price">
                                                        <del>$100.00</del>
                                                        $95.00
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="item">
                                            <div className="product-column">
                                                <div className="product-column-pic">
                                                    <Link to="#" className="product_thumb">
                                                        <img src="./assets/images/400x600.jpg" alt="image"/>
                                                    </Link>
                                                    <div className="off">-20%</div>
                                                    <div className="product-buttons">
                                                        <ul>
                                                            <li>
                                                                <Link to="#">
                                                                    <i className="fab fa-opencart" aria-hidden="true"/>
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link to="#">
                                                                    <i className="fa fa-eye" aria-hidden="true"/>
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link to="#">
                                                                    <i className="fa fa-heart-o" aria-hidden="true"/>
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

                                                            <span style={{width: "60%"}}/>
                                                        </div>
                                                    </div>
                                                    <p className="price">
                                                        <del>$82.00</del>
                                                        $75.00
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section_padding pt-0 popular_products">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="section_header text-center">
                                    <h4>
                                        <span>Popular Products</span>
                                    </h4>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <div className="product_tab">
                                    <ul className="nav nav-tabs">
                                        <li className="nav-item">
                                            <Link
                                                to="#bestseller"
                                                data-bs-toggle="tab"
                                                className="nav-link active"
                                            >
                                                Best Sellers
                                            </Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link to="#mostwanted" data-bs-toggle="tab" className="nav-link">
                                                Most Wanted
                                            </Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link
                                                to="#featureproduct"
                                                data-bs-toggle="tab"
                                                className="nav-link"
                                            >
                                                Featured Products
                                            </Link>
                                        </li>
                                    </ul>
                                    <div className="tab-content">
                                        <div className="tab-pane fade active show" id="bestseller">
                                            <div className="row">
                                                <div className="col-lg-3 col-md-6 col-sm-6">
                                                    <div className="product-column">
                                                        <div className="product-column-pic">
                                                            <Link to="#" className="product_thumb">
                                                                <img src="./assets/images/400x600.jpg" alt="image"/>
                                                            </Link>
                                                            <div className="off">-20%</div>
                                                            <div className="product-buttons">
                                                                <ul>
                                                                    <li>
                                                                        <Link to="#">
                                                                            <i
                                                                                className="fab fa-opencart"
                                                                                aria-hidden="true"
                                                                            />
                                                                        </Link>
                                                                    </li>
                                                                    <li>
                                                                        <Link to="#">
                                                                            <i className="fa fa-eye"
                                                                               aria-hidden="true"/>
                                                                        </Link>
                                                                    </li>
                                                                    <li>
                                                                        <Link to="#">
                                                                            <i
                                                                                className="fa fa-heart-o"
                                                                                aria-hidden="true"
                                                                            />
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

                                                                    <span style={{width: "60%"}}/>
                                                                </div>
                                                            </div>
                                                            <p className="price">
                                                                <del>$82.00</del>
                                                                $75.00
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-3 col-md-6 col-sm-6">
                                                    <div className="product-column">
                                                        <div className="product-column-pic">
                                                            <Link to="#" className="product_thumb">
                                                                <img src="./assets/images/400x600.jpg" alt="image"/>
                                                            </Link>
                                                            <div className="off">-20%</div>
                                                            <div className="product-buttons">
                                                                <ul>
                                                                    <li>
                                                                        <Link to="#">
                                                                            <i
                                                                                className="fab fa-opencart"
                                                                                aria-hidden="true"
                                                                            />
                                                                        </Link>
                                                                    </li>
                                                                    <li>
                                                                        <Link to="#">
                                                                            <i className="fa fa-eye"
                                                                               aria-hidden="true"/>
                                                                        </Link>
                                                                    </li>
                                                                    <li>
                                                                        <Link to="#">
                                                                            <i
                                                                                className="fa fa-heart-o"
                                                                                aria-hidden="true"
                                                                            />
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

                                                                    <span style={{width: "60%"}}/>
                                                                </div>
                                                            </div>
                                                            <p className="price">
                                                                <del>$82.00</del>
                                                                $75.00
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-3 col-md-6 col-sm-6">
                                                    <div className="product-column">
                                                        <div className="product-column-pic">
                                                            <Link className="product_thumb">
                                                                <img src="./assets/images/400x600.jpg" alt="image"/>
                                                            </Link>
                                                            <div className="off">-30%</div>
                                                            <div className="product-buttons">
                                                                <ul>
                                                                    <li>
                                                                        <Link to="#">
                                                                            <i
                                                                                className="fab fa-opencart"
                                                                                aria-hidden="true"
                                                                            />
                                                                        </Link>
                                                                    </li>
                                                                    <li>
                                                                        <Link to="#">
                                                                            <i className="fa fa-eye"
                                                                               aria-hidden="true"/>
                                                                        </Link>
                                                                    </li>
                                                                    <li>
                                                                        <Link to="#">
                                                                            <i
                                                                                className="fa fa-heart-o"
                                                                                aria-hidden="true"
                                                                            />
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

                                                                    <span style={{width: "80%"}}/>
                                                                </div>
                                                            </div>
                                                            <p className="price">
                                                                <del>$100.00</del>
                                                                $95.00
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-3 col-md-6 col-sm-6">
                                                    <div className="product-column">
                                                        <div className="product-column-pic">
                                                            <Link to="#" className="product_thumb">
                                                                <img src="./assets/images/400x600.jpg" alt="image"/>
                                                            </Link>
                                                            <div className="product-buttons">
                                                                <ul>
                                                                    <li>
                                                                        <Link to="#">
                                                                            <i
                                                                                className="fab fa-opencart"
                                                                                aria-hidden="true"
                                                                            />
                                                                        </Link>
                                                                    </li>
                                                                    <li>
                                                                        <Link to="#">
                                                                            <i className="fa fa-eye"
                                                                               aria-hidden="true"/>
                                                                        </Link>
                                                                    </li>
                                                                    <li>
                                                                        <Link to="#">
                                                                            <i
                                                                                className="fa fa-heart-o"
                                                                                aria-hidden="true"
                                                                            />
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

                                                                    <span style={{width: "60%"}}/>
                                                                </div>
                                                            </div>
                                                            <p className="price"> $75.00</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="tab-pane fade" id="mostwanted">
                                            <div className="row">
                                                <div className="col-lg-3 col-md-6 col-sm-6">
                                                    <div className="product-column">
                                                        <div className="product-column-pic">
                                                            <Link to="#" className="product_thumb">
                                                                <img src="./assets/images/400x600.jpg" alt="image"/>
                                                            </Link>
                                                            <div className="product-buttons">
                                                                <ul>
                                                                    <li>
                                                                        <Link to="#">
                                                                            <i
                                                                                className="fab fa-opencart"
                                                                                aria-hidden="true"
                                                                            />
                                                                        </Link>
                                                                    </li>
                                                                    <li>
                                                                        <Link to="#">
                                                                            <i className="fa fa-eye"
                                                                               aria-hidden="true"/>
                                                                        </Link>
                                                                    </li>
                                                                    <li>
                                                                        <Link to="#">
                                                                            <i
                                                                                className="fa fa-heart-o"
                                                                                aria-hidden="true"
                                                                            />
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

                                                                    <span style={{width: "60%"}}/>
                                                                </div>
                                                            </div>
                                                            <p className="price"> $75.00</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-3 col-md-6 col-sm-6">
                                                    <div className="product-column">
                                                        <div className="product-column-pic">
                                                            <Link className="product_thumb">
                                                                <img src="./assets/images/400x600.jpg" alt="image"/>
                                                            </Link>
                                                            <div className="off">-70%</div>
                                                            <div className="product-buttons">
                                                                <ul>
                                                                    <li>
                                                                        <Link to="#">
                                                                            <i
                                                                                className="fab fa-opencart"
                                                                                aria-hidden="true"
                                                                            />
                                                                        </Link>
                                                                    </li>
                                                                    <li>
                                                                        <Link to="#">
                                                                            <i className="fa fa-eye"
                                                                               aria-hidden="true"/>
                                                                        </Link>
                                                                    </li>
                                                                    <li>
                                                                        <Link to="#">
                                                                            <i
                                                                                className="fa fa-heart-o"
                                                                                aria-hidden="true"
                                                                            />
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

                                                                    <span style={{width: "80%"}}/>
                                                                </div>
                                                            </div>
                                                            <p className="price">
                                                                <del>$100.00</del>
                                                                $95.00
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-3 col-md-6 col-sm-6">
                                                    <div className="product-column">
                                                        <div className="product-column-pic">
                                                            <Link className="product_thumb">
                                                                <img src="./assets/images/400x600.jpg" alt="image"/>
                                                            </Link>
                                                            <div className="off">-30%</div>
                                                            <div className="product-buttons">
                                                                <ul>
                                                                    <li>
                                                                        <Link to="#">
                                                                            <i
                                                                                className="fab fa-opencart"
                                                                                aria-hidden="true"
                                                                            />
                                                                        </Link>
                                                                    </li>
                                                                    <li>
                                                                        <Link to="#">
                                                                            <i className="fa fa-eye"
                                                                               aria-hidden="true"/>
                                                                        </Link>
                                                                    </li>
                                                                    <li>
                                                                        <Link to="#">
                                                                            <i
                                                                                className="fa fa-heart-o"
                                                                                aria-hidden="true"
                                                                            />
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

                                                                    <span style={{width: "80%"}}/>
                                                                </div>
                                                            </div>
                                                            <p className="price">
                                                                <del>$95.00</del>
                                                                $85.00
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-3 col-md-6 col-sm-6">
                                                    <div className="product-column">
                                                        <div className="product-column-pic">
                                                            <Link to="#" className="product_thumb">
                                                                <img src="./assets/images/400x600.jpg" alt="image"/>
                                                            </Link>
                                                            <div className="off">-20%</div>
                                                            <div className="product-buttons">
                                                                <ul>
                                                                    <li>
                                                                        <Link to="#">
                                                                            <i
                                                                                className="fab fa-opencart"
                                                                                aria-hidden="true"
                                                                            />
                                                                        </Link>
                                                                    </li>
                                                                    <li>
                                                                        <Link to="#">
                                                                            <i className="fa fa-eye"
                                                                               aria-hidden="true"/>
                                                                        </Link>
                                                                    </li>
                                                                    <li>
                                                                        <Link to="#">
                                                                            <i
                                                                                className="fa fa-heart-o"
                                                                                aria-hidden="true"
                                                                            />
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

                                                                    <span style={{width: "60%"}}/>
                                                                </div>
                                                            </div>
                                                            <p className="price">
                                                                <del>$82.00</del>
                                                                $75.00
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="tab-pane fade" id="featureproduct">
                                            <div className="row">
                                                <div className="col-lg-3 col-md-6">
                                                    <div className="product-column">
                                                        <div className="product-column-pic">
                                                            <Link to="#" className="product_thumb">
                                                                <img src="./assets/images/400x600.jpg" alt="image"/>
                                                            </Link>
                                                            <div className="off">-20%</div>
                                                            <div className="product-buttons">
                                                                <ul>
                                                                    <li>
                                                                        <Link to="#">
                                                                            <i
                                                                                className="fab fa-opencart"
                                                                                aria-hidden="true"
                                                                            />
                                                                        </Link>
                                                                    </li>
                                                                    <li>
                                                                        <Link to="#">
                                                                            <i className="fa fa-eye"
                                                                               aria-hidden="true"/>
                                                                        </Link>
                                                                    </li>
                                                                    <li>
                                                                        <Link to="#">
                                                                            <i
                                                                                className="fa fa-heart-o"
                                                                                aria-hidden="true"
                                                                            />
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

                                                                    <span style={{width: "60%"}}/>
                                                                </div>
                                                            </div>
                                                            <p className="price">
                                                                <del>$82.00</del>
                                                                $75.00
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-3 col-md-6">
                                                    <div className="product-column">
                                                        <div className="product-column-pic">
                                                            <Link to="#" className="product_thumb">
                                                                <img src="./assets/images/400x600.jpg" alt="image"/>
                                                            </Link>
                                                            <div className="off">-20%</div>
                                                            <div className="product-buttons">
                                                                <ul>
                                                                    <li>
                                                                        <Link to="#">
                                                                            <i
                                                                                className="fab fa-opencart"
                                                                                aria-hidden="true"
                                                                            />
                                                                        </Link>
                                                                    </li>
                                                                    <li>
                                                                        <Link to="#">
                                                                            <i className="fa fa-eye"
                                                                               aria-hidden="true"/>
                                                                        </Link>
                                                                    </li>
                                                                    <li>
                                                                        <Link to="#">
                                                                            <i
                                                                                className="fa fa-heart-o"
                                                                                aria-hidden="true"
                                                                            />
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

                                                                    <span style={{width: "60%"}}/>
                                                                </div>
                                                            </div>
                                                            <p className="price">
                                                                <del>$82.00</del>
                                                                $75.00
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-3 col-md-6">
                                                    <div className="product-column">
                                                        <div className="product-column-pic">
                                                            <Link className="product_thumb">
                                                                <img src="./assets/images/400x600.jpg" alt="image"/>
                                                            </Link>
                                                            <div className="off">-30%</div>
                                                            <div className="product-buttons">
                                                                <ul>
                                                                    <li>
                                                                        <Link to="#">
                                                                            <i
                                                                                className="fab fa-opencart"
                                                                                aria-hidden="true"
                                                                            />
                                                                        </Link>
                                                                    </li>
                                                                    <li>
                                                                        <Link to="#">
                                                                            <i className="fa fa-eye"
                                                                               aria-hidden="true"/>
                                                                        </Link>
                                                                    </li>
                                                                    <li>
                                                                        <Link to="#">
                                                                            <i
                                                                                className="fa fa-heart-o"
                                                                                aria-hidden="true"
                                                                            />
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

                                                                    <span style={{width: "80%"}}/>
                                                                </div>
                                                            </div>
                                                            <p className="price">
                                                                <del>$100.00</del>
                                                                $95.00
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-3 col-md-6">
                                                    <div className="product-column">
                                                        <div className="product-column-pic">
                                                            <Link to="#" className="product_thumb">
                                                                <img src="./assets/images/400x600.jpg" alt="image"/>
                                                            </Link>
                                                            <div className="product-buttons">
                                                                <ul>
                                                                    <li>
                                                                        <Link to="#">
                                                                            <i
                                                                                className="fab fa-opencart"
                                                                                aria-hidden="true"
                                                                            />
                                                                        </Link>
                                                                    </li>
                                                                    <li>
                                                                        <Link to="#">
                                                                            <i className="fa fa-eye"
                                                                               aria-hidden="true"/>
                                                                        </Link>
                                                                    </li>
                                                                    <li>
                                                                        <Link to="#">
                                                                            <i
                                                                                className="fa fa-heart-o"
                                                                                aria-hidden="true"
                                                                            />
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

                                                                    <span style={{width: "60%"}}/>
                                                                </div>
                                                            </div>
                                                            <p className="price"> $75.00</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <Footer1 />
            </>
        );
    }
}


export default Home1;