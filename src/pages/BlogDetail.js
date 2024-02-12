import React from 'react';
import Header2 from "../components/header/Header2";
import Footer2 from "../components/footer/Footer2";
import { Link } from "react-router-dom";

class BlogDetail extends React.Component {
    render() {
        return (
            <>
                <Header2 />
                {/* Intro Page Banner */}
                <section className="parallex-bg page_banner blog_banner">
                    <div className="dark-overlay" />
                    <div className="container div_zindex white-text">
                        <h1>Blog Detail</h1>
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item">
                                <Link to="/">Home</Link>
                            </li>
                            <li className="breadcrumb-item active">Blog Detail</li>
                        </ol>
                    </div>
                </section>
                {/* Blog Section */}
                <div className="section_padding blog_detail_section">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <article className="post_listing">
                                            <h2>Contrary to popular Blog</h2>
                                            <div className="post_full_img">
                                                
                                                <img
                                                    src="./assets/images/900x600.jpg"
                                                    alt="image"
                                                />
                                            </div>
                                            <div className="post_content blog_post_detal">
                                                <div className="blog_left_col">
                                                    <div className="author_name">
                                                        <figure>
                                                            <img
                                                                src="./assets/images/200x200.jpg"
                                                                alt="image"
                                                            />
                                                        </figure>
                                                        <span>
                    Posted by: <strong>John Deo</strong>
                  </span>
                                                    </div>
                                                    <div className="share_post">
                                                        <h5>Share:</h5>
                                                        <ul className="list-style-none">
                                                            <li>
                                                                <Link to="#" className="facebook">
                                                                    <i className="fab fa-facebook-f" />
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link to="#" className="linkedin">
                                                                    <i className="fab fa-linkedin" />
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link to="#" className="twitter">
                                                                    <i className="fab fa-twitter" />
                                                                </Link>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="post_elements">
                                                    <ul>
                                                        <li>
                                                            <Link to="#">
                                                                <i
                                                                    className="fa fa-calendar-check-o"
                                                                    aria-hidden="true"
                                                                />
                                                                30/08/2021
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link to="#">
                                                                <i className="fa fa-comment-o" aria-hidden="true" />
                                                                20 Comments
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link to="#">
                                                                <i className="fa fa-heart-o" aria-hidden="true" /> 520
                                                                Likes
                                                            </Link>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <p>
                                                    Lorem Ipsum is simply dummy text of the printing and
                                                    typesetting industry. Lorem Ipsum has been the industry's
                                                    standard dummy text ever since the 1500s, when an unknown
                                                    printer took a galley of type and scrambled it to make a
                                                    type specimen book. It has survived not only five centuries,
                                                    but also the leap into electronic typesetting, remaining
                                                    essentially unchanged. It was popularised in the 1960s with
                                                    the release of Letraset sheets containing Lorem Ipsum
                                                    passages, and more recently with desktop publishing software
                                                    like Aldus PageMaker including versions of Lorem Ipsum.
                                                </p>
                                                <p>
                                                    Sed ut perspiciatis unde omnis iste natus error sit
                                                    voluptatem accusantium doloremque laudantium, totam rem
                                                    aperiam, eaque ipsa quae ab illo inventore veritatis et
                                                    quasi architecto beatae vitae dicta sunt explicabo. Nemo
                                                    enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                                                    aut fugit, sed quia consequuntur magni dolores eos qui
                                                    ratione voluptatem sequi nesciunt. Neque porro quisquam est,
                                                    qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
                                                    velit, sed quia non numquam eius modi tempora incidunt ut
                                                    labore et dolore magnam aliquam quaerat voluptatem. Ut enim
                                                    ad minima veniam, quis nostrum exercitationem ullam corporis
                                                    suscipit laboriosam, nisi ut aliquid ex ea commodi
                                                    consequatur? Quis autem vel eum iure reprehenderit qui in ea
                                                    voluptate velit esse quam nihil molestiae consequatur, vel
                                                    illum qui dolorem eum fugiat quo voluptas nulla pariatur?
                                                </p>
                                                <blockquote>
                                                    
                                                    qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
                                                    velit, sed quia non numquam eius modi tempora incidunt ut
                                                    labore
                                                </blockquote>
                                                <h3>Where does it come from?</h3>
                                                <p>
                                                    Contrary to popular belief, Lorem Ipsum is not simply random
                                                    text. It has roots in a piece of classical Latin literature
                                                    from 45 BC, making it over 2000 years old.
                                                </p>
                                                <ul>
                                                    <li>
                                                        The standard chunk of Lorem Ipsum used since the 1500s is
                                                        reproduced below for those interested.
                                                    </li>
                                                    <li>
                                                        here are many variations of passages of Lorem Ipsum
                                                        available, but the majority have suffered alteration in
                                                        some form,
                                                    </li>
                                                    <li>
                                                        It is a long established fact that a reader will be
                                                        distracted by the readable content of a page when looking
                                                        at its layout
                                                    </li>
                                                    <li>
                                                        The standard chunk of Lorem Ipsum used since the 1500s is
                                                        reproduced below for those interested.
                                                    </li>
                                                    <li>
                                                        here are many variations of passages of Lorem Ipsum
                                                        available, but the majority have suffered alteration in
                                                        some form,
                                                    </li>
                                                </ul>
                                            </div>
                                        </article>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="post_tags">
                                            
                                            <span>Tags:-</span> <Link to="#">Shop</Link> <Link to="#">Fashion</Link>
                                            <Link to="#">E-commerce</Link> <Link to="#">Clothes</Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="articale_comments">
                                            <div id="comments">
                                                <h2 className="font_36_normal">2 Comments</h2>
                                                <ul className="commentlist">
                                                    <li className="comment">
                                                        <div className="comment-body">
                                                            <div className="comment-author">
                                                                
                                                                <img
                                                                    className="avatar"
                                                                    src="./assets/images/400x400.jpg"
                                                                    alt="image"
                                                                />
                                                                <span className="fn">Maria Smith</span>
                                                            </div>
                                                            <div className="comment-meta commentmetadata">
                                                                
                                                                <Link to="#">Aug 23, 2021 at 12:52 pm</Link>
                                                            </div>
                                                            <div className="comment-content">
                                                                <p>
                                                                    Neque porro quisquam est, qui dolorem ipsum quia
                                                                    dolor sit amet, consectetur, adipisci velit, sed
                                                                    quia non numquam eius modi tempora incidunt ut
                                                                    labore et dolore magnam aliquam quaerat voluptatem.
                                                                    Ut enim ad minima veniam, quis nostrum
                                                                    exercitationem
                                                                </p>
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
                                                                        <span className="fn">John Deo</span>
                                                                    </div>
                                                                    <div className="comment-meta commentmetadata">
                                                                        
                                                                        <Link to="#">Aug 23, 2021 at 2:00 pm</Link>
                                                                    </div>
                                                                    <div className="comment-content">
                                                                        <p>
                                                                            Neque porro quisquam est, qui dolorem ipsum quia
                                                                            dolor sit amet, consectetur, adipisci velit, sed
                                                                            quia non numquam eius modi tempora incidunt ut
                                                                            labore et dolore magnam aliquam quaerat
                                                                            voluptatem. Ut enim ad minima veniam, quis
                                                                            nostrum exercitationem
                                                                        </p>
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
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="comments-area">
                                            <h3 className="font_36_normal">Leave a Reply </h3>
                                            <form>
                                                <p className="comment-notes">
                                                    
                                                    <span id="email-notes">
                  Your email address will not be published.
                </span>
                                                    Required fields are marked
                                                    <span className="required">*</span>
                                                </p>
                                                <div className="row">
                                                    <div className="col-lg-6">
                                                        <div className="form-group">
                                                            <label>
                                                                Name <span className="required">*</span>
                                                            </label>
                                                            <input type="text" defaultValue="" required="" />
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-6">
                                                        <div className="form-group">
                                                            <label>
                                                                Email <span className="required">*</span>
                                                            </label>
                                                            <input type="email" defaultValue="" required="" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-lg-12">
                                                        <div className="form-group">
                                                            <label>Website</label>
                                                            <input type="url" defaultValue="" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-lg-12">
                                                        <div className="form-group">
                                                            <label>Comment </label>
                                                            <textarea required="" defaultValue={""} />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-lg-12">
                                                        <div className="form-group">
                                                            <input type="submit" defaultValue="Post Comment" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-12">
                                        <nav className="pager-nav">
                                            <ul className="pager">
                                                <li className="previous float-left">
                                                    <Link to="#">
                                                        <span aria-hidden="true">←</span> Older
                                                    </Link>
                                                </li>
                                                <li className="next float-right">
                                                    <Link to="#">
                                                        Newer <span aria-hidden="true">→</span>
                                                    </Link>
                                                </li>
                                            </ul>
                                        </nav>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
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


export default BlogDetail;