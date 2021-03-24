import React from "react";
import radium from "radium";
import { Link } from "react-router-dom";
import DST from "../../dist/img/logo_lg.png";

const Footer = props => {

    return (
        <footer className="main-footer  text-center" style={{ backgroundColor: "#212529" }}>
            <div className="row">
                <div className="col">
                    <div className="c-footer__row row c-footer__social">
                        <div className="c-footer__section column sm-12 lg-10">
                            <ul class="o-list o-list--inline" style={{ display: "flex", marginLeft: "6rem" }}>
                                <li class="o-list__item c-footer__social-link" style={{ padding: "10px" }}>
                                    <a href="https://www.facebook.com" target="_blank" title="Facebook Account" style={{ fontSize: "25px", color: "white" }}><i class="fab fa-facebook-f"></i></a>
                                </li>
                                <li class="o-list__item c-footer__social-link" style={{ padding: "10px" }}>
                                    <a href="http://www.linkedin.com" target="_blank" title="LinkedIn Account" style={{ fontSize: "25px", color: "white" }}><i class="fab fa-linkedin"></i></a>
                                </li>
                                <li class="o-list__item c-footer__social-link" style={{ padding: "10px" }}>
                                    <a href="http://www.instagram.com" target="_blank" title="Instagram Account" style={{ fontSize: "25px", color: "white" }}><i class="fab fa-instagram"></i></a>
                                </li>
                                <li class="o-list__item c-footer__social-link" style={{ padding: "10px" }}>
                                    <a href="http://www.twitter.com" target="_blank" title="Twitter Account" style={{ fontSize: "25px", color: "white" }}><i class="fab fa-twitter"></i></a>
                                </li>
                                <li class="o-list__item c-footer__social-link" style={{ padding: "10px" }}>
                                    <a href="https://www.youtube.com" target="_blank" title="YouTube Account" style={{ fontSize: "25px", color: "white" }}><i class="fab fa-youtube"></i></a>
                                </li>

                            </ul>
                        </div>
                        <div className="c-footer__section column sm-12 lg-2 hide-for-medium-down u-text-right">
                            <Link
                                to="/"
                                className="list-group"
                                autoFocus={true}
                            >
                                <div
                                    style={{
                                        marginLeft: "108rem",
                                        fontWeight: "bolder",
                                        display: "flex",
                                        marginTop: "-10rem",
                                        justifyContent: "left",
                                        alignItems: "center",
                                        flexDirection: "column-reverse"
                                    }}
                                >
                                    {/*  <strong style={{ fontSize: "1.6rem", marginLeft: "1rem" }}>
                                        DST
                </strong> */}
                                    <img src={DST} style={{ height: " 3rem", width: "6rem" }} />
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div className="c-footer__row row c-footer__legal">
                        <div className="c-footer__section column sm-6 lg-12">
                            <ul class="o-list o-list--inline c-footer--legal-links" style={{ display: "flex", marginLeft: "6rem", marginTop: "-8rem" }}>
                                <li class="o-list__item c-footer__legal-link" style={{ padding: "3px" }}><a href="/" title="Footer link to Cookie Policy" style={{ color: "white" }}>Cookie Policy |</a></li>
                                <li class="o-list__item c-footer__legal-link" style={{ padding: "3px" }}><a href="/" title="Footer link to Terms of Use" style={{ color: "white" }}>Terms of Use |</a></li>
                                <li class="o-list__item c-footer__legal-link" style={{ padding: "3px" }}><a href="/" title="Footer link to Privacy Policy" style={{ color: "white" }}>Privacy Policy |</a></li>
                                <li class="o-list__item c-footer__legal-link" style={{ padding: "3px" }}><a href="/" title="Footer link to Accessibility" style={{ color: "white" }}>Accessibility |</a></li>
                                <li class="o-list__item c-footer__legal-link" style={{ padding: "3px" }}><a href="/" target="_blank" title="Footer link to Subscription Center" style={{ color: "white" }}>Subscription Center |</a></li>
                                <li class="o-list__item c-footer__legal-link" style={{ padding: "3px" }}><a href="/" title="Trademarks Footer Link" style={{ color: "white" }}>Trademarks |</a></li>
                                <li class="o-list__item c-footer__legal-link" style={{ padding: "3px" }}><a href="/" title="Footer Link to IoT Glossary" style={{ color: "white" }}>Glossary</a></li>        </ul>
                        </div>
                    </div>

                    <div className="copyright" style={{ marginTop: "-4rem", marginLeft: "-4rem" }}>
                        <strong style={{ marginLeft: "-64rem" }}>
                            Copyright &copy; 2019-2020
        <Link to=""> Digitalshark technology</Link>. All rights reserved.
      </strong>
                    </div>
                    <div className="float-right d-none d-sm-inline-block">
                        <b>Version</b>
                    </div>
                </div>
            </div>
        </footer>

    );
};
export default Footer;