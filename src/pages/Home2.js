import React from 'react';
import Header2 from "../components/header/Header2";
import Footer2 from "../components/footer/Footer2";
import { Link } from "react-router-dom";

class Home2 extends React.Component {
    render() {
        return (
            <>
                <Header2 />
                {/* Intro Banner */}
                <section className="intro_banner parallex-bg" style={{ backgroundImage: "url(./assets/images/1920x730.jpg)" }}>
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
                {/* Offer and Sale */}
                <section className="section_padding product_offer_sale">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4 col-md-12">
                                <div className="offer_bg special_offer">
                                    <Link to="#" className="btn btn-sm">Special Offers</Link>
                                    <div className="special_offer_text">
                                        <h2><span>T-Shirts</span></h2>
                                        <h4><span>UP TO</span></h4>
                                        <h1><span>70%</span></h1>
                                        <h5><span>OFF</span></h5>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-12">
                                <div className="offer_bg big_sale">
                                    <div className="sale_round">
                                        <div className="sale_text white-text">
                                            <h2>Big Sale </h2>
                                            <h1>30% <span>Off</span></h1>
                                        </div>
                                    </div>
                                    <Link to="#" className="btn btn-sm">Shopping Now !</Link>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-12">
                                <div className="offer_bg big_sale2">
                                    <h1><span>OFF</span>85%</h1>
                                    <div className="clear" />
                                    <Link to="#" className="btn-link">Shop Now</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Offer and Sale ends */}
                {/* Product Deals and Feature Products*/}
                <section className="section_padding pt-0">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4">
                                {/* Product Deals Column*/}
                                <div className="product_deal_column">
                                    <h2>Deals of the Day</h2>
                                    <ul className="product_list">
                                        <li>
                                            <Link to="#" className="thumb">
                                                <figure>
                                                    <img src="./assets/images/150x150.jpg" alt="image" />
                                                </figure>
                                            </Link>
                                            <h6><Link to="#">Halter Jumpsuit</Link></h6>
                                            <div className="rating_center rating_left">
                                                <div className="star-rating">
                                                    <span style={{ width: "60%" }} />
                                                </div>
                                            </div>
                                            <p className="price"><del>$82.00</del> $75.00</p>
                                        </li>
                                        <li>
                                            <Link to="#" className="thumb">
                                                <figure>
                                                    <img src="./assets/images/150x150.jpg" alt="image" />
                                                </figure>
                                            </Link>
                                            <h6><Link to="#">Wrist Watchest</Link></h6>
                                            <div className="rating_center rating_left">
                                                <div className="star-rating">
                                                    <span style={{ width: "80%" }} />
                                                </div>
                                            </div>
                                            <p className="price"><del>$95.00</del> $85.00</p>
                                        </li>
                                        <li>
                                            <Link to="#" className="thumb">
                                                <figure>
                                                    <img src="./assets/images/150x150.jpg" alt="image" />
                                                </figure>
                                            </Link>
                                            <h6><Link to="#">Laptop Bag</Link></h6>
                                            <div className="rating_center rating_left">
                                                <div className="star-rating">
                                                    <span style={{ width: "60%" }} />
                                                </div>
                                            </div>
                                            <p className="price"><del>$75.00</del> $65.00</p>
                                        </li>
                                        <li>
                                            <Link to="#" className="thumb">
                                                <figure>
                                                    <img src="./assets/images/150x150.jpg" alt="image" />
                                                </figure>
                                            </Link>
                                            <h6><Link to="#">Jumpsuit</Link></h6>
                                            <div className="rating_center rating_left">
                                                <div className="star-rating">
                                                    <span style={{ width: "60%" }} />
                                                </div>
                                            </div>
                                            <p className="price"><del>$82.00</del> $75.00</p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-8">
                                <div className="feature_product">
                                    <div className="section_header">
                                        <h4>
                                            <span>Featured Products</span>
                                            <Link to="#" className="btn-link btn-link2">
                                                View All<i className="fa fa-angle-double-right" aria-hidden="true" />
                                            </Link>
                                        </h4>
                                    </div>
                                    <div className="row">
                                        <div className="col-lg-4 col-md-4 col-sm-4 ">
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
                                                    <h6><Link to="#">Halter Jumpsuit in Navy</Link></h6>
                                                    <div className="rating_center">
                                                        <div className="star-rating">
                                                            <span style={{ width: "60%" }} />
                                                        </div>
                                                    </div>
                                                    <p className="price"><del>$82.00</del> $75.00</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-4 col-sm-4">
                                            <div className="product-column">
                                                <div className="product-column-pic">
                                                    <Link to="#" className="product_thumb">
                                                        <img src="./assets/images/400x600.jpg" alt="image" />
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
                                                    <h6><Link to="#">Special Watch</Link></h6>
                                                    <div className="rating_center">
                                                        <div className="star-rating">
                                                            <span style={{ width: "80%" }} />
                                                        </div>
                                                    </div>
                                                    <p className="price"> $75.00</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-4 col-sm-4">
                                            <div className="product-column">
                                                <div className="product-column-pic">
                                                    <Link to="#" className="product_thumb">
                                                        <img src="./assets/images/400x600.jpg" alt="image" />
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
                                                    <h6><Link to="#">Laptop Bag</Link></h6>
                                                    <div className="rating_center">
                                                        <div className="star-rating">
                                                            <span style={{ width: "100%" }} />
                                                        </div>
                                                    </div>
                                                    <p className="price"><del>$95.00</del> $85.00</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Product Deals and Feature Products ends*/}
                {/* Product Sale */}
                <section className="section_padding pt-0">
                    <div className="container">
                        <div className="row">
                            {/* Product Sale Item*/}
                            <div className="col-lg-6">
                                <div className="sale_3 white-text">
                                    <h2>Extra 20% Off </h2>
                                    <h1>Sale</h1>
                                    <Link to="#" className="btn btn-sm text-uppercase white_btn">Shop Now</Link>
                                </div>
                            </div>
                            {/* Product Sale Item*/}
                            <div className="col-lg-6">
                                <div className="sale_4 white-text">
                                    <h3>From $ 20.99</h3>
                                    <h1><span>Best Choice For</span></h1>
                                    <h2><span>Vacation</span></h2>
                                    <p>Exclusive collection just now available</p>
                                    <Link to="#" className="btn btn-sm text-uppercase white_btn">Shop Now</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Product Sale ends*/}
                {/* Popular Categories */}
                <section className="section_padding pt-0 popular_categories">
                    <div className="container">
                        <div className="section_header_style2 text-center">
                            <h4>Popular Categories</h4>
                        </div>
                    </div>
                    <div id="popular_category" className="products_slider_style2">
                        <div className="owl-carousel owl-theme">
                            <div className="item">
                                <div className="category_item">
                                    <img src="./assets/images/550x400.jpg" alt="image" />
                                    <div className="cat_name">
                                        <Link to="#" className="btn btn-sm white_btn">Jewelry &amp; Watches</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="category_item">
                                    <img src="./assets/images/550x400.jpg" alt="image" />
                                    <div className="cat_name">
                                        <Link to="#" className="btn btn-sm white_btn">Woman Clothes</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="category_item">
                                    <img src="./assets/images/550x400.jpg" alt="image" />
                                    <div className="cat_name">
                                        <Link to="#" className="btn btn-sm white_btn">Kids Shoes</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="category_item">
                                    <img src="./assets/images/550x400.jpg" alt="image" />
                                    <div className="cat_name">
                                        <Link to="#" className="btn btn-sm white_btn">Man Clothes</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="category_item">
                                    <img src="./assets/images/550x400.jpg" alt="image" />
                                    <div className="cat_name">
                                        <Link to="#" className="btn btn-sm white_btn">Jewelry &amp; Watches</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="category_item">
                                    <img src="./assets/images/550x400.jpg" alt="image" />
                                    <div className="cat_name">
                                        <Link to="#" className="btn btn-sm white_btn">Woman Clothes</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Popular Categories ends */}
                {/* Product New */}
                <section className="section_padding pt-0 new-products_slider">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="section_header text-center">
                                    <h4><span>New Products</span></h4>
                                </div>
                                {/* Product Owl Slider*/}
                                <div id="new-products_slider" className="products_slider_style2">
                                    <div className="owl-carousel owl-theme">
                                        <div className="item">
                                            <div className="product-column">
                                                <div className="product-column-pic">
                                                    <Link to="#" className="product_thumb">
                                                        <img src="./assets/images/400x600.jpg" alt="image" />
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
                                                    <h6><Link to="#">Halter Jumpsuit in Navy</Link></h6>
                                                    <div className="rating_center">
                                                        <div className="star-rating">
                                                            <span style={{ width: "60%" }} />
                                                        </div>
                                                    </div>
                                                    <p className="price"><del>$82.00</del> $75.00</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="item">
                                            <div className="product-column out_of_column">
                                                <div className="product-column-pic">
                                                    <Link className="product_thumb">
                                                        <img src="./assets/images/400x600.jpg" alt="image" />
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
                                                    <h6><Link to="#">Men Suit</Link></h6>
                                                    <div className="rating_center">
                                                        <div className="star-rating">
                                                            <span style={{ width: "80%" }} />
                                                        </div>
                                                    </div>
                                                    <p className="price"><del>$100.00</del> $95.00</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="item">
                                            <div className="product-column">
                                                <div className="product-column-pic">
                                                    <Link className="product_thumb">
                                                        <img src="./assets/images/400x600.jpg" alt="image" />
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
                                                    <h6><Link to="#">Cotton Rollup Sleeves</Link></h6>
                                                    <div className="rating_center">
                                                        <div className="star-rating">
                                                            <span style={{ width: "80%" }} />
                                                        </div>
                                                    </div>
                                                    <p className="price"><del>$95.00</del> $85.00</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="item">
                                            <div className="product-column">
                                                <div className="product-column-pic">
                                                    <Link to="#" className="product_thumb">
                                                        <img src="./assets/images/400x600.jpg" alt="image" />
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
                                                    <h6><Link to="#">Special Watch</Link></h6>
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
                                                        <img src="./assets/images/400x600.jpg" alt="image" />
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
                                                    <h6><Link to="#">Golden Triangle Jacket</Link></h6>
                                                    <div className="rating_center">
                                                        <div className="star-rating">
                                                            <span style={{ width: "80%" }} />
                                                        </div>
                                                    </div>
                                                    <p className="price"><del>$100.00</del> $95.00</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="item">
                                            <div className="product-column">
                                                <div className="product-column-pic">
                                                    <Link to="#" className="product_thumb">
                                                        <img src="./assets/images/400x600.jpg" alt="image" />
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
                                                    <h6><Link to="#">Variety FullSolid Men's</Link></h6>
                                                    <div className="rating_center">
                                                        <div className="star-rating">
                                                            <span style={{ width: "60%" }} />
                                                        </div>
                                                    </div>
                                                    <p className="price"><del>$82.00</del> $75.00</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* Product Owl Slider ends */}
                            </div>
                        </div>
                    </div>
                </section>
                {/* Product New ends */}
                {/* Street Style */}
                <section className="section_padding pt-0 street_style_section">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-lg-6 p-0">
                                <div className="street_style_column white-text street_bg1">
                                    <div className="dark-overlay" />
                                    <div className="div_zindex content_center">
                                        <h1 className="font-weight-normal">Street Style is back in fashion</h1>
                                        <h2 className="font-weight-normal">Quality Knitwear for Men</h2>
                                        <Link to="#" className="btn btn-sm text-uppercase white_btn">Shopping Now</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 p-0">
                                <div className="street_style_column white-text street_bg2">
                                    <div className="dark-overlay" />
                                    <div className="div_zindex content_center">
                                        <h1 className="font-weight-normal">Street Style fashion</h1>
                                        <h2 className="font-weight-normal">Quality Knitwear for Women's</h2>
                                        <Link to="#" className="btn btn-sm text-uppercase white_btn">Shopping Now</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Street Style ends */}
                {/* News and Blogs */}
                <section className="section_padding pt-0 news_blogs">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4">
                                {/* Style Every Day*/}
                                <div className="style_everyday">
                                    <span className="off">20% off</span>
                                    <div className="style_shop white-text">
                                        <h1 className="font_36_normal">Style For Every Day </h1>
                                        <Link to="#" className="btn-link">
                                            Shop Now<i className="fa fa-angle-double-right" aria-hidden="true" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-8">
                                {/* News & Blog*/}
                                <div className="section_header_style2">
                                    <h2>Our News &amp; Blog</h2>
                                </div>
                                <div className="row">
                                    <div className="col-lg-6">
                                        {/* Blog Item*/}
                                        <article className="blog">
                                            <div className="blog_thumb">
                                                <Link to="#"><img src="./assets/images/900x600.jpg" alt="image" /></Link>
                                            </div>
                                            <div className="blog_text">
                                                <h4><Link to="#">The standard chunk of Lorem Ipsum</Link></h4>
                                                <p>
                                                    Contrary to popular belief, Lorem Ipsum is not simply random
                                                    text. It has roots in a piece...
                                                </p>
                                            </div>
                                        </article>
                                    </div>
                                    <div className="col-lg-6">
                                        {/* Blog Item*/}
                                        <article className="blog">
                                            <div className="blog_thumb">
                                                <Link to="#"><img src="./assets/images/900x600.jpg" alt="image" /></Link>
                                            </div>
                                            <div className="blog_text">
                                                <h4><Link to="#">There are many variations of passages</Link></h4>
                                                <p>
                                                    Contrary to popular belief, Lorem Ipsum is not simply random
                                                    text. It has roots in a piece...
                                                </p>
                                            </div>
                                        </article>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* News and Blogs ends */}
                {/* Clients */}
                <div className="section_padding our_clients">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div id="clients_slider" className="next_prev_style2">
                                    <div className="owl-carousel owl-theme">
                                        <div className="item">
                                            <figure><img src="./assets/images/263x163.png" alt="image" /></figure>
                                        </div>
                                        <div className="item">
                                            <figure><img src="./assets/images/263x163.png" alt="image" /></figure>
                                        </div>
                                        <div className="item">
                                            <figure><img src="./assets/images/263x163.png" alt="image" /></figure>
                                        </div>
                                        <div className="item">
                                            <figure><img src="./assets/images/263x163.png" alt="image" /></figure>
                                        </div>
                                        <div className="item">
                                            <figure><img src="./assets/images/263x163.png" alt="image" /></figure>
                                        </div>
                                        <div className="item">
                                            <figure><img src="./assets/images/263x163.png" alt="image" /></figure>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Clients ends */}
                <Footer2 />
            </>
        );
    }
}


export default Home2;