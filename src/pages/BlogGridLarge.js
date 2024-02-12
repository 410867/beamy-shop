import React from 'react';
import Header2 from "../components/header/Header2";
import Footer2 from "../components/footer/Footer2";
import { Link } from "react-router-dom";

class BlogGridLarge extends React.Component {
    render() {
        return (
            <>
                <Header2 />
                {/* Intro Page Banner */}
                <section className="parallex-bg page_banner blog_banner">
                    <div className="dark-overlay" />
                    <div className="container div_zindex white-text">
                        <h1>Blog Large Style</h1>
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item">
                                <Link to="/">Home</Link>
                            </li>
                            <li className="breadcrumb-item active">Blog</li>
                        </ol>
                    </div>
                </section>
                {/* Blog Section */}
                <div className="section_padding blog_grid_large_section">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <article className="blog_wrap blog_grid_large">
                                    <div className="blog_img">
                                        <Link to="/blog-detail">
                                            <img src="./assets/images/900x600.jpg" alt="image" />
                                        </Link>
                                    </div>
                                    <div className="blog_grid_info">
                                        <div className="byname">

                                            <img
                                                src="./assets/images/200x200.jpg"
                                                alt="image"
                                            />
                                            <span>Posted by: John Deo</span>
                                        </div>
                                        <div className="post_info">
                                            <h5>
                                                <Link to="/blog-detail">Contrary to popular</Link>
                                            </h5>
                                            <p className="text-justify">
                                                Lorem Ipsum is simply dummy text of the printing and
                                                typesetting industry. Lorem Ipsum has been the industry's
                                                standard dummy text ever since the 1500s, when an unknown
                                                printer took a galley of type and scrambled it to make a type
                                                specimen book.
                                            </p>
                                            <div className="post_meta">
                                                <ul>
                                                    <li>
                                                        <Link to="#">
                                                            <i className="fa fa-calendar" aria-hidden="true" /> Aug
                                                            18, 2021
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="#">
                                                            <i className="fa fa-comment-o" aria-hidden="true" /> 15
                                                            Comments
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <i className="fa fa-eye" aria-hidden="true" /> 80 Views
                                                    </li>
                                                </ul>
                                            </div>
                                            <Link to="/blog-detail" className="read-more">
                                                Read More
                                                <i className="fa fa-arrow-right" aria-hidden="true" />
                                            </Link>
                                        </div>
                                    </div>
                                </article>
                                <article className="blog_wrap blog_grid_large">
                                    <div className="blog_img">
                                        <Link to="#">
                                            <img src="./assets/images/900x600.jpg" alt="image" />
                                        </Link>
                                    </div>
                                    <div className="blog_grid_info">
                                        <div className="byname">

                                            <img
                                                src="./assets/images/200x200.jpg"
                                                alt="image"
                                            />
                                            <span>Posted by: Maria</span>
                                        </div>
                                        <div className="post_info">
                                            <h5>
                                                <Link to="#">Sed ut perspiciatis unknown printer took</Link>
                                            </h5>
                                            <p className="text-justify">
                                                Lorem Ipsum is simply dummy text of the printing and
                                                typesetting industry. Lorem Ipsum has been the industry's
                                                standard dummy text ever since the 1500s, when an unknown
                                                printer took a galley of type and scrambled it to make a type
                                                specimen book.
                                            </p>
                                            <div className="post_meta">
                                                <ul>
                                                    <li>
                                                        <Link to="#">
                                                            <i className="fa fa-calendar" aria-hidden="true" /> Aug
                                                            25, 2021
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="#">
                                                            <i className="fa fa-comment-o" aria-hidden="true" /> 20
                                                            Comments
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <i className="fa fa-eye" aria-hidden="true" /> 60 Views
                                                    </li>
                                                </ul>
                                            </div>
                                            <Link to="/blog-detail" className="read-more">
                                                Read More
                                                <i className="fa fa-arrow-right" aria-hidden="true" />
                                            </Link>
                                        </div>
                                    </div>
                                </article>
                                <article className="blog_wrap blog_grid_large">
                                    <div className="blog_img">
                                        <Link to="#">
                                            <img src="./assets/images/900x600.jpg" alt="image" />
                                        </Link>
                                    </div>
                                    <div className="blog_grid_info">
                                        <div className="byname">

                                            <img
                                                src="./assets/images/200x200.jpg"
                                                alt="image"
                                            />
                                            <span>Posted by: Alex Manning</span>
                                        </div>
                                        <div className="post_info">
                                            <h5>
                                                <Link to="#">Make your online store standard dummy text</Link>
                                            </h5>
                                            <p className="text-justify">
                                                Lorem Ipsum is simply dummy text of the printing and
                                                typesetting industry. Lorem Ipsum has been the industry's
                                                standard dummy text ever since the 1500s, when an unknown
                                                printer took a galley of type and scrambled it to make a type
                                                specimen book.
                                            </p>
                                            <div className="post_meta">
                                                <ul>
                                                    <li>
                                                        <Link to="#">
                                                            <i className="fa fa-calendar" aria-hidden="true" /> Aug
                                                            30, 2021
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="#">
                                                            <i className="fa fa-comment-o" aria-hidden="true" /> 80
                                                            Comments
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <i className="fa fa-eye" aria-hidden="true" /> 120 Views
                                                    </li>
                                                </ul>
                                            </div>
                                            <Link to="/blog-detail" className="read-more">
                                                Read More
                                                <i className="fa fa-arrow-right" aria-hidden="true" />
                                            </Link>
                                        </div>
                                    </div>
                                </article>
                                <article className="blog_wrap blog_grid_large">
                                    <div className="blog_img">
                                        <Link to="#">
                                            <img src="./assets/images/900x600.jpg" alt="image" />
                                        </Link>
                                    </div>
                                    <div className="blog_grid_info">
                                        <div className="byname">

                                            <img
                                                src="./assets/images/200x200.jpg"
                                                alt="image"
                                            />
                                            <span>Posted by: John Deo</span>
                                        </div>
                                        <div className="post_info">
                                            <h5>
                                                <Link to="#">There are many team popular</Link>
                                            </h5>
                                            <p className="text-justify">
                                                Lorem Ipsum is simply dummy text of the printing and
                                                typesetting industry. Lorem Ipsum has been the industry's
                                                standard dummy text ever since the 1500s, when an unknown
                                                printer took a galley of type and scrambled it to make a type
                                                specimen book.
                                            </p>
                                            <div className="post_meta">
                                                <ul>
                                                    <li>
                                                        <Link to="#">
                                                            <i className="fa fa-calendar" aria-hidden="true" /> Sep
                                                            01, 2021
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="#">
                                                            <i className="fa fa-comment-o" aria-hidden="true" /> 10
                                                            Comments
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <i className="fa fa-eye" aria-hidden="true" /> 20 Views
                                                    </li>
                                                </ul>
                                            </div>
                                            <Link to="/blog-detail" className="read-more">
                                                Read More
                                                <i className="fa fa-arrow-right" aria-hidden="true" />
                                            </Link>
                                        </div>
                                    </div>
                                </article>
                                <article className="blog_wrap blog_grid_large">
                                    <div className="blog_img">
                                        <Link to="#">
                                            <img src="./assets/images/900x600.jpg" alt="image" />
                                        </Link>
                                    </div>
                                    <div className="blog_grid_info">
                                        <div className="byname">

                                            <img
                                                src="./assets/images/200x200.jpg"
                                                alt="image"
                                            />
                                            <span>Posted by: Maria</span>
                                        </div>
                                        <div className="post_info">
                                            <h5>
                                                <Link to="#">Contrary to popular</Link>
                                            </h5>
                                            <p className="text-justify">
                                                Lorem Ipsum is simply dummy text of the printing and
                                                typesetting industry. Lorem Ipsum has been the industry's
                                                standard dummy text ever since the 1500s, when an unknown
                                                printer took a galley of type and scrambled it to make a type
                                                specimen book.
                                            </p>
                                            <div className="post_meta">
                                                <ul>
                                                    <li>
                                                        <Link to="#">
                                                            <i className="fa fa-calendar" aria-hidden="true" /> Aug
                                                            18, 2021
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="#">
                                                            <i className="fa fa-comment-o" aria-hidden="true" /> 15
                                                            Comments
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <i className="fa fa-eye" aria-hidden="true" /> 80 Views
                                                    </li>
                                                </ul>
                                            </div>
                                            <Link to="/blog-detail" className="read-more">
                                                Read More
                                                <i className="fa fa-arrow-right" aria-hidden="true" />
                                            </Link>
                                        </div>
                                    </div>
                                </article>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12 text-center">
                                <ul className="page-numbers">
                                    <li>
                                        <span className="page-numbers current">1</span>
                                    </li>
                                    <li>
                                        <Link to="#" className="page-numbers">
                                            2
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="#" className="page-numbers">
                                            3
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="#" className="page-numbers">
                                            4
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="#" className="page-numbers">
                                            5
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="#" className="next page-numbers">
                                            <i className="fa fa-angle-double-right" aria-hidden="true" />
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Blog Section ends */}
                <Footer2 />
            </>
        );
    }
}


export default BlogGridLarge;