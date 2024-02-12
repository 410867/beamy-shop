import React from 'react';
import Header2 from "../components/header/Header2";
import Footer2 from "../components/footer/Footer2";
import { Link } from "react-router-dom";

class BlogGridLeft extends React.Component {
    render() {
        return (
            <>
                <Header2 />
                {/* Intro Page Banner */}
                <section className="parallex-bg page_banner blog_banner">
                    <div className="dark-overlay" />
                    <div className="container div_zindex white-text">
                        <h1>Blog Grid Style Left Sidebar</h1>
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item">
                                <Link to="/">Home</Link>
                            </li>
                            <li className="breadcrumb-item active">Blog</li>
                        </ol>
                    </div>
                </section>
                {/* Blog Section */}
                <div className="section_padding blog_left_sidebar">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4">
                                {/* Aside */}
                                <aside>
                                    <div className="module_widget aside_search">
                                        <div className="block_title2"> Search </div>
                                        <div className="module_widget_content">
                                            <div className="form-group">
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Enter Keyword"
                                                />
                                                <button type="button" className="btn">
                                                    Submit
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="module_widget aside_recent_post">
                                        <div className="block_title2"> Recent Posts </div>
                                        <div className="module_widget_content">
                                            <div className="recent_post">
                                                <div className="thumb_img">

                                                    <Link to="#">
                                                        <img
                                                            src="./assets/images/900x600.jpg"
                                                            alt="image"
                                                        />
                                                    </Link>
                                                </div>
                                                <div className="recent_post_info">
                                                    <h6>Contrary to popular</h6>
                                                    <p>Aug 18, 2021 </p>
                                                </div>
                                            </div>
                                            <div className="recent_post">
                                                <div className="thumb_img">

                                                    <Link to="#">
                                                        <img
                                                            src="./assets/images/900x600.jpg"
                                                            alt="image"
                                                        />
                                                    </Link>
                                                </div>
                                                <div className="recent_post_info">
                                                    <h6>Sed ut perspiciatis</h6>
                                                    <p>Aug 25, 2021 </p>
                                                </div>
                                            </div>
                                            <div className="recent_post">
                                                <div className="thumb_img">

                                                    <Link to="#">
                                                        <img
                                                            src="./assets/images/900x600.jpg"
                                                            alt="image"
                                                        />
                                                    </Link>
                                                </div>
                                                <div className="recent_post_info">
                                                    <h6>Make your online store</h6>
                                                    <p>Aug 30, 2021 </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="module_widget aside_social">
                                        <div className="block_title2"> Follow me </div>
                                        <div className="module_widget_content">
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
                                    </div>
                                    <div className="module_widget instagrame">
                                        <div className="block_title2"> Instagram </div>
                                        <div className="module_widget_content">
                                            <ul>
                                                <li>
                                                    <Link to="#">
                                                        <img
                                                            src="./assets/images/400x400.jpg"
                                                            alt="image"
                                                        />
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to="#">
                                                        <img
                                                            src="./assets/images/400x400.jpg"
                                                            alt="image"
                                                        />
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to="#">
                                                        <img
                                                            src="./assets/images/400x400.jpg"
                                                            alt="image"
                                                        />
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to="#">
                                                        <img
                                                            src="./assets/images/400x400.jpg"
                                                            alt="image"
                                                        />
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to="#">
                                                        <img
                                                            src="./assets/images/400x400.jpg"
                                                            alt="image"
                                                        />
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to="#">
                                                        <img
                                                            src="./assets/images/400x400.jpg"
                                                            alt="image"
                                                        />
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to="#">
                                                        <img
                                                            src="./assets/images/400x400.jpg"
                                                            alt="image"
                                                        />
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to="#">
                                                        <img
                                                            src="./assets/images/400x400.jpg"
                                                            alt="image"
                                                        />
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to="#">
                                                        <img
                                                            src="./assets/images/400x400.jpg"
                                                            alt="image"
                                                        />
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </aside>
                                {/* Aside ends */}
                            </div>
                            <div className="col-lg-8">
                                <div className="row">
                                    <div className="col-lg-6">
                                        <article className="blog_wrap blog_grid_col">
                                            <div className="blog_img">

                                                <Link to="/blog-detail">
                                                    <img
                                                        src="./assets/images/900x600.jpg"
                                                        alt="image"
                                                    />
                                                </Link>
                                            </div>
                                            <div className="blog_grid_info">
                                                <div className="newsTime">
                <span className="postName">

                    <span>By</span> John
                </span>
                                                    <span className="postComment">

                                                        <Link to="#">
                    <span>15</span>Comments
                  </Link>
                </span>
                                                    <span className="postDate">

                                                        <Link to="#">
                    <span>Aug 18,</span> 2017
                  </Link>
                </span>
                                                </div>
                                                <div className="post_info">
                                                    <h5>
                                                        <Link to="/blog-detail">Contrary to popular</Link>
                                                    </h5>
                                                    <p className="text-justify">
                                                        Lorem Ipsum is simply dummy text of the printing and
                                                        typesetting industry. Lorem Ipsum has been the industry's
                                                        standard dummy text ever since.
                                                    </p>
                                                    <Link to="/blog-detail" className="read-more">
                                                        Read More
                                                        <i className="fa fa-arrow-right" aria-hidden="true" />
                                                    </Link>
                                                </div>
                                            </div>
                                        </article>
                                    </div>
                                    <div className="col-lg-6">
                                        <article className="blog_wrap blog_grid_col">
                                            <div className="blog_img">

                                                <Link to="#">
                                                    <img
                                                        src="./assets/images/900x600.jpg"
                                                        alt="image"
                                                    />
                                                </Link>
                                            </div>
                                            <div className="blog_grid_info">
                                                <div className="newsTime">
                <span className="postName">

                    <span>By</span> Home1
                </span>
                                                    <span className="postComment">

                                                        <Link to="#">
                    <span>20</span>Comments
                  </Link>
                </span>
                                                    <span className="postDate">

                                                        <Link to="#">
                    <span>Aug 25,</span> 2021
                  </Link>
                </span>
                                                </div>
                                                <div className="post_info">
                                                    <h5>
                                                        <Link to="#">Sed ut perspiciatis</Link>
                                                    </h5>
                                                    <p className="text-justify">
                                                        Lorem Ipsum is simply dummy text of the printing and
                                                        typesetting industry. Lorem Ipsum has been the industry's
                                                        standard dummy text ever since.
                                                    </p>
                                                    <Link to="/blog-detail" className="read-more">
                                                        Read More
                                                        <i className="fa fa-arrow-right" aria-hidden="true" />
                                                    </Link>
                                                </div>
                                            </div>
                                        </article>
                                    </div>
                                    <div className="col-lg-6">
                                        <article className="blog_wrap blog_grid_col">
                                            <div className="blog_img">

                                                <Link to="#">
                                                    <img
                                                        src="./assets/images/900x600.jpg"
                                                        alt="image"
                                                    />
                                                </Link>
                                            </div>
                                            <div className="blog_grid_info">
                                                <div className="newsTime">
                <span className="postName">

                    <span>By</span> John
                </span>
                                                    <span className="postComment">

                                                        <Link to="#">
                    <span>80</span>Comments
                  </Link>
                </span>
                                                    <span className="postDate">

                                                        <Link to="#">
                    <span>Aug 30,</span> 2021
                  </Link>
                </span>
                                                </div>
                                                <div className="post_info">
                                                    <h5>
                                                        <Link to="#">Make your online store</Link>
                                                    </h5>
                                                    <p className="text-justify">
                                                        Lorem Ipsum is simply dummy text of the printing and
                                                        typesetting industry. Lorem Ipsum has been the industry's
                                                        standard dummy text ever since.
                                                    </p>
                                                    <Link to="/blog-detail" className="read-more">
                                                        Read More
                                                        <i className="fa fa-arrow-right" aria-hidden="true" />
                                                    </Link>
                                                </div>
                                            </div>
                                        </article>
                                    </div>
                                    <div className="col-lg-6">
                                        <article className="blog_wrap blog_grid_col">
                                            <div className="blog_img">

                                                <Link to="#">
                                                    <img
                                                        src="./assets/images/900x600.jpg"
                                                        alt="image"
                                                    />
                                                </Link>
                                            </div>
                                            <div className="blog_grid_info">
                                                <div className="newsTime">
                <span className="postName">

                    <span>By</span> Home1
                </span>
                                                    <span className="postComment">

                                                        <Link to="#">
                    <span>10</span>Comments
                  </Link>
                </span>
                                                    <span className="postDate">

                                                        <Link to="#">
                    <span>Sep 01,</span> 2021
                  </Link>
                </span>
                                                </div>
                                                <div className="post_info">
                                                    <h5>
                                                        <Link to="#">There are many team</Link>
                                                    </h5>
                                                    <p className="text-justify">
                                                        Lorem Ipsum is simply dummy text of the printing and
                                                        typesetting industry. Lorem Ipsum has been the industry's
                                                        standard dummy text ever since.
                                                    </p>
                                                    <Link to="/blog-detail" className="read-more">
                                                        Read More
                                                        <i className="fa fa-arrow-right" aria-hidden="true" />
                                                    </Link>
                                                </div>
                                            </div>
                                        </article>
                                    </div>
                                    <div className="col-lg-6">
                                        <article className="blog_wrap blog_grid_col">
                                            <div className="blog_img">

                                                <Link to="#">
                                                    <img
                                                        src="./assets/images/900x600.jpg"
                                                        alt="image"
                                                    />
                                                </Link>
                                            </div>
                                            <div className="blog_grid_info">
                                                <div className="newsTime">
                <span className="postName">

                    <span>By</span> John
                </span>
                                                    <span className="postComment">

                                                        <Link to="#">
                    <span>15</span>Comments
                  </Link>
                </span>
                                                    <span className="postDate">

                                                        <Link to="#">
                    <span>Aug 18,</span> 2021
                  </Link>
                </span>
                                                </div>
                                                <div className="post_info">
                                                    <h5>
                                                        <Link to="#">Contrary to popular</Link>
                                                    </h5>
                                                    <p className="text-justify">
                                                        Lorem Ipsum is simply dummy text of the printing and
                                                        typesetting industry. Lorem Ipsum has been the industry's
                                                        standard dummy text ever since.
                                                    </p>
                                                    <Link to="/blog-detail" className="read-more">
                                                        Read More
                                                        <i className="fa fa-arrow-right" aria-hidden="true" />
                                                    </Link>
                                                </div>
                                            </div>
                                        </article>
                                    </div>
                                    <div className="col-lg-6">
                                        <article className="blog_wrap blog_grid_col">
                                            <div className="blog_img">

                                                <Link to="#">
                                                    <img
                                                        src="./assets/images/900x600.jpg"
                                                        alt="image"
                                                    />
                                                </Link>
                                            </div>
                                            <div className="blog_grid_info">
                                                <div className="newsTime">
                <span className="postName">

                    <span>By</span> Home1
                </span>
                                                    <span className="postComment">

                                                        <Link to="#">
                    <span>20</span>Comments
                  </Link>
                </span>
                                                    <span className="postDate">

                                                        <Link to="#">
                    <span>Aug 25,</span> 2021
                  </Link>
                </span>
                                                </div>
                                                <div className="post_info">
                                                    <h5>
                                                        <Link to="#">Sed ut perspiciatis</Link>
                                                    </h5>
                                                    <p className="text-justify">
                                                        Lorem Ipsum is simply dummy text of the printing and
                                                        typesetting industry. Lorem Ipsum has been the industry's
                                                        standard dummy text ever since.
                                                    </p>
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
                                    <div className="col-md-12 text-center">
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
                                                    <i
                                                        className="fa fa-angle-double-right"
                                                        aria-hidden="true"
                                                    />
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
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


export default BlogGridLeft;