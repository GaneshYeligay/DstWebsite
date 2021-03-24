import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import domains from "./config/domains.json";
import four_not_four from "./dist/img/error-images/MbHU.gif";
import "./dist/css/adminlte.css";
import Navigate from "./navigater/navigater";
import Main from "./hoc/Main-comp";
import TopNavBar from "./top-nav-bar";
import DesktopSideNav from "./root-navbar-desktop";
import MobileNav from "./root-navbar-mobile";
import Rigol from "./pages/product.in/Products/Rigol";
import Academic_india_digitalshark_in from "./apps/academic/app";
// import Home from "./pages/Home";
import Footer from "./pages/common/Footer";
// import AboutUs from "./pages/common/AboutUs";
// import Career from "./pages/common/Career";
// import Team from "./pages/common/Team";
import Testimonials from "./pages/Testimonials";
import NvidiaMl from "./pages/Nvidia-ml-lab";
// import Products from "./pages/Product";
// import EngineeringServices from "./pages/Engineering-services";
import FacultyDevelopment from "./pages/Faculty_Development";
import IntershipStories from "./pages/Internship_stories";
import TEDInspirations from "./pages/TED_Inspirations";
// import Contact from "./pages/common/Contact";
import Header from "./pages/Header";
import ContactFloatingBtn from "./common/contact-floating-button/index.js";
import FeebbackSubmitForm from "./pages/common/FeedbackSubmitForm";
import Contactbar from "./common/contact-side-bar";
import { Desktop } from "./common/responsive-component";
import ProductDesc from "./pages/Product_Descript";
import UsingHashRouter from "./UsingHashRouter";
import UsingBrowserRouter from "./UsingBrowserRouter";
// import Dropquery from "./common/survey-ui/index.js"
import DoSurvey from "./popups/survey.popup";
import Loadable from 'react-loadable';

const Home = Loadable({
	loader: () => import('./pages/Home'),
	loading() {
		return <div>Loading...</div>
	}
})
const EngineeringServices = Loadable({
	loader: () => import('./pages/Engineering-services'),
	loading() {
		return <div>Loading...</div>
	}
})
const Products = Loadable({
	loader: () => import('./pages/Product'),
	loading() {
		return <div>Loading...</div>
	}
})
const Team = Loadable({
	loader: () => import('./pages/common/Team'),
	loading() {
		return <div>Loading...</div>
	}
})
const Career = Loadable({
	loader: () => import('./pages/common/Career'),
	loading() {
		return <div>Loading...</div>
	}
})
const AboutUs = Loadable({
	loader: () => import('./pages/common/AboutUs'),
	loading() {
		return <div>Loading...</div>
	}
})
const Contact = Loadable({
	loader: () => import('./pages/common/Contact'),
	loading() {
		return <div>Loading...</div>
	}
})
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showHeader: true,
      headerTitle: "",
      datas: [],
      url: "",
      loading: true,
      _doSurvey: false,
      _stopSurvay: localStorage.getItem("_stopSurvay")
        ? localStorage.getItem("_stopSurvay") === "true"
          ? true
          : false
        : false,
    };
    // setInterval(this.doSurvay, 10000);
  }

  sleep = (time) => {
    return new Promise((resolve) => setTimeout(resolve, 10));
  };

  // async componentWillMount() {
  //   console.log("domains is", domains.path);
  //   await axios
  //     .get(domains.path + "/feedback", {
  //       params: {
  //         flag: 0,
  //       },
  //     })
  //     .then(async (response) => {
  //       console.log(
  //         "data getting from newsite testimonial",
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
  showHeader = (title) => {
    if (this.state.showHeader && this.state.headerTitle === title) {
    } else {
      this.setState({ showHeader: true, headerTitle: title });
    }
  };

  hideHeader = () => {
    if (this.state.showHeader) {
      this.setState({ showHeader: false });
    }
  };
  newSiteJsx() {
    return (
      <React.Fragment>
        <TopNavBar />
        <Contactbar />
        <ContactFloatingBtn />
    
        <Desktop>
          <DesktopSideNav />
        </Desktop>
        <MobileNav />

        <Main>
          {this.state.showHeader ? (
            <Header title={this.state.headerTitle} />
          ) : null}
          <Route
            path="/"
            exact={true}
            component={Home} 
            render={(props) => (
              <Home
                {...props}
                showHeader={this.showHeader}
                hideHeader={this.hideHeader}
              />
            )}
          />
          <Route
            path="/ContactUs"
            exact={true}
            component={Contact} 
            render={(props) => (
              <Contact showHeader={this.showHeader} {...props} />
            )}
          />

          <Route
            path="/Team"
            exact={true}
            component={Team} 
            render={(props) => (
              <Team
                showHeader={this.showHeader}
                hideHeader={this.hideHeader}
                {...props}
              />
            )}
          />

          <Route
            path="/AboutUs"
            exact={true}
            component={AboutUs} 
            render={(props) => (
              <AboutUs showHeader={this.showHeader} {...props} />
            )}
          />

          <Route
            path="/Career"
            exact={true}
            component={Career} 
            render={(props) => (
              <Career showHeader={this.showHeader} {...props} />
            )}
          />
          <Route
            path="/Corporate-Testimonials"
            exact={true}
            render={(props) => (
              <Testimonials
                hideHeader={this.hideHeader}
                showHeader={this.showHeader}
                {...props}
                data={this.state.datas}
                url={this.state.url}
                pathfromNewsite={true}
              />
            )}
          />

          <Route
            path="/Nvidia"
            exact={true}
            render={(props) => <NvidiaMl {...props} />}
          />

          <Route
            path="/Products"
            exact={true}
            component={Products} 
            render={(props) => (
              <Products showHeader={this.showHeader} {...props} />
            )}
          />
          <Route
            path="/Engineering-Services"
            exact={true}
            component={EngineeringServices} 
            render={(props) => (
              <EngineeringServices
                hideHeader={this.hideHeader}
                showHeader={this.showHeader}
                {...props}
              />
            )}
          />
          <Route
            path="/Product_Desc"
            exact={true}
            render={(props) => (
              <ProductDesc
                hideHeader={this.hideHeader}
                showHeader={this.showHeader}
                {...props}
              />
            )}
          />
          {/*----- Products ------*/}
          <Route
            path="/Rigol"
            exact={true}
            render={(props) => <Rigol {...props} />}
          />

          <Route
            path="/Faculty_Development"
            exact={true}
            render={(props) => <FacultyDevelopment {...props} />}
          />
          <Route
            path="/Intership_Stories"
            exact={true}
            render={(props) => <IntershipStories {...props} />}
          />
          <Route
            path="/TED_Inspirations"
            exact={true}
            render={(props) => <TEDInspirations {...props} />}
          />
          <Route
            path="/feedback/:id"
            exact={true}
            render={(props) => <FeebbackSubmitForm {...props} />}
          />
          <Switch>
            <Route path="/routing/hash-router" component={UsingHashRouter} />
            <Route
              path="/routing/browser-router"
              component={UsingBrowserRouter}
            />
          </Switch>
        </Main>
       
        <Footer />
        {/* <Dropquery /> */}
      </React.Fragment>
    );
  }

  dummyJsx() {
    return (
      <React.Fragment>
        <Main>
          <div
            style={{
              display: "flex",
              width: "calc(100% - 10px)",

              justifyContent: "center",
              flexDirection: "column",
              height: "80vh",
              alignItems: "center",
              padding: "20px",
            }}
          >
            <img
              src={four_not_four}
              alt="404 "
              style={{ height: " 20rem", marginLeft: "-73px" }}
            />
            {domains.environment ? (
              <h1> Site is in {domains.environment} environment</h1>
            ) : null}
            <h1>{domains.academic}</h1>
            <h1>{domains.product}</h1>
            <h1>{domains.rootsite}</h1>
          </div>
        </Main>
      </React.Fragment>
    );
  }

  doSurvay = () => {
    if (!this.state._stopSurvay) {
      if (!this.state._doSurvey) {
        this.setState({ _doSurvey: true });
      }
    }
  };
  stopSurvay = () => {
    if (!this.state._stopSurvay) {
      this.setState({ _stopSurvay: true, _doSurvey: false }, () => {
        localStorage.setItem("_stopSurvay", "true");
      });
    }
  };
  resetSurvay = () => {
    if (this.state._stopSurvay) {
      this.setState({ _stopSurvay: false }, () => {
        localStorage.setItem("_stopSurvay", "false");
      });
    }
  };
  render() {
    const subdomain = window.location.hostname.split(".");
    console.log("App.js ", subdomain);
    if (this.state.loading) {
      return null;
    }

    if (subdomain[0].toUpperCase() === "ACADEMIC") {
      return (
        <React.Fragment>
          {Navigate({}, Academic_india_digitalshark_in)}
          {this.state._doSurvey ? (
            <DoSurvey
              stopSurvay={this.stopSurvay}
              turnOff={() => {
                this.setState({ _doSurvey: false });
              }}
            />
          ) : null}
          <div
            className="req_for_quote_wrapper "
            onClick={() => {
              this.setState({ _doSurvey: true });
            }}
          >
            Request for Quote
            <i
              id="req-for-quote"
              className={`material-icons add-opacity ${
                this.state._doSurvey ? "rotate-90deg-trans" : "undo"
              }`}
            >
              expand_less
            </i>
          </div>
        </React.Fragment>
      );
      // return Navigate({}, Academic_india_digitalshark_in);
    } else {
      // return Navigate({}, Academic_india_digitalshark_in);
      return (
        <React.Fragment>
          {this.newSiteJsx()}
          {this.state._doSurvey ? (
            <DoSurvey
              stopSurvay={this.stopSurvay}
              turnOff={() => {
                this.setState({ _doSurvey: false });
              }}
            />
          ) : null}

          <div
            className="req_for_quote_wrapper "
            onClick={() => {
              this.setState({ _doSurvey: true });
            }}
          >
            Request for Quote
            <i
              id="req-for-quote"
              className={`material-icons add-opacity ${
                this.state._doSurvey ? "rotate-90deg-trans" : "undo"
              }`}
            >
              expand_less
            </i>
          </div>
        </React.Fragment>
      );
    }
  }
  //this.newSiteJsx();

  authenticate() {
    return new Promise((resolve) => setTimeout(resolve, 2000));
  }
  //   componentDidMount() {}
  componentDidMount() {
    setInterval(function () {
      if (
        document
          .getElementById("req-for-quote")
          .classList.contains("add-opacity")
      ) {
        document
          .getElementById("req-for-quote")
          .classList.replace("add-opacity", "remove-opacity");
      } else {
        document
          .getElementById("req-for-quote")
          .classList.replace("remove-opacity", "add-opacity");
      }
    }, 1500);
    this.sleep().then(() => {
      const el = document.querySelector(".page-loader");
      if (el) {
        el.remove();

        this.setState({ loading: false });
      }
    });
  }
}

export default App;
