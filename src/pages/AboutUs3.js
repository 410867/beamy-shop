import React from 'react';
import Header2 from "../components/header/Header2";
import Footer2 from "../components/footer/Footer2";
import { Link } from "react-router-dom";

class AboutUs3 extends React.Component {
    render() {
        return (
            <>
                <Header2 />
                {/* Intro Page Banner */}
                <section className="parallex-bg page_banner about_banner3">
                    <div className="dark-overlay" />
                    <div className="container div_zindex white-text">
                        <h1>About Us</h1>
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item">
                                <Link to="/">Home</Link>
                            </li>
                            <li className="breadcrumb-item active">About Us</li>
                        </ol>
                    </div>
                </section>
                {/* Intro Heading ends */}
                {/* About Section */}
                <section className="section_padding About_Section About3">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div id="about_slider" className="next_prev_style2">
                                    <div className="inner_header text-center">
                                        <h2>Home1 - The Amazing Online Store</h2>
                                        <p className="large-text">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                                            quis rhoncus ante, eget molestie dolor. Duis tellus magna,
                                            malesuada vitae velit in, ultrices fringilla metus. Nulla
                                            facilisi.
                                        </p>
                                    </div>
                                    <div className="owl-carousel owl-theme">
                                        <div className="item">
                                            <div className="about_slide">
                                                <div className="row">
                                                    <div className="col-lg-6">
                                                        <div className="video">
                                                            <div className="dark-overlay" />
                                                            <img
                                                                src="./assets/images/600x600.jpg"
                                                                alt="image"
                                                            />
                                                            <span className="video-play">
                                                            <Link to="#">
                                                                <i className="fa fa-play-circle" aria-hidden="true" />
                                                            </Link>
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-6">
                                                        <div className="slide_text">
                                                            <h4>Click To Watch</h4>
                                                            <h2>Our Office Video</h2>
                                                            <p>
                                                                Lorem Ipsum is simply dummy text of the printing and
                                                                typesetting industry. Lorem Ipsum has been the
                                                                industry's standard dummy text ever since the 1500s,
                                                                when an unknown printer took a galley of type and
                                                                scrambled it to make a type specimen book. It has
                                                                survived not only five centuries, but also the leap
                                                                into electronic typesetting, remaining essentially
                                                                unchanged. It was popularised in the 1960s with the
                                                                release of Letraset sheets containing Lorem Ipsum
                                                                passages, and more recently with desktop publishing
                                                                software like Aldus PageMaker including versions of
                                                                Lorem Ipsum.
                                                            </p>
                                                            <p>
                                                                Lorem ipsum dolor sit amet, consectetur adipiscing
                                                                elit. Proin quis rhoncus ante, eget molestie dolor.
                                                                Duis tellus magna, malesuada vitae velit in, ultrices
                                                                fringilla metus. Nulla facilisi.
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="item">
                                            <div className="about_slide">
                                                <div className="row">
                                                    <div className="col-lg-6">
                                                        <figure className="figure">

                                                            <img
                                                                src="./assets/images/600x600.jpg"
                                                                alt="image"
                                                            />
                                                        </figure>
                                                    </div>
                                                    <div className="col-lg-6">
                                                        <div className="slide_text service_list">
                                                            <h2>Our Services</h2>
                                                            <ul className="list-style-none">
                                                                <li>
                                                                    <span className="number">01</span>
                                                                    <h5>100% Money Back Guarantee</h5>
                                                                    <p>
                                                                        Proin quis rhoncus ante, eget molestie dolor. Duis
                                                                        tellus magna, malesuada vitae velit in.i
                                                                    </p>
                                                                </li>
                                                                <li>
                                                                    <span className="number">02</span>
                                                                    <h5>Free Shipping Over 1000$ </h5>
                                                                    <p>
                                                                        Proin quis rhoncus ante, eget molestie dolor. Duis
                                                                        tellus magna, malesuada vitae velit in.
                                                                    </p>
                                                                </li>
                                                                <li>
                                                                    <span className="number">03</span>
                                                                    <h5> 24/7 Customer Service </h5>
                                                                    <p>
                                                                        Proin quis rhoncus ante, eget molestie dolor. Duis
                                                                        tellus magna, malesuada vitae velit in.
                                                                    </p>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="item">
                                            <div className="about_slide">
                                                <div className="row">
                                                    <div className="col-lg-6">
                                                        <figure className="figure">

                                                            <img
                                                                src="./assets/images/600x600.jpg"
                                                                alt="image"
                                                            />
                                                        </figure>
                                                    </div>
                                                    <div className="col-lg-6">
                                                        <div className="slide_text">
                                                            <h2>Who We Are</h2>
                                                            <p>
                                                                Lorem Ipsum is simply dummy text of the printing and
                                                                typesetting industry. Lorem Ipsum has been the
                                                                industry's standard dummy text ever since the 1500s,
                                                                when an unknown printer took a galley of type and
                                                                scrambled it to make a type specimen book. It has
                                                                survived not only five centuries, but also the leap
                                                                into electronic typesetting, remaining essentially
                                                                unchanged. It was popularised in the 1960s with the
                                                                release of Letraset sheets containing Lorem Ipsum
                                                                passages, and more recently with desktop publishing
                                                                software like Aldus PageMaker including versions of
                                                                Lorem Ipsum.
                                                            </p>
                                                            <p>
                                                                Lorem ipsum dolor sit amet, consectetur adipiscing
                                                                elit. Proin quis rhoncus ante, eget molestie dolor.
                                                                Duis tellus magna, malesuada vitae velit in, ultrices
                                                                fringilla metus. Nulla facilisi.
                                                            </p>
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
                <Footer2 />
            </>
        );
    }
}


export default AboutUs3;