import React from "react";
import radium from "radium";

import "./Technical-finishing-school.css";
import "../dist/css/engineering-services.css";
import { Fade } from "react-reveal";
import firebase from "../dist/img/technologies/firebaselogo.png";
import ux from "../dist/img/technologies/ux2.jpg";
import meanImg from "../dist/img/technologies/meanMern.jpg";
import pwa2 from "../dist/img/technologies/pwa2.png";
import aws from "../dist/img/technologies/aws.png";
import Azure from "../dist/img/technologies/azuremc.png";
import gc from "../dist/img/technologies/cloud.png";
import mc from "../dist/img/technologies/mc1.png";
import sensor from "../dist/img/technologies/sr.jpg";
import pcb from "../dist/img/technologies/pcb.png";
import schematics from "../dist/img/technologies/shematic.jpg";
import firmware from "../dist/img/technologies/firm1.jpg";
import qt from "../dist/img/technologies/qtImage.jpg";
import yocto from "../dist/img/technologies/yocto1.jpg";
import ble from "../dist/img/technologies/ble.jpg";
import wifi from "../dist/img/technologies/wifi.png";
import mqtt from "../dist/img/technologies/mqtt.jpg";
import python from "../dist/img/technologies/python.png";
import pytorch from "../dist/img/technologies/pyTorch.png";
import tensorflow from "../dist/img/technologies/tensorflow.jpg";

import crossImage from "../dist/img/afterCorrection/dataImage-mob.png";
import engineering from "../dist/img/afterCorrection/engservice.png";
import EmbeddedImage from "../dist/img/Embedded_DS/EDS.png";
import EngineeringHardwareImage from "../dist/img/Embedded_DS/HardwareDesignImage.jpg";
import embeddedImage from "../dist/img/Embedded_DS/embedded.png";
import FPGAImage from "../dist/img/Embedded_DS/fpgaImage.png";
import Mechanical from "../dist/img/Embedded_DS/Mechanical.jpg";
import background2 from "../dist/img/academic/background2.png";
import embedded from "../dist/img/afterCorrection/engservice.png";
import testauto1 from "../dist/img/Embedded_DS/TestAuto1.png";
import testauto2 from "../dist/img/Embedded_DS/TestAuto2.png";
const EngineeringServices = (props) => {
  const { pageBreak, pageHeading, pageHeadingBody, pageHeadingTitle } = styles;
  let paraHeading = {
    fontFamily: "Raleway, sans-serif",
    color: "#2f2b2b",
    lineHeight: "1.1",
    fontWeight: "600",
    marginTop: "0",
    marginBottom: "10px",
    padding: "0",
    textTransform: "uppercase",
  };

  let paragraph = {
    fontFamily: "Open Sans, sans-serif",
    fontSize: "14px",
    fontWeight: "400",
    lineHeight: "26px",
    color: "#777171",
  };

  return (
    <React.Fragment>
      <div className="page-body ">
        <section>
          <div className="ContainerEngineeringService EngineeringBannerImage">
            <img
              className="EngineeringBackgroundImage"
              src={background2}
              alt="background"
            ></img>
            <div className="EngineeringBannerDataPosition">
              <h2>Engineering Services</h2>

              <p>
                What we usually consider as impossible are simply engineering
                problems… there’s no law of physics preventing them and When
                your dreams include service to others - accomplishing something
                that contributes to others - it also accelerates the
                accomplishment of that goal
              </p>
              <div
                className="LearnMoreLink "
                onClick={(e) => {
                  window.scrollTo({
                    top: 771,
                    behavior: "smooth",
                  });
                }}
              >
                Learn More{" "}
                <i className="fa fa-arrow-down" aria-hidden="true"></i>
              </div>
            </div>
            <div className="EngineeiringImagePosition banner-item-home-img">
              <img src={embedded} alt="engineering services"></img>
            </div>
          </div>
        </section>

        <section>
          <div className="ImageDisplay">
            <div className="arrowImagePosition">
              <img src={crossImage} alt="crossImage"></img>
            </div>
            <div className="dataPresent">
              <h2>Engineering Services </h2>
              <p>
                What we usually consider as impossible are simply engineering
                problems… there’s no law of physics preventing them and When
                your dreams include service to others - accomplishing something
                that contributes to others - it also accelerates the
                accomplishment of that goal
              </p>
            </div>
            <div className="engineeringImage banner-item-home-img">
              <img
                src={engineering}
                alt="Embedded"
                style={{ width: "86%" }}
              ></img>
            </div>
          </div>
        </section>

        <div className="pageBreak" style={pageBreak}></div>
        <div
          className="col-md-12"
          style={{
            display: "flex",
            justifyContent: "center",
            justifyItems: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <div className="header-section" style={pageHeading}>
            <div className="page-title" style={pageHeadingBody}>
              <Fade bottom>
                <h2 style={pageHeadingTitle}>
                  <span>Embedded Design Services</span>
                </h2>
              </Fade>
            </div>{" "}
          </div>
        </div>
        <div className="EmbeddedImagePosition">
          <img className="newEmbeddedImage" src={EmbeddedImage} alt="" />
        </div>

        <section>
          <div className="engineeringHEFMStyle">
            <div className="row rowColor marginrowTop">
              <div className="HardwareImg col-xs-12 col-md-6">
                <div className="sectionImageHardware">
                  <img
                    src={EngineeringHardwareImage}
                    alt="Hardware Design Services"
                  ></img>
                </div>
              </div>
              <div className="col-xs-12 col-md-6">
                <div className="HardWareData">
                  <h2>Hardware Design Services</h2>
                  <p>
                    Embedded Design Service team supports complete electronic
                    hardware design activities which include schematic design,
                    bill of material finalization, Printed Circuit Board (PCB)
                    design, prototyping, production support and FPGA design
                    services for customer-specific requirements. The key
                    hardware design ranges from small-footprint, power-optimized
                    solutions to high-end, rugged systems built around various
                    embedded processors and DSPs.
                  </p>
                </div>
              </div>
            </div>
            <div className="row rowColor EmbeddedRowReverse">
              <div className="col-xs-12 col-md-6">
                <div className="EmbeddedData">
                  <h2>Embedded Firmware / Software Services</h2>
                  <p>
                    DST offers a broad range of software services relating to
                    embedded systems programming and real time embedded systems
                    software development. such as: Boot loader, Development of
                    Board Support Packages, Device Drivers, Firmware and
                    Diagnostics, Yocto Linux, Embedded Linux, WinCE, GUI
                    development, OS porting, Embedded application development
                    Feature enhancements, Development and porting of protocol
                    Stack and Development of Wireless stack.
                  </p>
                </div>
              </div>

              <div className="EmbeddedImg col-xs-12 col-md-6">
                <div className="sectionImageEmbedded">
                  <img
                    src={embeddedImage}
                    alt="Embeddded Firmware and Software Serices"
                  ></img>
                </div>
              </div>
            </div>

            <div className="row rowColor">
              <div className="FPGAImg col-xs-12 col-md-6">
                <div className="sectionImageFPGA">
                  <img src={FPGAImage} alt="FPGA Design Services"></img>
                </div>
              </div>
              <div className="col-xs-12 col-md-6">
                <div className="FPGAData">
                  <h2>FPGA Design Services</h2>
                  <p>
                    Today, many of the High speed and complex designs need the
                    integration and flexibility that an FPGA can offer. The
                    ability to be reconfigured enables the FPGAs to extend the
                    lifecycle of a custom product to suit the changing market
                    needs. DST has the right experience and capability to
                    satisfy any phase of product life cycle including partial or
                    complete architecture design, feature additions to existing
                    designs, test bench development or functional verification.
                  </p>
                </div>
              </div>
            </div>
            <div className="row rowColor MechanicalRowReverse">
              <div className="col-xs-12 col-md-6">
                <div className="MechanicalData">
                  <h2>Mechanical Design Services</h2>
                  <p>
                    DST addresses mechanical design requirement for product
                    engineering with 3D modeling and rapid prototyping
                    techniques to provide early user experience during product
                    development cycle. It also has expertise in re-engineering
                    and tear down analysis for product life extension. With its
                    eco partner, DST provides manufacturing and support to
                    complete mechanical engineering requirements for New Product
                    Development . With its expertise in tools and customized
                    processes, DST brings reliable, feature-rich products at
                    competitive prices with the least development lead time.
                  </p>
                </div>
              </div>

              <div className="MechanicalImg col-xs-12 col-md-6">
                <div className="sectionImageMechanical">
                  <img src={Mechanical} alt="Mechanical Design Services"></img>
                </div>
              </div>
            </div>
          </div>
        </section>

        <br />
        <br />

        <div className="row rowDataStyle datarowStyle">
          {" "}
          {/* new change */}
          <div className="col-md-12">
            <div className="col-md-3 col-sm-12 col-xs-12 col-lg-3 colspan3">
              <img className="imageTag" src={mc} alt="Micro Controller" />
              <div className="middle">
                <div className="text">
                  <h5>Micro Controller</h5>
                  <div className="textHeight">
                    A small and low-cost microcomputer, which is designed to
                    perform the specific tasks of embedded systems like
                    displaying microwave’s information, receiving remote
                    signals, etc.
                  </div>
                  <a
                    href="https://learn.sparkfun.com/tutorials/pcb-basics/all"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Read More
                    <i class="fa fa-angle-double-right" aria-hidden="true"></i>
                  </a>
                </div>
              </div>
              <h6 className="textMc">Micro Controller</h6>
            </div>
            <div className="col-md-3 col-sm-12 col-xs-12 col-lg-3 colspan3">
              <img className="imageTag" src={sensor} alt="Sensors" />
              <div className="middle">
                <div className="text">
                  <h5>Sensors</h5>
                  <div className="textHeight">
                    A device, module, machine, or subsystem whose purpose is to
                    detect events or changes in its environment and send the
                    information to other electronics, frequently a computer
                    processor
                  </div>
                  <a
                    href="https://www.maximintegrated.com/en/products/sensors.html"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Read More
                    <i class="fa fa-angle-double-right" aria-hidden="true"></i>
                  </a>
                </div>
              </div>
              <h6 className="textSensor">Sensors</h6>
            </div>
            <div className="col-md-3 col-sm-12 col-xs-12 col-lg-3 colspan3">
              <img className="imageTag" src={pcb} alt="PCB Design" />
              <div className="middle">
                <div className="text">
                  <h5>PCB Design</h5>
                  <div className="textHeight">
                    A board that has lines and pads that connect various points
                    together. PCB allows signals and power to be routed between
                    physical devices.
                  </div>
                  <a
                    href="https://www.maximintegrated.com/en/products/sensors.html"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Read More
                    <i class="fa fa-angle-double-right" aria-hidden="true"></i>
                  </a>
                </div>
              </div>
              <h6 className="textMc">PCB Design</h6>
            </div>
            <div className="col-md-3 col-sm-12 col-xs-12 col-lg-3 colspan3">
              <img className="imageTag" src={schematics} alt="Schematics" />
              <div className="middle">
                <div className="text">
                  <h5>Schemantics</h5>
                  <div className="textHeight">
                    Circuit schematics are the bridge between conceptual
                    electrical design and physical realization of a printed
                    circuit board assembly, or PCBA.
                  </div>
                  <a
                    href="https://www.allaboutcircuits.com/technical-articles/understanding-schematics/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Read More
                    <i class="fa fa-angle-double-right" aria-hidden="true"></i>
                  </a>
                </div>
              </div>
              <h6 className="textMc">Schematics</h6>
            </div>
          </div>
        </div>

        <div className="row datarowStyle">
          <div className="col-md-12">
            <div className="col-md-4 col-sm-12 col-xs-12 col-lg-3 colspan3">
              <img className="imageTag" src={firmware} alt="Firmware" />
              <div className="middle">
                <div className="text">
                  <h5>Firmware</h5>
                  <div className="textHeight">
                    Embedded firmware is the flash memory chip that stores
                    specialized software running in a chip in an embedded device
                    to control its functions.
                  </div>
                  <a
                    href="https://internetofthingsagenda.techtarget.com/definition/embedded-firmware"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Read More
                    <i class="fa fa-angle-double-right" aria-hidden="true"></i>
                  </a>
                </div>
              </div>
              <h6 className="textSensor">Firmware</h6>
            </div>
            <div className="col-md-4 col-sm-12 col-xs-12 col-lg-3 colspan3">
              <img className="imageTag" src={qt} alt="QT  " />
              <div className="middle">
                <div className="text">
                  <h5>Qt</h5>
                  <div className="textHeight">
                    Qt for Embedded Linux applications write directly to the
                    framebuffer, eliminating the need for the X Window System
                    and saving memory.
                  </div>
                  <a
                    href="https://www.qt.io/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Read More
                    <i class="fa fa-angle-double-right" aria-hidden="true"></i>
                  </a>
                </div>
              </div>
              <h6>QT</h6>
            </div>
            <div className="col-md-4 col-sm-12 col-xs-12 col-lg-3 colspan3">
              <img className="imageTag" src={yocto} alt="yocto" />
              <div className="middle">
                <div className="text">
                  <h5>Yocto</h5>
                  <div className="textHeight">
                    The Yocto Project is an open source collaboration project
                    that provides templates, tools, and methods supporting
                    custom Linux-based systems for embedded products, regardless
                    of the hardware architecture.
                  </div>
                  <a
                    href="https://developer.ibm.com/tutorials/l-yocto-linux/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {" "}
                    Read More{" "}
                    <i class="fa fa-angle-double-right" aria-hidden="true"></i>
                  </a>
                </div>
              </div>
              <h6 className="textMc">Yocto</h6>
            </div>
          </div>
        </div>

        <section className="EngSrv-technology-section">
          <div
            className="col-md-12"
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              justifyItems: "center",
              alignItems: "center",
              flexDirection: "column",
              margin: "0",
            }}
          >
            <div className="header-section" style={pageHeading}>
              <div className="page-title" style={pageHeadingBody}>
                <Fade bottom>
                  <h2 style={pageHeadingTitle}>
                    <span>Web & Cloud Services</span>
                  </h2>
                </Fade>
              </div>{" "}
            </div>
          </div>
          <div className="dataTextStyle">
            <div className="colTextStyle" style={{ justifyContent: "center" }}>
              {/* <h3>
                <span>Simplify </span>Your Business With Customized Web
                Solutions
              </h3> */}
              <div className="divClassStyle">
                <p>
                  At Digital Shark, We offer a one stop solution for all your
                  Web Development services ,We have extensive experience on
                  developing various kind of applications. we study idea, use
                  cases, requirements and convert them into reality. We would be
                  support production performance and scaling and cloud services.
                </p>
              </div>
            </div>
          </div>
          <div className="row datarowStyle">
            <div className="col-md-12">
              <div className="col-md-3 col-sm-12 col-xs-12 col-lg-3 colspan3">
                <img className="imageTag" src={ux} alt="ux" />
                <div className="middle">
                  <div className="text">
                    <h5>UX Design</h5>
                    <div className="textHeight">
                      The process design teams use to create products that
                      provide meaningful and relevant experiences to users.
                    </div>
                    <a
                      href="https://www.interaction-design.org/literature/topics/ux-design"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Read More
                      <i
                        class="fa fa-angle-double-right"
                        aria-hidden="true"
                      ></i>
                    </a>
                  </div>
                </div>
                <h6 className="textReact">UX</h6>
              </div>

              <div className="col-md-3 col-sm-12 col-xs-12 col-lg-3 colspan3">
                <img className="imageTag" src={meanImg} alt="mean" />
                <div className="middle">
                  <div className="text">
                    <h5>MEAN & MERN</h5>
                    <div className="textHeight">
                      The need for technology has go-ahead the developers to
                      work on both Front-end as well as on Back-end and much
                      more.
                    </div>
                    <a
                      href="https://www.developeronrent.com/blogs/mean-vs-mern-technologies"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Read More
                      <i
                        class="fa fa-angle-double-right"
                        aria-hidden="true"
                      ></i>
                    </a>
                  </div>
                </div>
                <h6 className="textReact">MEAN & MERN</h6>
              </div>

              <div className="col-md-3 col-sm-12 col-xs-12 col-lg-3 colspan3">
                <img className="imageTag" src={pwa2} alt="pwa" />
                <div className="middle">
                  <div className="text">
                    <h5>Progressive Web App</h5>
                    <div className="textHeight">
                      Progressive Web Apps are user experiences that have the
                      reach of the web
                    </div>
                    <a
                      href="https://developers.google.com/web/progressive-web-apps/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Read More
                      <i
                        class="fa fa-angle-double-right"
                        aria-hidden="true"
                      ></i>
                    </a>
                  </div>
                </div>
                <h6 className="textReact">Progressive Web Apps</h6>
              </div>
              <div className="col-md-3 col-sm-12 col-xs-12 col-lg-3 colspan3">
                <img className="imageTag" src={firebase} alt="mean" />
                <div className="middle">
                  <div className="text">
                    <h5>Firebase</h5>
                    <div className="textHeight">
                      Firebase gives you functionality like analytics,
                      databases, messaging and crash reporting so you can move
                      quickly and focus on your users.
                    </div>
                    <a
                      href="https://firebase.google.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Read More
                      <i
                        class="fa fa-angle-double-right"
                        aria-hidden="true"
                      ></i>
                    </a>
                  </div>
                </div>
                <h6 className="textReact">Firebase</h6>
              </div>
            </div>
          </div>

          <div className="row datarowStyle">
            <div className="col-md-12">
              <div className="col-md-4 col-sm-12 col-xs-12 col-lg-4 colspan4">
                <img className="imageTag" src={aws} alt="aws" />
                <div className="middle">
                  <div className="text">
                    <h5>Amazon Web Services</h5>
                    <div className="textHeight">
                      Amazon Web Services (AWS) is the world’s most
                      comprehensive and broadly adopted cloud platform, offering
                      over 165 fully featured services from data centers
                      globally.
                    </div>

                    <a
                      href="https://aws.amazon.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Read More
                      <i
                        class="fa fa-angle-double-right"
                        aria-hidden="true"
                      ></i>
                    </a>
                  </div>
                </div>
                <h6 className="textReact">AWS </h6>
              </div>
              <div className="col-md-4 col-sm-12 col-xs-12 col-lg-4 colspan4">
                <img className="imageTag" src={Azure} alt="Azure" />
                <div className="middle">
                  <div className="text">
                    <h5>Microsoft Azure</h5>
                    <div className="textHeight">
                      Turn ideas into solutions with more than 100 services to
                      build, deploy and manage applications
                    </div>
                    <a
                      href="https://azure.microsoft.com/en-in/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Read More
                      <i
                        class="fa fa-angle-double-right"
                        aria-hidden="true"
                      ></i>
                    </a>
                  </div>
                </div>
                <h6 className="textAzure">Microsoft Azure</h6>
              </div>
              <div className="col-md-4 col-sm-12 col-xs-12 col-lg-4 colspan4">
                <img className="imageTag" src={gc} alt="Google Cloud" />
                <div className="middle">
                  <div className="text">
                    <h5>Google Cloud</h5>
                    <div className="textHeight">
                      Find the solution that helps you modernize IT, unlock the
                      value in your business, and enable your company to
                      participate fully in the digital economy.
                    </div>
                    <a
                      href="https://cloud.google.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Read More
                      <i
                        class="fa fa-angle-double-right"
                        aria-hidden="true"
                      ></i>
                    </a>
                  </div>
                </div>
                <h6 className="textReact">Google Cloud</h6>
              </div>
            </div>
          </div>
          {/* <<<<<<<<<<<<<<<Test automation >>>>>>>>>>>>>>>>>>>>> */}

          {/* <<<<<<<<<<<<<<<Iot >>>>>>>>>>>>>>>>>>>>> */}

          {/* <<<<<<<<<<<<<<<Iot >>>>>>>>>>>>>>>>>>>>> */}
          <br />
          <br />
          <br />
          <div
            className="col-md-12"
            style={{
              display: "flex",
              justifyContent: "center",
              justifyItems: "center",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <div className="header-section" style={pageHeading}>
              <div className="page-title" style={pageHeadingBody}>
                <Fade bottom>
                  <h2 style={pageHeadingTitle}>
                    <span>IOT Solutions</span>
                  </h2>
                </Fade>
              </div>{" "}
            </div>
          </div>
          <div className="dataTextStyle">
            <div className="colTextStyle" style={{ justifyContent: "center" }}>
              {/* <h3>
                <span>Simplify </span>Your Business With Customized Web
                Solutions
              </h3> */}
              <div className="divClassStyle">
                <p>
                  Internet of Things (IoT) is a system of interrelated computing
                  devices, mechanical and digital machines, objects, animals or
                  people that are provided with unique identifiers (UIDs) and
                  the ability to transfer data over a network without requiring
                  human-to-human or human-to-computer interaction.
                </p>
              </div>
            </div>
          </div>
          <div className="row datarowStyle">
            <div className="col-md-12">
              <div className="col-md-3 col-sm-12 col-xs-12 col-lg-3 colspan3">
                <img
                  className="imageTag"
                  src={ble}
                  alt="Bluetooth Lower Engery"
                />
                <div className="middle">
                  <div className="text">
                    <h5>BLE</h5>
                    <div className="textHeight">
                      BLE (Bluetooth Low Energy) such as iBeacons or Beacons are
                      used to send data over short distances. This wireless
                      technology has become a recent alternative for Wi-Fi,
                      especially in IoT devices and apps.
                    </div>
                    <a
                      href="http://triotree.com/blog/new-iot-platform-for-iot-device-bluetooth-low-energy/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Read More
                      <i
                        class="fa fa-angle-double-right"
                        aria-hidden="true"
                      ></i>
                    </a>
                  </div>
                </div>
                <h6>BLE</h6>
              </div>
              <div className="col-md-3 col-sm-12 col-xs-12 col-lg-3 colspan3">
                <img
                  className="imageTag"
                  src={wifi}
                  alt="Wi-Fi"
                  style={{
                    height: "9rem",
                    marginTop: "11%",
                  }}
                />
                <div className="middle">
                  <div className="text">
                    <h5>Wi-Fi</h5>
                    <div className="textHeight">
                      Wi-Fi is the name of a popular wireless networking
                      technology that uses radio waves to provide wireless
                      high-speed Internet and network connections.
                    </div>
                    <a
                      href="http:https://www.webopedia.com/TERM/W/Wi_Fi.html"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Read More
                      <i
                        class="fa fa-angle-double-right"
                        aria-hidden="true"
                      ></i>
                    </a>
                  </div>
                </div>
                <h6>Wi-Fi</h6>
              </div>
              <div className="col-md-3 col-sm-12 col-xs-12 col-lg-3 colspan3">
                <img className="imageTag" src={mqtt} alt="MQTT" />
                <div className="middle">
                  <div className="text">
                    <h5>MQTT</h5>
                    <div className="textHeight">
                      MQTT is a machine-to-machine (M2M)/"Internet of Things"
                      connectivity protocol. It was designed as an extremely
                      lightweight publish/subscribe messaging transport.
                    </div>
                    <a
                      href="http://mqtt.org/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Read More
                      <i
                        class="fa fa-angle-double-right"
                        aria-hidden="true"
                      ></i>
                    </a>
                  </div>
                </div>
                <h6>MQTT</h6>
              </div>
              <div className="col-md-3 col-sm-12 col-xs-12 col-lg-3 colspan3">
                <img className="imageTag" src={python} alt="Python" />
                <div className="middle">
                  <div className="text">
                    <h5>Python</h5>
                    <div className="textHeight">
                      Python is a programming language that lets you work
                      quickly and integrate systems more effectively.
                    </div>
                    <a
                      href="https://www.python.org/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Read More
                      <i
                        class="fa fa-angle-double-right"
                        aria-hidden="true"
                      ></i>
                    </a>
                  </div>
                </div>
                <h6>Python</h6>
              </div>
            </div>
          </div>

          <div className="row datarowStyle">
            <div className="col-md-12">
              <div className="col-md-6 col-sm-12 col-xs-12 col-lg-6 colspan4">
                <img className="imageTag" src={pytorch} alt="pytorch" />
                <div className="middle">
                  <div className="text">
                    <h5>PyTorch</h5>
                    <div className="textHeight">
                      An open source machine learning framework that accelerates
                      the path from research prototyping to production
                      deployment.
                    </div>
                    <a
                      href="https://pytorch.org/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Read More
                      <i
                        class="fa fa-angle-double-right"
                        aria-hidden="true"
                      ></i>
                    </a>
                  </div>
                </div>
                <h6>PyTorch</h6>
              </div>
              <div className="col-md-6 col-sm-12 col-xs-12 col-lg-6 colspan4">
                <img className="imageTag" src={tensorflow} alt="Tensorflow  " />
                <div className="middle">
                  <div className="text">
                    <h5>Tensor Flow</h5>
                    <div className="textHeight">
                      The core open source library to help you develop and train
                      ML models. Get started quickly by running Colab notebooks
                      directly in your browser.
                    </div>
                    <a
                      href="https://www.tensorflow.org/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Read More
                      <i
                        class="fa fa-angle-double-right"
                        aria-hidden="true"
                      ></i>
                    </a>
                  </div>
                </div>
                <h6>Tensor Flow</h6>
              </div>
            </div>
          </div>
          <div
            className="col-md-12"
            style={{
              display: "flex",
              justifyContent: "center",
              justifyItems: "center",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <div className="header-section" style={pageHeading}>
              <div className="page-title" style={pageHeadingBody}>
                <Fade bottom>
                  <h2 style={pageHeadingTitle}>
                    <span>Test Automation</span>
                  </h2>
                </Fade>
              </div>{" "}
            </div>
          </div>
          <div className="TestAutoImagePosition">
            <img className="newTestAutoImage" alt="" src={testauto1} />
          </div>
          <div className="TestAuto2ImagePosition">
            <img className="newTestAuto2Image" src={testauto2} alt="" />
          </div>
          <div className="dataTextStyle">
            <div className="colTextStyle" style={{ justifyContent: "center" }}>
              {/* <h3>
                <span>Simplify </span>Your Business With Customized Web
                Solutions
              </h3> */}
              <div className="divClassStyle">
                <p>
                  Digital Shark having high expertise in the design of custom
                  test solutions for most of all facings of electronics and
                  mechanical prototype & production. Digital Shark offers
                  commercial functional test systems for a range of
                  manufacturing test applications, including automotive,
                  consumer, Medical and military-aerospace.
                </p>
              </div>
            </div>
          </div>
          <div
            className="row"
            style={{ marginLeft: "25px", marginRight: "25px", padding: "5%" }}
          >
            <div className="col-md-12 col-md-12columnStyle">
              <div className="divDetails">
                <h3 style={paraHeading}>Functional Tester</h3>
                <p className="text-justify" style={paragraph}>
                  Product functionality testing at PCB level, semi assembled
                  product or fully assembled product. Digital Shark develops
                  test solution as per customer requirement - functionality
                  testing, RF signal testing, Wi-Fi, Bluetooth & LTE testing,
                  communication bus test USB, RS232, RS485, SPI, I2C, CAN etc
                </p>
              </div>
            </div>
            <div className="col-md-12 col-md-12columnStyle">
              <h3 style={paraHeading}>Flash Programmers</h3>
              <p className="text-justify" style={paragraph}>
                Develops customised solution for all kinds of on-board flashing
                & memory programming
              </p>
            </div>
            <div className="col-md-12 col-md-12columnStyle">
              <h3 style={paraHeading}>Boundary scan testers</h3>
              <p className="text-justify" style={paragraph}>
                Product functionality testing at PCB level, semi assembled
                product or fully assembled product. Digital Shark develops test
                solution as per customer requirement - functionality testing, RF
                signal testing, Wi-Fi, Bluetooth & LTE testing, communication
                bus test USB, RS232, RS485, SPI, I2C, CAN etc
              </p>
            </div>
            <div className="col-md-12 col-md-12columnStyle">
              <h3 style={paraHeading}>Functional Tester</h3>
              <p className="text-justify" style={paragraph}>
                Boundary scan test for complex processors, FPGA, CPLD &
                Memories. Test development to detect mainly manufacturing faults
                on opens, shorts beneath the IC & connectors testing.
              </p>
            </div>
            <div className="col-md-12 col-md-12columnStyle">
              <h3 style={paraHeading}>Quality / Audit Testers</h3>
              <p className="text-justify" style={paragraph}>
                Provides quality test stations to verify the quality of your
                product design in very detail during development or randomly in
                production processes. It enables you to perform parameters and
                limit tests with boundary conditions to check out product
                behavior.
              </p>
            </div>
            <div className="col-md-12 col-md-12columnStyle">
              <h3 style={paraHeading}>Burn-In Tester</h3>
              <p className="text-justify" style={paragraph}>
                Defects or breakdowns of products are regarded as an absolute
                knockout criterion for the quality and reliability of such
                devices. All products and assemblies are tightly scrutinized
                during and after the manufacturing process by tough stress tests
                and verification procedures, in order to check whether the
                requirements of high quality manufacturing have been met.
                Solutions provided for these Custom-specific, powerful run-in,
                burn-in, life-cycle and laboratory test systems for an entire
                range of different applications
              </p>
            </div>
            <div className="col-md-12 col-md-12columnStyle">
              <h3 style={paraHeading}>Climate Chamber Tester</h3>
              <p className="text-justify" style={paragraph}>
                To check the endurance or to check the functionality under
                special environment, solutions will be provided for
                environmental tests. The products will be tested under final
              </p>
            </div>
            <div className="details-col">
              <h3>Features</h3>
              <p>Digital Shark provide full range Test solutions</p>
              <ul className="clearfix">
                <li>
                  <i className="far fa-hand-point-right" aria-hidden="true"></i>
                  Test applications in C, C++, C#.
                </li>
                <li>
                  <i className="far fa-hand-point-right" aria-hidden="true"></i>
                  Test applications in NI Labview.
                </li>
                <li>
                  <i className="far fa-hand-point-right" aria-hidden="true"></i>
                  Boundary scan test applications for Göpel, & XJTAG.
                </li>
                <li>
                  <i className="far fa-hand-point-right" aria-hidden="true"></i>
                  Test sequencer DTS Framework ( in Development ).
                </li>
                <li>
                  <i className="far fa-hand-point-right" aria-hidden="true"></i>
                  Test sequencer NI Teststand.
                </li>
                <li>
                  <i className="far fa-hand-point-right" aria-hidden="true"></i>
                  Equipments experienced with Multi Meter, Oscilloscope,
                  Spectrum Analyser, Network Analyser, Power meter, Signal
                  generator, Function Generator, Litepoint IQXel-80, etc.
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </React.Fragment>
  );
};

export default radium(EngineeringServices);
let styles = {
  carouselPos: {
    "@media  (min-width:1400px)": {
      marginLeft: "0%",
      marginTop: "18%",
    },
    // Medium devices (tablets, 768px and up)
    "@media (min-width: 768px)": {
      marginLeft: "0%",
      marginTop: "18%",
    },
    // Large devices (desktops, 992px and up)
    "@media (min-width: 992px)": {
      marginLeft: "-5%",
      marginTop: "18%",
    },

    "@media only screen and (width: 1024px) and (height: 1366px)": {
      marginLeft: "5%",
      marginTop: "18%",
    },
    "@media only screen and (device-width : 640px) and (device-height : 360px) and (orientation : landscape)": {
      minHeight: "200px",
    },
    "@media only screen and (device-width : 800px) and (device-height : 1280px) and (orientation : landscape)": {
      marginTop: "34%",
    },
  },
  bnrHeading: {
    color: "black",
    // Small devices 480px or less then
    "@media (max-width: 480px)": {
      fontSize: "smaller",
    },
    "@media only screen and (width: 800px) and (height: 1280px)": {
      marginTop: "10%",
    },
    "@media only screen and (width: 768px) and (height: 1024px)": {
      marginTop: "18%",
    },
    "@media only screen and (width: 600px) and (height: 1024px)": {
      fontSize: "2rem",
    },
    // Small devices (landscape phones, 576px and up)
    "@media screen and (min-width: 481px) and (max-width: 767px)": {
      maxWidth: "66%",
      marginLeft: "-13%",
      marginTop: "12%",
    },
    // Medium devices (tablets, 768px and up)

    "@media screen and (min-width: 768px) and (max-width:991px) ": {
      fontSize: "3rem",
    },
    "@media only screen and (width: 600px) and (height: 960px)": {
      fontSize: "2rem",
    },
    // Large devices (desktops, 992px and up)
    "@media  screen and (min-width: 992px) and (max-width:1199px)": {
      maxWidth: "84%",
      marginLeft: "-5%",
      marginTop: "0%",
    },
    "@media only screen and (width: 640px) and (height: 360px)": {
      marginTop: "-14%",
    },

    // Extra large devices (large desktops, 1200px and up)

    "@media (min-width: 1200px)": {
      maxWidth: "70%",
      marginLeft: "5%",
      marginTop: "12%",
      fontSize: "4rem",
    },

    "@media screen and (width:320px)": { fontSize: "smaller" },

    "@media only screen and (device-width : 640px) and (device-height : 360px) and (orientation : landscape)": {
      fontSize: "2rem",
    },
    "@media only screen and (device-width : 640px) and (device-height : 384px) and (orientation : landscape)": {
      fontSize: "2rem",
    },
    "@media only screen and (device-width : 1024px) and (device-height : 600px) and (orientation : landscape)": {
      marginLeft: "13%",
    },
    "@media only screen and (device-width : 732px) and (device-height : 412px) and (orientation : landscape)": {
      fontSize: "2rem",
    },
    "@media only screen and (device-width : 1024px) and (device-height : 768px) and (orientation : landscape)": {
      marginLeft: "12%",
    },
    "@media only screen and (device-width : 731px) and (device-height : 411px) and (orientation : landscape)": {
      fontSize: "2rem",
    },
    "@media screen and (device-width: 823px) and (device-height: 411px) and (orientation: landscape)": {
      marginLeft: "-29%",
      marginTop: "12%",
    },
    "@media screen and (device-width: 812px) and (device-height: 375px) and (orientation: landscape)": {
      marginLeft: "-29%",
      marginTop: "18%",
    },
    "@media only screen and (device-width : 667px) and (device-height : 375px) and (orientation : landscape)": {
      fontSize: "2rem",
    },
    "@media only screen and (device-width : 736px) and (device-height : 414px) and (orientation : landscape)": {
      fontSize: "2rem",
    },
  },

  bnrText: {
    color: "black",
    fontWeight: "600",
    fontFamily: "Lato, MoolBoran",
    textAlign: "justify",
    /*   maxWidth: "80%",
    marginLeft: "-5%", */
    "@media screen and (width:320px)": {
      marginLeft: "-9%",
      paddingRight: "0",
      lineHeight: "14px",
    },

    // Small devices 480px or less then
    "@media (max-width: 480px)": {
      marginLeft: "-5%",
    },
    "@media screen and (min-width: 481px) and (max-width: 767px)": {
      marginLeft: "-13%",
      fontSize: "1.3rem",
      lineHeight: "1.5",
      fontWeight: "600",
    },

    // Medium devices (tablets, 768px and up)

    "@media screen and (min-width: 768px) and (max-width: 991px)": {
      fontSize: "1.5rem",
      marginLeft: "0%",
      maxWidth: "81%",
      fontWeight: "600",
      lineHeight: "1.8",
    },
    "@media screen and (width: 823px) and (height: 411px)": {
      marginLeft: "-29%",
    },
    "@media screen and (width: 812px) and (height: 375px)": {
      marginLeft: "-29%",
      maxWidth: "102%",
    },
    /* "@media screen and (device-width: 823px) and (device-height: 411px) and (orientation: landscape)":{
      marginLeft: "-29%"
       
      }, */
    // Large devices (desktops, 992px and up)
    "@media screen and (min-width: 992px)  and (max-width:1199px)": {
      fontSize: "1.5rem",
      marginLeft: "13.5%",
      maxWidth: "90%",
      letterSpacing: "0.05rem",
      lineHeight: "1.8",
      fontWeight: "6000",
    },
    "@media screen and (width: 1024px) and (height: 1366px)": {
      marginLeft: "-3.5%",
    },
    // Extra large devices (large desktops, 1200px and up)

    "@media (min-width: 1200px)": {
      fontSize: "1.7rem",
      fontWeight: "600",
      marginLeft: "5%",
      maxWidth: "77%",
      letterSpacing: "0.05rem",
      lineHeight: "1.8",
    },
  },
  pageTitle: { "@media screen and (max-width:500px)": { margin: "0" } },
  pageBreak: {
    marginTop: "2%",
    "@media screen and (width:768px)": { marginTop: "-4%", height: "2vh" },
    "@media screen and (max-width:600px)": { marginTop: "3%", height: "1vh" },
    "@media screen and (max-width:500px)": { marginTop: "12%", height: "3vh" },
    "@media screen and (width:320px)": { marginTop: "4%", height: "2vh" },
  },
  pageHeading: {
    "@media screen and (max-width:789px)": {
      display: "flex",
      flexDirection: "column",
      width: "93%",
      justifyContent: "center",
    },
  },
  pageHeadingBody: {
    "@media screen and (max-width:789px)": {
      alignItems: "center",
      justifyContent: "center",
      display: "flex",
      background: "#3c32b7",
      textAlign: "center",
      textTransform: "uppercase",
      fontFamily: "Roboto, GothamBook, sans-serif",
      color: "white",
      paddingTop: "3%",

      paddingBottom: "3%",
      position: "relative",
    },
  },

  pageHeadingTitle: {
    "@media screen and (max-width:789px)": {
      fontSize: "1.6rem",
      letterSpacing: "3px",
      lineHeight: "29px",
    },
  },
  pageHeadingSubTitle: {
    // Small devices 480px or less then
    "@media (max-width: 480px)": {
      fontSize: "smaller",
      padding: "4px 5%",
      textAlign: "center",
    },
    // Medium devices (tablets, 768px and up)
    "@media (min-width: 768px)": {
      fontSize: "smaller",
      padding: "10px 12%",
      textAlign: "center",
    },
    // Large devices (desktops, 992px and up)
    "@media (min-width: 992px)": {
      fontSize: "large",
      padding: "10px 12%",
      textAlign: "center",
      maxWidth: "inherit",
    },
    // Extra large devices (large desktops, 1200px and up)

    "@media (min-width: 1200px)": {
      fontSize: "large",
      padding: "1px 22%",
      textAlign: "center",
      maxWidth: "inherit",
    },
  },
  BnrImageStyle: {
    "@media (min-width: 1400px)": { minHeight: "788px" },
  },
};
