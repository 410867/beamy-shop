import React from 'react';
import Header2 from "../components/header/Header2";
import Footer2 from "../components/footer/Footer2";
import {Link} from "react-router-dom";

class ProductDetail3 extends React.Component {
    render() {
        return (
            <>
                <Header2 />
                {/* Product Detail Product Slider 3 */}
                <div className="product_detail_slider2">
                    <div id="detail_slider3" className="flexslider">
                        <ul className="slides">
                            <li>

                                <img src="./assets/images/1920x730.jpg" alt="image" />
                            </li>
                            <li>

                                <img src="./assets/images/1920x730.jpg" alt="image" />
                            </li>
                            <li>

                                <img src="./assets/images/1920x730.jpg" alt="image" />
                            </li>
                            <li>

                                <img src="./assets/images/1920x730.jpg" alt="image" />
                            </li>
                        </ul>
                    </div>
                </div>
                {/* Product Detail Product Slider 3 ends */}
                {/* Productes Detail Sections */}
                <section className="section_padding_small pt-0 product_detail_3_content">
                    <div className="container">
                        {/* Productes Detail Row*/}
                        <div className="row">
                            <div className="col-lg-6">
                                {/* Productes Detail Slider Thumb */}
                                <div id="detail_carousel3" className="flexslider">
                                    <ul className="slides">
                                        <li>

                                            <img
                                                src="./assets/images/150x150.jpg"
                                                alt="image"
                                            />
                                        </li>
                                        <li>

                                            <img
                                                src="./assets/images/150x150.jpg"
                                                alt="image"
                                            />
                                        </li>
                                        <li>

                                            <img
                                                src="./assets/images/150x150.jpg"
                                                alt="image"
                                            />
                                        </li>
                                        <li>

                                            <img
                                                src="./assets/images/150x150.jpg"
                                                alt="image"
                                            />
                                        </li>
                                    </ul>
                                </div>
                                {/* Productes Detail Slider Thumb */}
                                <div className="clear" />
                                <div className="product-share">
                                    <span>Share</span>
                                    <ul className="social_group_style">
                                        <li>

                                            <Link to="#">
                                                <i className="fab fa-facebook" aria-hidden="true" />
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
                                <div className="clear" />
                                <div className="product-meta">
                                    <p>
                                        <span>Categories: </span> Bags, Woman
                                    </p>
                                    <p>
                                        <span>Tag: </span> Bags, Woman
                                    </p>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="product-description">
                                    <h1 className="font_30_normal">
                                        Drapes Cotton Printed Salwar Suit
                                    </h1>
                                    <p>
                                        It is a long established fact that a reader will be distracted by
                                        the readable content of a page when looking at its layout. The
                                        point of using.
                                    </p>
                                    <div className="product-price">

                                        <del>$82</del> <span className="price">$75</span>
                                        <span className="discount">-70%</span>
                                    </div>
                                    <div className="add-wish-list">

                                        <Link to="#" className="addtowishlist">
                                            <i className="fa fa-heart-o" aria-hidden="true" /> Add to
                                            Wishlist
                                        </Link>
                                    </div>
                                    <div className="product-select">
                                        <div className="quantity">
                                            <form>
                                                <label>Quantity</label>
                                                <div className="product-quantity">
                                                    <button className="qtyminus">-</button>
                                                    <input
                                                        type="text"
                                                        name="quantity"
                                                        defaultValue={1}
                                                        className="qty form-control"
                                                    />
                                                    <button className="qtyplus">+</button>
                                                </div>
                                            </form>
                                        </div>
                                        <div className="select-color">
                                            <label>Colors</label>
                                            <div className="custom-radios">
                                                <div className="custom_radio_block">
                                                    <input
                                                        type="radio"
                                                        id="color-1"
                                                        name="color"
                                                        defaultValue="color-1"
                                                        defaultChecked=""
                                                    />
                                                    <label htmlFor="color-1">

                                                        <span style={{ backgroundColor: "#b0905c" }}>

                                                            <i className="fa fa-check" aria-hidden="true" />
                  </span>
                                                    </label>
                                                </div>
                                                <div className="custom_radio_block">
                                                    <input
                                                        type="radio"
                                                        id="color-2"
                                                        name="color"
                                                        defaultValue="color-2"
                                                    />
                                                    <label htmlFor="color-2">

                                                        <span style={{ backgroundColor: "#873669" }}>

                                                            <i className="fa fa-check" aria-hidden="true" />
                  </span>
                                                    </label>
                                                </div>
                                                <div className="custom_radio_block">
                                                    <input
                                                        type="radio"
                                                        id="color-3"
                                                        name="color"
                                                        defaultValue="color-3"
                                                    />
                                                    <label htmlFor="color-3">

                                                        <span style={{ backgroundColor: "#23294d" }}>

                                                            <i className="fa fa-check" aria-hidden="true" />
                  </span>
                                                    </label>
                                                </div>
                                                <div className="custom_radio_block">
                                                    <input
                                                        type="radio"
                                                        id="color-4"
                                                        name="color"
                                                        defaultValue="color-4"
                                                    />
                                                    <label htmlFor="color-4">

                                                        <span style={{ backgroundColor: "#fed859" }}>

                                                            <i className="fa fa-check" aria-hidden="true" />
                  </span>
                                                    </label>
                                                </div>
                                                <div className="custom_radio_block">
                                                    <input
                                                        type="radio"
                                                        id="color-5"
                                                        name="color"
                                                        defaultValue="color-5"
                                                    />
                                                    <label htmlFor="color-5">

                                                        <span style={{ backgroundColor: "#f6ccb9" }}>

                                                            <i className="fa fa-check" aria-hidden="true" />
                  </span>
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="clear" />
                                    <div className="product-buttons-group">

                                        <Link to="#" className="btn">
                                            <i className="fab fa-opencart" aria-hidden="true" /> Add To Cart
                                        </Link>
                                        <Link to="#" className="btn buy_now">
                                            Buy Now
                                            <i className="fa fa-location-arrow" aria-hidden="true">

                                            </i>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Productes Detail Sections ends */}
                {/* Productes Detail page 3 Tab Sections */}
                <section className="section_padding gray_bg product_detail_3_tab">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                {/* Productes Description */}
                                <div className="product_detail_tab">
                                    <ul className="nav nav-tabs">
                                        <li className="nav-item">
                                            <Link
                                                to="#product_discription"
                                                data-bs-toggle="tab"
                                                className="nav-link active"
                                                aria-expanded="false"
                                            >
                                                Description
                                            </Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link
                                                to="#review"
                                                data-bs-toggle="tab"
                                                className="nav-link"
                                                aria-expanded="true"
                                            >
                                                Review (2)
                                            </Link>
                                        </li>
                                    </ul>
                                    <div className="tab-content">
                                        <div
                                            className="tab-pane fade active show"
                                            id="product_discription"
                                        >
                                            <p>
                                                Lorem Ipsum is simply dummy text of the printing and
                                                typesetting industry. Lorem Ipsum has been the industry's
                                                standard dummy text ever since the 1500s, when an unknown
                                                printer took a galley of type and scrambled it to make a type
                                                specimen book. It has survived not only five centuries, but
                                                also the leap into electronic typesetting, remaining
                                                essentially unchanged.
                                            </p>
                                            <p>
                                                Lorem Ipsum is simply dummy text of the printing and
                                                typesetting industry. Lorem Ipsum has been the industry's
                                                standard dummy text ever since the 1500s, when an unknown
                                                printer took a galley of type and scrambled it to make a type
                                                specimen book. It has survived not only five centuries, but
                                                also the leap into electronic typesetting, remaining
                                                essentially unchanged.
                                            </p>
                                            <p>
                                                Lorem Ipsum is simply dummy text of the printing and
                                                typesetting industry. Lorem Ipsum has been the industry's
                                                standard dummy text ever since the 1500s, when an unknown
                                                printer took a galley of type and scrambled it to make a type
                                                specimen book. It has survived not only five centuries, but
                                                also the leap into electronic typesetting, remaining
                                                essentially unchanged.
                                            </p>
                                            <div className="table-responsive">
                                                <table className="table table-bordered">
                                                    <thead className="thead-default">
                                                    <tr>
                                                        <th style={{ width: "20%" }}>Color</th>
                                                        <th style={{ width: "15%" }}>Weight</th>
                                                        <th style={{ width: "15%" }}>Washcare</th>
                                                        <th style={{ width: "15%" }}>Composition</th>
                                                        <th style={{ width: "45%" }}>Other info</th>
                                                    </tr>
                                                    </thead>
                                                    <tbody>
                                                    <tr>
                                                        <td>Red, Green, Blue, Purple</td>
                                                        <td>400 gm</td>
                                                        <td>Dry Clean</td>
                                                        <td>100% Polyester</td>
                                                        <td>
                                                            Lorem Ipsum is simply dummy text of the printing and
                                                            typesetting industry.
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>Red, Green, Blue, Purple</td>
                                                        <td>400 gm</td>
                                                        <td>Dry Clean</td>
                                                        <td>100% Polyester</td>
                                                        <td>
                                                            Lorem Ipsum is simply dummy text of the printing and
                                                            typesetting industry.
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>Red, Green, Blue, Purple</td>
                                                        <td>400 gm</td>
                                                        <td>Dry Clean</td>
                                                        <td>100% Polyester</td>
                                                        <td>
                                                            Lorem Ipsum is simply dummy text of the printing and
                                                            typesetting industry.
                                                        </td>
                                                    </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                            <p>
                                                Lorem Ipsum is simply dummy text of the printing and
                                                typesetting industry. Lorem Ipsum has been the industry's
                                                standard dummy text ever since the 1500s, when an unknown
                                                printer took a galley of type and scrambled it to make a type
                                                specimen book. It has survived not only five centuries, but
                                                also the leap into electronic typesetting, remaining
                                                essentially unchanged.
                                            </p>
                                        </div>
                                        <div className="tab-pane" id="review">
                                            <div className="articale_comments">
                                                <div id="comments">
                                                    <h4 className="block-head">2 Review (2)</h4>
                                                    <ul className="commentlist">
                                                        <li className="comment">
                                                            <div className="comment-body">
                                                                <div className="star-rating">

                                                                    <span style={{ width: "100%" }} />
                                                                </div>
                                                                <div className="comment-author">

                                                                    <img
                                                                        className="avatar"
                                                                        src="./assets/images/400x400.jpg"
                                                                        alt="image"
                                                                    />
                                                                    <span className="fn">John Smith</span>
                                                                </div>
                                                                <div className="comment-meta commentmetadata">

                                                                    <Link to="#">Feb 23, 2021 at 12:52 pm</Link>
                                                                </div>
                                                                <div className="comment-content">
                                                                    <p>Wow Amazing!</p>
                                                                </div>
                                                                <div className="reply">

                                                                    <Link to="#" className="btn-link btn-link2">
                                                                        <i className="fa fa-reply" aria-hidden="true" />
                                                                        Reply
                                                                    </Link>
                                                                </div>
                                                            </div>
                                                            <ul className="children">
                                                                <li className="comment">
                                                                    <div className="comment-body">
                                                                        <div className="comment-author">

                                                                            <img
                                                                                className="avatar"
                                                                                src="./assets/images/400x400.jpg"
                                                                                alt="image"
                                                                            />
                                                                            <span className="fn">John kerry</span>
                                                                        </div>
                                                                        <div className="comment-meta commentmetadata">

                                                                            <Link to="#">Feb 23, 2021 at 12:52 pm</Link>
                                                                        </div>
                                                                        <div className="comment-content">
                                                                            <p>Thanks</p>
                                                                        </div>
                                                                        <div className="reply">

                                                                            <Link to="#" className="btn-link btn-link2">
                                                                                <i
                                                                                    className="fa fa-reply"
                                                                                    aria-hidden="true"
                                                                                />
                                                                                Reply
                                                                            </Link>
                                                                        </div>
                                                                    </div>
                                                                </li>
                                                            </ul>
                                                        </li>
                                                        <li className="comment">
                                                            <div className="comment-body">
                                                                <div className="star-rating">

                                                                    <span style={{ width: "60%" }} />
                                                                </div>
                                                                <div className="comment-author">

                                                                    <img
                                                                        className="avatar"
                                                                        src="./assets/images/400x400.jpg"
                                                                        alt="image"
                                                                    />
                                                                    <span className="fn">John Smith</span>
                                                                </div>
                                                                <div className="comment-meta commentmetadata">

                                                                    <Link to="#">Feb 23, 2021 at 12:52 pm</Link>
                                                                </div>
                                                                <div className="comment-content">
                                                                    <p>Wow Special!</p>
                                                                </div>
                                                                <div className="reply">

                                                                    <Link to="#" className="btn-link btn-link2">
                                                                        <i className="fa fa-reply" aria-hidden="true" />
                                                                        Reply
                                                                    </Link>
                                                                </div>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="comments-area">
                                                <h3>Leave a Reply </h3>
                                                <form>
                                                    <p className="comment-notes">

                                                        <span id="email-notes">
                    Your email address will not be published.
                  </span>
                                                        Required fields are marked
                                                        <span className="required">*</span>
                                                    </p>
                                                    <div className="clear" />
                                                    <p>

                                                        <span className="rating">
                    <input
                        type="radio"
                        id="star5"
                        name="rating"
                        defaultValue={5}
                    />
                    <label
                        className="full"
                        htmlFor="star5"
                        title="Awesome - 5 stars"
                    />
                    <input
                        type="radio"
                        id="star4half"
                        name="rating"
                        defaultValue="4 and a half"
                    />
                    <label
                        className="half"
                        htmlFor="star4half"
                        title="Pretty good - 4.5 stars"
                    />
                    <input
                        type="radio"
                        id="star4"
                        name="rating"
                        defaultValue={4}
                    />
                    <label
                        className="full"
                        htmlFor="star4"
                        title="Pretty good - 4 stars"
                    />
                    <input
                        type="radio"
                        id="star3half"
                        name="rating"
                        defaultValue="3 and a half"
                    />
                    <label
                        className="half"
                        htmlFor="star3half"
                        title="Average - 3.5 stars"
                    />
                    <input
                        type="radio"
                        id="star3"
                        name="rating"
                        defaultValue={3}
                    />
                    <label
                        className="full"
                        htmlFor="star3"
                        title="Average - 3 stars"
                    />
                    <input
                        type="radio"
                        id="star2half"
                        name="rating"
                        defaultValue="2 and a half"
                    />
                    <label
                        className="half"
                        htmlFor="star2half"
                        title="bad - 2.5 stars"
                    />
                    <input
                        type="radio"
                        id="star2"
                        name="rating"
                        defaultValue={2}
                    />
                    <label
                        className="full"
                        htmlFor="star2"
                        title="bad - 2 stars"
                    />
                    <input
                        type="radio"
                        id="star1half"
                        name="rating"
                        defaultValue="1 and a half"
                    />
                    <label
                        className="half"
                        htmlFor="star1half"
                        title="bad - 1.5 stars"
                    />
                    <input
                        type="radio"
                        id="star1"
                        name="rating"
                        defaultValue={1}
                    />
                    <label
                        className="full"
                        htmlFor="star1"
                        title="Sucks big time - 1 star"
                    />
                    <input
                        type="radio"
                        id="starhalf"
                        name="rating"
                        defaultValue="half"
                    />
                    <label
                        className="half"
                        htmlFor="starhalf"
                        title="Sucks big time - 0.5 stars"
                    />
                  </span>
                                                    </p>
                                                    <div className="clear" />
                                                    <div className="row">
                                                        <div className="col-sm-12">
                                                            <div className="form-group">
                                                                <label>
                                                                    Your Review <span className="required">*</span>
                                                                </label>
                                                                <textarea required="" defaultValue={""} />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col-sm-6">
                                                            <div className="form-group">
                                                                <label>
                                                                    Name <span className="required">*</span>
                                                                </label>
                                                                <input type="text" defaultValue="" required="" />
                                                            </div>
                                                        </div>
                                                        <div className="col-sm-6">
                                                            <div className="form-group">
                                                                <label>
                                                                    Email <span className="required">*</span>
                                                                </label>
                                                                <input type="email" defaultValue="" required="" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col-sm-12">
                                                            <input type="submit" defaultValue="Submit" />
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* Productes Description */}
                            </div>
                        </div>
                    </div>
                </section>
                {/* Productes Detail page 3 Tab Sections ends */}
                {/* Similar Product */}
                <section className="section_padding similar_products">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="section_header text-center">
                                    <h4>
                                        <span>Similar Products</span>
                                    </h4>
                                </div>
                                {/* Product Owl Slider*/}
                                <div id="similar_products_slider" className="next_prev_style2">
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
                                                </div>
                                            </div>
                                        </div>
                                        <div className="item">
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
                {/* Similar Product ends */}
                <Footer2 />
            </>
        );
    }
}


export default ProductDetail3;