import React from 'react';
import Header1 from "../components/header/Header1";
import Footer2 from "../components/footer/Footer2";
import { Link } from "react-router-dom";

class AboutUs1 extends React.Component {
    render() {
        return (
            <>
                <Header1 />
                {/* Intro Page Banner */}
                <section className="parallex-bg page_banner about_banner1">
                    <div className="dark-overlay" />
                    <div className="container div_zindex white-text">
                        <h1>About Us</h1>
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item">
                                <Link to="#">Home</Link>
                            </li>
                            <li className="breadcrumb-item active">About Us</li>
                        </ol>
                    </div>
                </section>
                {/* Intro Heading */}
                {/* About Section */}
                <section className="section_padding About_Section">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="inner_header text-center">
                                    <h2>Home1 - The Amazing Online Store</h2>
                                    <p className="large-text">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                                        quis rhoncus ante, eget molestie dolor. Duis tellus magna,
                                        malesuada vitae velit in, ultrices fringilla metus. Nulla
                                        facilisi.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="row about_row">
                            <div className="col-lg-6">
                                <figure className="figure">

                                    <img
                                        src="./assets/images/800x800.jpg"
                                        alt="image"
                                    />
                                </figure>
                            </div>
                            <div className="col-lg-6">
                                <div className="about_text">
                                    <h2>Jane Bryant</h2>
                                    <p>
                                        <strong>Chief Executive Officer</strong>
                                    </p>
                                    <p>
                                        Lorem Ipsum is simply dummy text of the printing and typesetting
                                        industry. Lorem Ipsum has been the industry's standard dummy text
                                        ever since the 1500s, when an unknown printer took a galley of
                                        type and scrambled it to make a type specimen book. It has
                                        survived not only five centuries, but also the leap into
                                        electronic typesetting, remaining essentially unchanged. It was
                                        popularised in the 1960s with the release of Letraset sheets
                                        containing Lorem Ipsum passages, and more recently with desktop
                                        publishing software like Aldus PageMaker including versions of
                                        Lorem Ipsum.
                                    </p>
                                    <p>
                                        It is a long established fact that a reader will be distracted by
                                        the readable content of a page when looking at its layout. The
                                        point of using Lorem Ipsum is that it has a more-or-less normal
                                        distribution of letters, as opposed to using 'Content here,
                                        content here', making it look like readable English.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="row about_row">
                            <div className="col-lg-6">
                                <div className="about_text">
                                    <h2>David Martin</h2>
                                    <p>
                                        <strong>Founder &amp; CEO</strong>
                                    </p>
                                    <p>
                                        Lorem Ipsum is simply dummy text of the printing and typesetting
                                        industry. Lorem Ipsum has been the industry's standard dummy text
                                        ever since the 1500s, when an unknown printer took a galley of
                                        type and scrambled it to make a type specimen book. It has
                                        survived not only five centuries, but also the leap into
                                        electronic typesetting, remaining essentially unchanged. It was
                                        popularised in the 1960s with the release of Letraset sheets
                                        containing Lorem Ipsum passages, and more recently with desktop
                                        publishing software like Aldus PageMaker including versions of
                                        Lorem Ipsum.
                                    </p>
                                    <p>
                                        It is a long established fact that a reader will be distracted by
                                        the readable content of a page when looking at its layout. The
                                        point of using Lorem Ipsum is that it has a more-or-less normal
                                        distribution of letters, as opposed to using 'Content here,
                                        content here', making it look like readable English.
                                    </p>
                                </div>
                            </div>
                            <div className="col-lg-6 order-lg-6">
                                <figure className="figure">

                                    <img
                                        src="./assets/images/800x800.jpg"
                                        alt="image"
                                    />
                                </figure>
                            </div>
                        </div>
                    </div>
                </section>
                {/* About Section ends */}
                {/* Team Section */}
                <section className="section_padding gray_bg team">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div id="team_slider" className="next_prev_style1">
                                    <div className="section_header">
                                        <h4>
                                            <span>Meet Our Team</span>
                                        </h4>
                                    </div>
                                    <div className="owl-carousel owl-theme">
                                        <div className="item">
                                            <div className="team_wrap">
                                                <div className="member_img">
                                                    <img
                                                        src="./assets/images/600x600.jpg"
                                                        alt="image"
                                                    />
                                                    <div className="member_social_info">
                                                        <ul>
                                                            <li>
                                                                <Link to="#">
                                                                    <i className="fab fa-facebook-f" />
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link to="#">
                                                                    <i className="fab fa-twitter" />
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link to="#">
                                                                    <i className="fab fa-linkedin" />
                                                                </Link>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="member_info">
                                                    <h5>Matt Higgins</h5>
                                                    <p>CEO and Board Member </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="item">
                                            <div className="team_wrap">
                                                <div className="member_img">
                                                    <img
                                                        src="./assets/images/600x600.jpg"
                                                        alt="image"
                                                    />
                                                    <div className="member_social_info">
                                                        <ul>
                                                            <li>
                                                                <Link to="#">
                                                                    <i className="fab fa-facebook-f" />
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link to="#">
                                                                    <i className="fab fa-twitter" />
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link to="#">
                                                                    <i className="fab fa-linkedin" />
                                                                </Link>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="member_info">
                                                    <h5>Janice Bell</h5>
                                                    <p>Head of Investment</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="item">
                                            <div className="team_wrap">
                                                <div className="member_img">
                                                    <img
                                                        src="./assets/images/600x600.jpg"
                                                        alt="image"
                                                    />
                                                    <div className="member_social_info">
                                                        <ul>
                                                            <li>
                                                                <Link to="#">
                                                                    <i className="fab fa-facebook-f" />
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link to="#">
                                                                    <i className="fab fa-twitter" />
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link to="#">
                                                                    <i className="fab fa-linkedin" />
                                                                </Link>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="member_info">
                                                    <h5>Alex Manning</h5>
                                                    <p>Marketing </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="item">
                                            <div className="team_wrap">
                                                <div className="member_img">
                                                    <img
                                                        src="./assets/images/600x600.jpg"
                                                        alt="image"
                                                    />
                                                    <div className="member_social_info">
                                                        <ul>
                                                            <li>
                                                                <Link to="#">
                                                                    <i className="fab fa-facebook-f" />
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link to="#">
                                                                    <i className="fab fa-twitter" />
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link to="#">
                                                                    <i className="fab fa-linkedin" />
                                                                </Link>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="member_info">
                                                    <h5>David Martin</h5>
                                                    <p>Marketing </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Team Section ends*/}
                <Footer2 />
            </>
        );
    }
}


export default AboutUs1;