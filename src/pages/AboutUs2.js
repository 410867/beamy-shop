import React from 'react';
import Header2 from "../components/header/Header2";
import Footer2 from "../components/footer/Footer2";
import { Link } from "react-router-dom";

class AboutUs2 extends React.Component {
    render() {
        return (
            <>
                <Header2 />
                {/* Intro Page Banner  */}
                <section className="parallex-bg page_banner about_banner2">
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
                {/* About Section */}
                <section className="section_padding About_Section About2">
                    <div className="container">
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
                                    <h2>Few Words About - Home1</h2>
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
                    </div>
                </section>
                {/* About Section ends */}
                {/* Client Testimonial */}
                <section className="section_padding gray_bg clients">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-8">
                                <div id="client_slider" className="next_prev_style2">
                                    <div className="section_header text-center">
                                        <h4>
                                            <span>What People Say</span>
                                        </h4>
                                        <p className="large-text">
                                            It is a long established fact that a reader will be distracted
                                            by the readable content of a page when looking at its layout.
                                            The point of using Lorem Ipsum is that it has a more-or-less
                                            normal distribution of letters.
                                        </p>
                                    </div>
                                    <div className="owl-carousel owl-theme">
                                        <div className="item">
                                            <div className="clients_column text-center">
                                                <div className="clients_img">

                                                    <img
                                                        src="./assets/images/200x200.jpg"
                                                        alt="image"
                                                    />
                                                </div>
                                                <p>
                                                    On the other hand, we denounce with righteous indignation
                                                    and dislike men who are so beguiled and demoralized by the
                                                    charms of pleasure.
                                                </p>
                                                <div className="clients_footer">
                                                    <h6>Mahmoud Baghagho</h6>
                                                    <span>XYZ LLC (CEO)</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="item">
                                            <div className="clients_column text-center">
                                                <div className="clients_img">

                                                    <img
                                                        src="./assets/images/200x200.jpg"
                                                        alt="image"
                                                    />
                                                </div>
                                                <p>
                                                    On the other hand, we denounce with righteous indignation
                                                    and dislike men who are so beguiled and demoralized by the
                                                    charms of pleasure.
                                                </p>
                                                <div className="clients_footer">
                                                    <h6>Mahmoud Baghagho</h6>
                                                    <span>XYZ LLC (CEO)</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="item">
                                            <div className="clients_column text-center">
                                                <div className="clients_img">

                                                    <img
                                                        src="./assets/images/200x200.jpg"
                                                        alt="image"
                                                    />
                                                </div>
                                                <p>
                                                    On the other hand, we denounce with righteous indignation
                                                    and dislike men who are so beguiled and demoralized by the
                                                    charms of pleasure.
                                                </p>
                                                <div className="clients_footer">
                                                    <h6>Mahmoud Baghagho</h6>
                                                    <span>XYZ LLC (CEO)</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Client Testimonial ends */}
                {/* Team Section */}
                <section className="section_padding team">
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
                {/* Team Section ends */}
                <Footer2 />
            </>
        );
    }
}


export default AboutUs2;