import React from 'react';
import Header2 from "../components/header/Header2";
import Footer2 from "../components/footer/Footer2";
import {Link} from "react-router-dom";

class ContactUs3 extends React.Component {
    render() {
        return (
            <>
                <Header2 />
                {/* Intro Page Banner */}
                <section className="parallex-bg page_banner contact_banner3">
                    <div className="dark-overlay" />
                    <div className="container div_zindex white-text">
                        <h1>Contact Us</h1>
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item">
                                <Link to="#">Home</Link>
                            </li>
                            <li className="breadcrumb-item active">Contact Us</li>
                        </ol>
                    </div>
                </section>
                {/* Contact Page 3 */}
                <section className="section_padding pt-0 contact3">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-8">
                                <div className="top_address">
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <div className="address_info">
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
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="address_info">
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
                        <div className="row justify-content-center">
                            <div className="col-lg-8">
                                <h2 className="block_title">Leave a Message</h2>
                                <form>
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <div className="form-group">
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Name"
                                                />
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="form-group">
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Email Address"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <div className="form-group">
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Phone Number"
                                                />
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="form-group">
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Subject"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <div className="form-group">
              <textarea
                  className="form-control"
                  placeholder="Message"
                  defaultValue={""}
              />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <button type="submit" className="btn w-100">
                                                Send Message
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Contact Page 3 ends */}
                <Footer2 />
            </>
        );
    }
}


export default ContactUs3;