import React from 'react';
import Header2 from "../components/header/Header2";
import Footer2 from "../components/footer/Footer2";
import { Link } from "react-router-dom";

class Home1 extends React.Component {
    render() {
        return (
            <>
                <Header2 />
                    {/* Intro Heading */}
                    <section className="section_padding gray_bg intro_heading">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <h1>Wishlist</h1>
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item">
                                            <Link to="#">Home</Link>
                                        </li>
                                        <li className="breadcrumb-item active">Wishlist</li>
                                    </ol>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* Intro Heading Ends */}
                    {/* Wishlist Detail */}
                    <div className="section_padding wishlist_detail">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="cart_table">
                                        <div className="table-responsive">
                                            <table className="table table-striped">
                                                <thead className="thead-default">
                                                <tr>
                                                    <th>&nbsp;</th>
                                                    <th>Product</th>
                                                    <th>Name</th>
                                                    <th>Unit Price</th>
                                                    <th>Stock Status</th>
                                                    <th>&nbsp;</th>
                                                </tr>
                                                </thead>
                                                <tbody>
                                                <tr>
                                                    <td className="product-delet">
                                                        <Link to="#">
                                                            <i className="fa fa-trash-o" aria-hidden="true" />
                                                        </Link>
                                                    </td>
                                                    <td className="product-thumbnail">
                                                        <Link to="#">
                                                            <img
                                                                src="./assets/images/150x150.jpg"
                                                                alt="image"
                                                            />
                                                        </Link>
                                                    </td>
                                                    <td className="product-name">Halter Jumpsuit in Navy</td>
                                                    <td className="unit_price">
                                                        <del>$85.00</del> <span className="price">$75.00</span>
                                                    </td>
                                                    <td className="prd_status">
                                                        <span className="instock">In Stock</span>
                                                    </td>
                                                    <td className="prd_action">
                                                        <Link to="#" className="btn outline btn-sm">
                                                            <i className="fab fa-opencart" aria-hidden="true" /> Add
                                                            To Cart
                                                        </Link>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className="product-delet">
                                                        <Link to="#">
                                                            <i className="fa fa-trash-o" aria-hidden="true" />
                                                        </Link>
                                                    </td>
                                                    <td className="product-thumbnail">
                                                        <Link to="#">
                                                            <img
                                                                src="./assets/images/150x150.jpg"
                                                                alt="image"
                                                            />
                                                        </Link>
                                                    </td>
                                                    <td className="product-name">Wrist Watches</td>
                                                    <td className="unit_price">
                                                        <del>$185.00</del> <span className="price">$160.00</span>
                                                    </td>
                                                    <td className="prd_status">
                                                        <span className="instock">In Stock</span>
                                                    </td>
                                                    <td className="prd_action">
                                                        <Link to="#" className="btn outline btn-sm">
                                                            <i className="fab fa-opencart" aria-hidden="true" /> Add
                                                            To Cart
                                                        </Link>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className="product-delet">
                                                        <Link to="#">
                                                            <i className="fa fa-trash-o" aria-hidden="true" />
                                                        </Link>
                                                    </td>
                                                    <td className="product-thumbnail">
                                                        <Link to="#">
                                                            <img
                                                                src="./assets/images/150x150.jpg"
                                                                alt="image"
                                                            />
                                                        </Link>
                                                    </td>
                                                    <td className="product-name">Laptop Bag</td>
                                                    <td className="unit_price">
                                                        <del>$95.00</del> <span className="price">$75.00</span>
                                                    </td>
                                                    <td className="prd_status">
                                                        <span className="instock">In Stock</span>
                                                    </td>
                                                    <td className="prd_action">
                                                        <Link to="#" className="btn outline btn-sm">
                                                            <i className="fab fa-opencart" aria-hidden="true" /> Add
                                                            To Cart
                                                        </Link>
                                                    </td>
                                                </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Wishlist Detail Ends */}
                <Footer2 />
            </>
        );
    }
}


export default Home1;