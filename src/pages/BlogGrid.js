import React from 'react';
import Header2 from "../components/header/Header2";
import Footer2 from "../components/footer/Footer2";
import { Link } from "react-router-dom";

class BlogGrid extends React.Component {
    render() {
        return (
            <>
                <Header2 />
                {/* Intro Page Banner */}
                <section className="parallex-bg page_banner blog_banner">
                    <div className="dark-overlay" />
                    <div className="container div_zindex white-text">
                        <h1>Blog Grid Style</h1>
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item">
                                <Link to="/">Home</Link>
                            </li>
                            <li className="breadcrumb-item active">Blog</li>
                        </ol>
                    </div>
                </section>
                {/* Blog Section */}
                <div className="section_padding blog_grid">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4">
                                <article className="blog_wrap blog_grid_col">
                                    <div className="blog_img">

                                        <Link to="/blog-detail">
                                            <img src="./assets/images/900x600.jpg" alt="image" />
                                        </Link>
                                    </div>
                                    <div className="blog_grid_info">
                                        <div className="newsTime">
                                            <span className="postName"><span>By</span> John</span>
                                            <span className="postComment"><Link to="#"><span>15</span>Comments</Link></span>
                                            <span className="postDate"><Link to="#"><span>Aug 18,</span> 2021</Link></span>
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
                            <div className="col-lg-4">
                                <article className="blog_wrap blog_grid_col">
                                    <div className="blog_img">

                                        <Link to="#">
                                            <img src="./assets/images/900x600.jpg" alt="image" />
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
                            <div className="col-lg-4">
                                <article className="blog_wrap blog_grid_col">
                                    <div className="blog_img">

                                        <Link to="#">
                                            <img src="./assets/images/900x600.jpg" alt="image" />
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
                            <div className="col-lg-4">
                                <article className="blog_wrap blog_grid_col">
                                    <div className="blog_img">

                                        <Link to="#">
                                            <img src="./assets/images/900x600.jpg" alt="image" />
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
                            <div className="col-lg-4">
                                <article className="blog_wrap blog_grid_col">
                                    <div className="blog_img">

                                        <Link to="#">
                                            <img src="./assets/images/900x600.jpg" alt="image" />
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
                            <div className="col-lg-4">
                                <article className="blog_wrap blog_grid_col">
                                    <div className="blog_img">

                                        <Link to="#">
                                            <img src="./assets/images/900x600.jpg" alt="image" />
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
                            <div className="col-lg-4">
                                <article className="blog_wrap blog_grid_col">
                                    <div className="blog_img">

                                        <Link to="#">
                                            <img src="./assets/images/900x600.jpg" alt="image" />
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
                            <div className="col-lg-4">
                                <article className="blog_wrap blog_grid_col">
                                    <div className="blog_img">

                                        <Link to="#">
                                            <img src="./assets/images/900x600.jpg" alt="image" />
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
                <span>Aug 01,</span> 2021
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
                            <div className="col-lg-4">
                                <article className="blog_wrap blog_grid_col">
                                    <div className="blog_img">

                                        <Link to="#">
                                            <img src="./assets/images/900x600.jpg" alt="image" />
                                        </Link>
                                    </div>
                                    <div className="blog_grid_info">
                                        <div className="newsTime">

                                            <span className="postName">

                                                <span>By</span> John
            </span>
                                            <span className="postComment">
                                                <Link to="#"><span>15</span>Comments</Link>
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
                                            <i className="fa fa-angle-double-right" aria-hidden="true" />
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Blog Section Ends */}
                <Footer2 />
            </>
        );
    }
}


export default BlogGrid;