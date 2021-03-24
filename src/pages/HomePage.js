import React, { Component } from "react";
import radium from "radium";
import Product from "../dist/img/product-image.jpeg";
import Rigol from "../dist/img/Product-parterns/ragol/rigol_logo_cropped.png";
import Lpkf from "../dist/img/Product-parterns/lpkf_logo_cropped.png";
import Nvidia from "../dist/img/Product-parterns/nvidia/Nvidia_dls.jpg";
class HomePage extends Component {
    componentDidMount() { }
    render() {
        console.log("NewSite:Homepage Render-Props", this.props);
        return (
            <React.Fragment>
                <div className="content-wrapper">
                    <div className="page-header">
                        <div className="container-fluid page-body product-desc">
                            <div className="row rowStyleDGXSystem1" >
                                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                                    <img
                                        src={Product}
                                        className="img-thumbnail imageStyleFirst"
                                        /*  alt="DL3000 Series   |  DC Electronic Loads" */
                                        style={{
                                            height: "50vh",
                                            width: "100%",
                                            border: "none",
                                            boxShadow: "none",
                                            marginTop: "84px",
                                            marginLeft: "-15px"
                                        }}
                                    />
                                </div>
                                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6" style={{
                                    height: "50vh",
                                    width: "100%",
                                    border: "none",
                                    boxShadow: "none",
                                    marginTop: "65px",
                                    height: "34rem",
                                    marginLeft: "-10px",

                                    marginTop: "96px",
                                    backgroundColor: "#c2c7d0"
                                }}>
                                    <h4
                                        style={{
                                            padding: "30px 40px 0px 40px",
                                            fontSize: "24px",
                                            textAlign: "center",
                                            fontFamily: "Lato, Helvetica, Arial, sans-serif",

                                        }}>Product Partners</h4>
                                    <p>Find out more about how we can help your
                                         organization navigate its next.
                                             Let us know your areas of interest
                                             so that we can serve you better.</p>
                                    <a href="/"
                                        data-component="CallToAction"
                                        style={{ marginLeft: "20px" }}
                                        title="Ekkosense Case Study"
                                        tabindex="0"
                                        className="c_button">View more details</a>

                                </div>

                                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12" style={{
                                    height: "50vh",
                                    width: "100%",
                                    border: "none",
                                    boxShadow: "none",
                                    marginTop: "-13px",
                                    height: "34rem",
                                    marginLeft: "-5px",


                                    backgroundColor: "#1f2d3d"
                                }}>
                                    <h4
                                        style={{
                                            padding: "30px 40px 0px 40px",
                                            fontSize: "24px",
                                            textAlign: "center",
                                            fontFamily: "Lato, Helvetica, Arial, sans-serif",
                                            color: "white"
                                        }}>Texas Instrument</h4>
                                    <p style={{ color: "white", textAlign: "center" }}>TI is a global semiconductor design & manufacturing company.
                                             Innovate with 80000+ analog ICs & embedded processors, software & largest sales/support staff.</p>

                                    <a href="/"
                                        data-component="CallToAction"
                                        style={{ marginLeft: "55rem" }}
                                        title="Ekkosense Case Study"
                                        tabindex="0"
                                        className="c_button">View more details</a>
                                </div>

                                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6" style={{
                                    height: "50vh",
                                    width: "100%",
                                    border: "none",
                                    boxShadow: "none",
                                    marginTop: "-8px",
                                    height: "34rem",
                                    marginLeft: "-10px",


                                    backgroundColor: "#c2c7d0"
                                }}>
                                    <h4
                                        style={{
                                            padding: "30px 40px 0px 40px",
                                            fontSize: "24px",
                                            textAlign: "center",
                                            fontFamily: "Lato, Helvetica, Arial, sans-serif",

                                        }}>Rigol</h4>
                                    <p>Find out more about how we can help your
                                         organization navigate its next.
                                             Let us know your areas of interest
                                             so that we can serve you better.</p>
                                    <a href="/"
                                        data-component="CallToAction"
                                        style={{ marginLeft: "20px" }}
                                        title="Ekkosense Case Study"
                                        tabindex="0"
                                        className="c_button">View more details</a>
                                </div>

                                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                                    <img
                                        src={Rigol}
                                        className="img-thumbnail imageStyleFirst"
                                        /*  alt="DL3000 Series   |  DC Electronic Loads" */
                                        style={{
                                            height: "50vh",
                                            width: "100%",
                                            border: "none",
                                            boxShadow: "none",
                                            marginTop: "-9px"
                                        }}
                                    />
                                </div>

                                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                                    <img
                                        src={Lpkf}
                                        className="img-thumbnail imageStyleFirst"
                                        /*  alt="DL3000 Series   |  DC Electronic Loads" */
                                        style={{
                                            height: "50vh",
                                            width: "81%",
                                            border: "none",
                                            boxShadow: "none",
                                            marginTop: "-9px"
                                        }}
                                    />
                                </div>

                                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6" style={{
                                    height: "50vh",
                                    width: "100%",
                                    border: "none",
                                    boxShadow: "none",
                                    marginTop: "-8px",
                                    height: "34rem",
                                    marginLeft: "-10px",


                                    backgroundColor: "#c2c7d0"
                                }}>
                                    <h4
                                        style={{
                                            padding: "30px 40px 0px 40px",
                                            fontSize: "24px",
                                            textAlign: "center",
                                            fontFamily: "Lato, Helvetica, Arial, sans-serif",

                                        }}>LPKF</h4>
                                    <p>Find out more about how we can help your
                                         organization navigate its next.
                                             Let us know your areas of interest
                                             so that we can serve you better.</p>
                                    <a href="/"
                                        data-component="CallToAction"
                                        style={{ marginLeft: "20px" }}
                                        title="Ekkosense Case Study"
                                        tabindex="0"
                                        className="c_button">View more details</a>
                                </div>

                                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6" style={{
                                    height: "50vh",
                                    width: "100%",
                                    border: "none",
                                    boxShadow: "none",
                                    marginTop: "-8px",
                                    height: "34rem",
                                    marginLeft: "-10px",


                                    backgroundColor: "#c2c7d0"
                                }}>
                                    <h4
                                        style={{
                                            padding: "30px 40px 0px 40px",
                                            fontSize: "24px",
                                            textAlign: "center",
                                            fontFamily: "Lato, Helvetica, Arial, sans-serif",

                                        }}>Nvidia</h4>
                                    <p>Find out more about how we can help your
                                         organization navigate its next.
                                             Let us know your areas of interest
                                             so that we can serve you better.</p>
                                    <a href="/"
                                        data-component="CallToAction"
                                        style={{ marginLeft: "20px" }}
                                        title="Ekkosense Case Study"
                                        tabindex="0"
                                        className="c_button">View more details</a>
                                </div>

                                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                                    <img
                                        src={Nvidia}
                                        className="img-thumbnail imageStyleFirst"
                                        /*  alt="DL3000 Series   |  DC Electronic Loads" */
                                        style={{
                                            height: "50vh",
                                            width: "73%",
                                            border: "none",
                                            boxShadow: "none",
                                            marginTop: "-9px",
                                            marginLeft: "10rem"
                                        }}
                                    />
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default radium(HomePage);