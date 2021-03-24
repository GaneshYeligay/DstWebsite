import React, { Component } from "react";
import { Route } from "react-router-dom";
import TopNavBar from "../../top-nav-bar";
import Sidenavbar from "./navbar/side-navbar";
import Drawer from "./navbar/drawer";
import Footer from "../../pages/common/Footer";
import Main from "../../hoc/Main-comp";
import DstInnovationLab from "../../pages/Dst-innovation-lab";
import Sdp from "../../pages/sdp";
import TechnicalFinishingSchool from "../../pages/Technical-finishing-school";
import Internship from "../../pages/Internships";
import HomePage from "../../pages/academic.in/Home";
import Team from "../../pages/common/Team";
import Contact from "../../pages/common/Contact";
import Testimonials from "../../pages/Testimonials";
import AboutUs from "../../pages/common/AboutUs";
/* products */
import Rigol from "../../pages/product.in/Products/Rigol";
import Rigolpowerloadsdetails from "../../pages/product.in/Products/Product_Description/Rigol-power-loads";
import Rigoldigitalstoragedetails from "../../pages/product.in/Products/Product_Description/Rigol-Digital-storage";
import Rigolmultimeters from "../../pages/product.in/Products/Product_Description/Rigol_multimeters";
import RFSIGNALGENERATORS from "../../pages/product.in/Products/Product_Description/Rf-signal";
import Spectrumanalyzer from "../../pages/product.in/Products/Product_Description/spectrum_analyzer";
import Waveformgenerators from "../../pages/product.in/Products/Product_Description/waveform_generators";
import Lpkf from "../../pages/product.in/Products/Lpkf";
import Lpkfdesc from "../../pages/product.in/Products/Product_Description/lpkf";
import Lpkfprotomats63 from "../../pages/product.in/Products/Product_Description/lpkf_protomat";
import Lpkfprotomats103 from "../../pages/product.in/Products/Product_Description/lpkf_protomatS103";
import Ti from "../../pages/product.in/Products/Ti";
import C2000Mculaunchpad from "../../pages/product.in/Products/Product_Description/C2000_Mcu_launchpad";
import Msplaunchpad from "../../pages/product.in/Products/Product_Description/Msp_launchpad";
import Alsk from "../../pages/product.in/Products/Product_Description/Alsk";
import PmlkPro from "../../pages/product.in/Products/Product_Description/Pmlk_Pro";
import ArmBasedMcu from "../../pages/product.in/Products/Product_Description/Arm_Based_Mcu";
import HerculasMculaunchpad from "../../pages/product.in/Products/Product_Description/Herculas_Mcu_launchpad";
import Msp430 from "../../pages/product.in/Products/Product_Description/Msp_430";
import Rslk from "../../pages/product.in/Products/Product_Description/Rslk";
import Nvidialabs from "../../pages/Nvidia-ml-lab";
import NvidiaDGXStation from "../../pages/product.in/Products/Product_Description/Nvidia_DGX_Station";
import NvidiaDeepLearningsw from "../../pages/product.in/Products/Product_Description/Nvidia_Deep_Learning_sw";
import Nvidia from "../../pages/product.in/Products/Nvidia";
import ProductParterns from "../../pages/Product-partner";
import Contactbar from "../../common/contact-side-bar";
import ContactFloatingBtn from "../../common/contact-floating-button";
import Header from "../../pages/Header";
import InterShipStories from "../../pages/Internship_stories";
import FacultyDevelopment from "../../pages/Faculty_Development";
import TEDInspiration from "../../pages/TED_Inspirations";

import Career from "../../pages/common/Career";

import Gallery from "../../pages/common/Gallery";

import FeebbackSubmitForm from "../../pages/common/FeedbackSubmitForm";
class app extends Component {
  state = {
    datas: [],
  };
  // async componentWillMount() {
  //   console.log("data from academic");
  //   await axios
  //     .get(domains.path + "/feedback", {
  //       params: {
  //         flag: 1,
  //       },
  //     })
  //     .then(async (response) => {
  //       console.log(
  //         "data getting from academic testimonial",
  //         response.data[0].image_id
  //       );
  //       if (response.status === 200) {
  //         console.log("data getting from newsite length", response.data.length);
  //         response.data.map(async (dat, index) => {
  //           await axios
  //             .get(domains.path + `/download_profile_pic/${dat.image_id}`)
  //             .then((res) => {
  //               this.state.datas.push({
  //                 id: res.data.imgurl,
  //                 name: dat.name,
  //                 details: dat.details,
  //                 message: dat.message,
  //               });
  //             })
  //             .catch((err) => {
  //               console.log("failed to get image url");
  //             });
  //         });
  //       } else {
  //         alert("Failed to load, try again");
  //       }
  //     })
  //     .catch((err) => {
  //       console.log("didn't get any data from newsite", err);
  //     });
  // }
  render() {
    return (
      <React.Fragment>
        <TopNavBar />
        <Sidenavbar />
        <Drawer />
        <ContactFloatingBtn />
        <Main>
          <Header />

          <Route
            path="/dst-innovation-lab"
            exact={true}
            render={(props) => <DstInnovationLab {...props} />}
          />

          <Route
            path="/Rigol-Waveform_generators"
            exact={true}
            render={(props) => {
              window.scroll({
                top: 0,
                behavior: "auto",
              });
              return <Waveformgenerators {...props} />;
            }}
          />
          <Route
            path="/prodcts-parterns"
            exact={true}
            render={(props) => <ProductParterns {...props} />}
          />
          <Route
            path="/Lpkf"
            exact={true}
            render={(props) => <Lpkf {...props} />}
          />
          <Route
            path="/Alsk"
            exact={true}
            render={(props) => {
              window.scroll({
                top: 0,
                behavior: "auto",
              });
              return <Alsk {...props} />;
            }}
          />
          <Route
            path="/Rslk"
            exact={true}
            render={(props) => {
              window.scroll({
                top: 0,
                behavior: "auto",
              });
              return <Rslk {...props} />;
            }}
          />
          <Route
            path="/C2000_Mcu_launchpad"
            exact={true}
            render={(props) => {
              window.scroll({
                top: 0,
                behavior: "auto",
              });
              return <C2000Mculaunchpad {...props} />;
            }}
          />
          <Route
            path="/Msp_launchpad"
            exact={true}
            render={(props) => {
              window.scroll({
                top: 0,
                behavior: "auto",
              });
              return <Msplaunchpad {...props} />;
            }}
          />
          <Route
            path="/Pmlk_Pro"
            exact={true}
            render={(props) => {
              window.scroll({
                top: 0,
                behavior: "auto",
              });
              return <PmlkPro {...props} />;
            }}
          />
          <Route
            path="/Arm_Based_Mcu"
            exact={true}
            render={(props) => {
              window.scroll({
                top: 0,
                behavior: "auto",
              });
              return <ArmBasedMcu {...props} />;
            }}
          />
          <Route
            path="/Lpkf_protomat_s103"
            exact={true}
            render={(props) => {
              window.scroll({
                top: 0,
                behavior: "auto",
              });
              return <Lpkfprotomats103 {...props} />;
            }}
          />
          <Route
            path="/Msp_430"
            exact={true}
            render={(props) => {
              window.scroll({
                top: 0,
                behavior: "auto",
              });
              return <Msp430 {...props} />;
            }}
          />
          <Route
            path="/Ti"
            exact={true}
            render={(props) => {
              window.scroll({
                top: 0,
                behavior: "auto",
              });
              return <Ti {...props} />;
            }}
          />
          <Route
            path="/Lpkf_protomat_s63"
            exact={true}
            render={(props) => {
              window.scroll({
                top: 0,
                behavior: "auto",
              });
              return <Lpkfprotomats63 {...props} />;
            }}
          />

          <Route
            path="/Herculas_Mcu_launchpad"
            exact={true}
            render={(props) => {
              window.scroll({
                top: 0,
                behavior: "auto",
              });
              return <HerculasMculaunchpad {...props} />;
            }}
          />
          <Route
            path="/Lpkf-protomat-e34"
            exact={true}
            render={(props) => {
              window.scroll({
                top: 0,
                behavior: "auto",
              });
              return <Lpkfdesc {...props} />;
            }}
          />
          <Route
            path="/RF_SIGNAL_GENERATORS"
            exact={true}
            render={(props) => {
              window.scroll({
                top: 0,
                behavior: "auto",
              });
              return <RFSIGNALGENERATORS {...props} />;
            }}
          />
          <Route
            path="/Rigol-Spectrum_analyzer"
            exact={true}
            render={(props) => {
              window.scroll({
                top: 0,
                behavior: "auto",
              });
              return <Spectrumanalyzer {...props} />;
            }}
          />
          <Route
            path="/Rigol_multimeters"
            exact={true}
            render={(props) => {
              window.scroll({
                top: 0,
                behavior: "auto",
              });
              return <Rigolmultimeters {...props} />;
            }}
          />
          <Route
            path="/sdp"
            exact={true}
            render={(props) => <Sdp {...props} />}
          />
          <Route
            path="/Technical-finishing-school"
            exact={true}
            render={(props) => {
              window.scroll({
                top: 0,
                behavior: "auto",
              });
              return <TechnicalFinishingSchool {...props} />;
            }}
          />
          <Route
            path="/Internship"
            exact={true}
            render={(props) => {
              window.scroll({
                top: 0,
                behavior: "auto",
              });
              return <Internship {...props} />;
            }}
          />
          <Route
            path="/"
            exact={true}
            render={(props) => {
              window.scroll({
                top: 0,
                behavior: "auto",
              });
              return <HomePage {...props} />;
            }}
          />
          <Route
            path="/Rigol"
            exact={true}
            render={(props) => {
              window.scroll({
                top: 0,
                behavior: "auto",
              });
              return <Rigol {...props} />;
            }}
          />
          <Route
            path="/Rigol-DC-POWER-&-LOADS"
            exact={true}
            render={(props) => {
              window.scroll({
                top: 0,
                behavior: "auto",
              });
              return <Rigolpowerloadsdetails {...props} />;
            }}
          />
          <Route
            path="/Rigol-Digital-Storage"
            exact={true}
            render={(props) => {
              window.scroll({
                top: 0,
                behavior: "auto",
              });
              return <Rigoldigitalstoragedetails {...props} />;
            }}
          />
          <Route
            path="/Nvidia_ml_labs"
            exact={true}
            render={(props) => {
              window.scroll({
                top: 0,
                behavior: "auto",
              });
              return <Nvidialabs {...props} />;
            }}
          />
          <Route
            path="/Nvidia_DGX_Stations"
            exact={true}
            render={(props) => {
              window.scroll({
                top: 0,
                behavior: "auto",
              });
              return <NvidiaDGXStation {...props} />;
            }}
          />
          <Route
            path="/Nvidia_Deep_Learning_sw"
            exact={true}
            render={(props) => {
              window.scroll({
                top: 0,
                behavior: "auto",
              });
              return <NvidiaDeepLearningsw {...props} />;
            }}
          />
          <Route
            path="/nvidia"
            exact={true}
            render={(props) => {
              window.scroll({
                top: 0,
                behavior: "auto",
              });
              return <Nvidia {...props} />;
            }}
          />
          <Route
            path="/Team"
            exact={true}
            render={(props) => {
              window.scroll({
                top: 0,
                behavior: "auto",
              });
              return <Team {...props} />;
            }}
          />

          <Route
            path="/Corporate-Testimonials"
            exact={true}
            render={(props) => {
              window.scroll({
                top: 0,
                behavior: "auto",
              });
              return (
                <Testimonials
                  {...props}
                  data={this.state.datas}
                  pathfromNewsite={false}
                />
              );
            }}
          />
          <Route
            path="/AboutUs"
            exact={true}
            render={(props) => {
              window.scroll({
                top: 0,
                behavior: "auto",
              });
              return <AboutUs {...props} />;
            }}
          />
          <Route
            path="/Intership_Stories"
            exact={true}
            render={(props) => {
              window.scroll({
                top: 0,
                behavior: "auto",
              });
              return <InterShipStories {...props} />;
            }}
          />
          <Route
            path="/Faculty_Development"
            exact={true}
            render={(props) => {
              window.scroll({
                top: 0,
                behavior: "auto",
              });
              return <FacultyDevelopment {...props} />;
            }}
          />
          <Route
            path="/TED_Inspirations"
            exact={true}
            render={(props) => {
              window.scroll({
                top: 0,
                behavior: "auto",
              });
              return <TEDInspiration {...props} />;
            }}
          />

          <Route
            path="/ContactUs"
            exact={true}
            render={(props) => <Contact {...props} />}
          />
          <Route
            path="/Career"
            exact={true}
            render={(props) => <Career {...props} />}
          />
          <Route
            path="/Gallery"
            exact={true}
            render={(props) => <Gallery {...props} />}
          />
          <Route
            path="/feedback/:id/:id"
            exact={true}
            render={(props) => <FeebbackSubmitForm {...props} />}
          />
        </Main>
        <Contactbar />
        <Footer />
      </React.Fragment>
    );
  }
}

export default app;
