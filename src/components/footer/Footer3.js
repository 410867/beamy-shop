import React from 'react';
import { Link } from "react-router-dom";

class Footer3 extends React.Component {
    render() {
        return (
            <>
                {/* Footer */}
                <footer className="footer footer_style3">
                    <div className="secondary_bg padding_40px">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-6">
                                    <nav>
                                        <ul>
                                            <li>
                                                <Link to="/privacy-policy">Returns Policy</Link>
                                            </li>
                                            <li>
                                                <Link to="/terms-conditions">Terms of use</Link>
                                            </li>
                                            <li>
                                                <Link to="/privacy-policy">Privacy</Link>
                                            </li>
                                        </ul>
                                    </nav>
                                    <p>© Home1 2021. All Right reserved</p>
                                </div>
                                <div className="col-lg-6">
                                    <div className="footer_social">
                                        <p>Follow Us</p>
                                        <ul className="social_group_style">
                                            <li>
                                                <Link to="#">
                                                    <i className="fab fa-facebook-square" aria-hidden="true" />
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="#">
                                                    <i className="fab fa-linkedin-square" aria-hidden="true" />
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="#">
                                                    <i className="fab fa-twitter-square" aria-hidden="true" />
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="#">
                                                    <i className="fab fa-pinterest-square" aria-hidden="true" />
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
                {/* Footer ends */}
            </>
        );
    }
}


export default Footer3;