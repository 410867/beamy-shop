import React from 'react';
import Header2 from "../components/header/Header2";
import Footer2 from "../components/footer/Footer2";
import {Link} from "react-router-dom";

class PrivacyPolicy extends React.Component {
    render() {
        return (
            <>
                <Header2 />
                {/* Intro Page Banner */}
                <section className="parallex-bg page_banner terms_policy_banner">
                    <div className="dark-overlay" />
                    <div className="container div_zindex white-text">
                        <h1>Privacy Policy</h1>
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item">
                                <Link to="/">Home</Link>
                            </li>
                            <li className="breadcrumb-item active">Privacy Policy</li>
                        </ol>
                    </div>
                </section>
                {/* Terms & Conditions Section */}
                <section className="section_padding terms_policy_Section">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8">
                                <div className="terms-policy">
                                    <h3>What is Lorem Ipsum?</h3>
                                    <p>
                                        Lorem Ipsum is simply dummy text of the printing and typesetting
                                        industry. Lorem Ipsum has been the industry's standard dummy text
                                        ever since the 1500s, when an unknown printer took a galley of
                                        type and scrambled it to make a type specimen book. It has
                                        survived not only five centuries, but also the leap into
                                        electronic typesetting, remaining essentially unchanged.
                                    </p>
                                    <h3>Why do we use it?</h3>
                                    <p>
                                        Lorem Ipsum is simply dummy text of the printing and typesetting
                                        industry. Lorem Ipsum has been the industry's standard dummy text
                                        ever since the 1500s, when an unknown printer took a galley of
                                        type and scrambled it to make a type specimen book. It has
                                        survived not only five centuries, but also the leap into
                                        electronic typesetting, remaining essentially unchanged.
                                    </p>
                                    <h3>Where does it come from?</h3>
                                    <p>
                                        Contrary to popular belief, Lorem Ipsum is not simply random text.
                                        It has roots in a piece of classical Latin literature from 45 BC,
                                        making it over 2000 years old.
                                    </p>
                                    <ul>
                                        <li>
                                            The standard chunk of Lorem Ipsum used since the 1500s is
                                            reproduced below for those interested.
                                        </li>
                                        <li>
                                            Various versions have evolved over the years, sometimes by
                                            accident, sometimes on purpose (injected humour and the like
                                        </li>
                                        <li>
                                            Letraset sheets containing Lorem Ipsum passages, and more
                                            recently with desktop publishing software like Aldus PageMaker
                                            including versions of Lorem Ipsum.
                                        </li>
                                        <li>
                                            The standard chunk of Lorem Ipsum used since the 1500s is
                                            reproduced below for those interested.
                                        </li>
                                        <li>
                                            Various versions have evolved over the years, sometimes by
                                            accident, sometimes on purpose (injected humour and the like
                                        </li>
                                        <li>
                                            Letraset sheets containing Lorem Ipsum passages, and more
                                            recently with desktop publishing software like Aldus PageMaker
                                            including versions of Lorem Ipsum.
                                        </li>
                                    </ul>
                                    <h3>Where can I get some?</h3>
                                    <p>
                                        Lorem Ipsum is simply dummy text of the printing and typesetting
                                        industry. Lorem Ipsum has been the industry's standard dummy text
                                        ever since the 1500s, when an unknown printer took a galley of
                                        type and scrambled it to make a type specimen book. It has
                                        survived not only five centuries, but also the leap into
                                        electronic typesetting, remaining essentially unchanged.
                                    </p>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                {/* Contact Information Start Here*/}
                                <div className="contact_info">
                                    <div className="dark-overlay" />
                                    <div className="div_zindex white-text">
                                        <h2 className="block_title">Contact Information</h2>
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                                            quis rhoncus ante, eget molestie dolor. Duis tellus magna,
                                            malesuada vitae velit in.
                                        </p>
                                        <div className="row">
                                            <div className="col-lg-12">
                                                <h4>London Office</h4>
                                                <ul className="contact_list">
                                                    <li>
                                                        <i className="fa fa-map-marker" aria-hidden="true" />
                                                        Alnahas Building, 2 AlBahr St, Tanta AlGharbia, Egypt.
                                                    </li>
                                                    <li>
                                                        <i className="fa fa-envelope" aria-hidden="true" />
                                                        <Link to="mailto:contact@webrul.com">contact@webrul.com</Link>
                                                    </li>
                                                    <li>
                                                        <i className="fa fa-phone" aria-hidden="true" />
                                                        +61-1234-5678-90
                                                    </li>
                                                    <li>
                                                        <i className="fa fa-clock-o" aria-hidden="true" /> Open
                                                        Time: 9AM - 6PM
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="col-lg-12">
                                                <h4>New York Office</h4>
                                                <ul className="contact_list">
                                                    <li>
                                                        <i className="fa fa-map-marker" aria-hidden="true" />
                                                        Alnahas Building, 2 AlBahr St, Tanta AlGharbia, Egypt.
                                                    </li>
                                                    <li>
                                                        <i className="fa fa-envelope" aria-hidden="true" />
                                                        <Link to="mailto:contact@webrul.com">contact@webrul.com</Link>
                                                    </li>
                                                    <li>
                                                        <i className="fa fa-phone" aria-hidden="true" />
                                                        +61-1234-5678-90
                                                    </li>
                                                    <li>
                                                        <i className="fa fa-clock-o" aria-hidden="true" /> Open
                                                        Time: 9AM - 6PM
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Terms & Conditions Section ends */}
                <Footer2 />
            </>
        );
    }
}


export default PrivacyPolicy;

