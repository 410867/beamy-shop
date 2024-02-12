import React from 'react';
import Header1 from "../components/header/Header1";
import Footer2 from "../components/footer/Footer2";
import { Link } from "react-router-dom";

class ContactUs1 extends React.Component {
    render() {
        return (
            <>
                <Header1 />
                {/* Intro Page Banner */}
                <section className="parallex-bg page_banner contact_banner1">
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
                {/* Contact Page 1 */}
                <section className="section_padding contact1">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8">
                                <h2 className="block_title">Contact Information</h2>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin quis
                                    rhoncus ante, eget molestie dolor. Duis tellus magna, malesuada
                                    vitae velit in, ultrices fringilla metus. Nulla facilisi Lorem ipsum
                                    dolor sit amet, consectetur adipiscing elit. Proin quis rhoncus
                                    ante, eget molestie dolor. Duis tellus magna, malesuada vitae velit
                                    in, ultrices fringilla metus. Nulla facilisi.
                                </p>
                                <div className="row">
                                    <div className="col-lg-6">
                                        <h4>London Office</h4>
                                        <ul className="contact_list">
                                            <li>
                                                <i className="fa fa-map-marker" aria-hidden="true" /> Alnahas
                                                Building, 2 AlBahr St, Tanta AlGharbia, Egypt.
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
                                                <i className="fa fa-clock-o" aria-hidden="true" /> Open Time:
                                                9AM - 6PM
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="col-lg-6">
                                        <h4>New York Office</h4>
                                        <ul className="contact_list">
                                            <li>
                                                <i className="fa fa-map-marker" aria-hidden="true" /> Alnahas
                                                Building, 2 AlBahr St, Tanta AlGharbia, Egypt.
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
                                                <i className="fa fa-clock-o" aria-hidden="true" /> Open Time:
                                                9AM - 6PM
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <h2 className="block_title">Leave a Message</h2>
                                <form>
                                    <div className="form-group">
                                        <input type="text" className="form-control" placeholder="Name" />
                                    </div>
                                    <div className="form-group">
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Email Address"
                                        />
                                    </div>
                                    <div className="form-group">
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Phone Number"
                                        />
                                    </div>
                                    <div className="form-group">
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Subject"
                                        />
                                    </div>
                                    <div className="form-group">
          <textarea
              className="form-control"
              placeholder="Message"
              defaultValue={""}
          />
                                    </div>
                                    <button type="submit" className="btn w-100">
                                        Send Message
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Contact Page 1 end */}
                {/* map */}
                <div className="contact_map">
                    <div className="map">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26372472.32939229!2d-113.73907545808902!3d36.20800122385796!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54eab584e432360b%3A0x1c3bb99243deb742!2sUnited+States!5e0!3m2!1sen!2sin!4v1501739817357"
                            width={600}
                            height={400}
                            className="frame_width"
                        />
                    </div>
                </div>
                {/* Map ends */}
                <Footer2 />
            </>
        );
    }
}


export default ContactUs1;