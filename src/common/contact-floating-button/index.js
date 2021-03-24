import React from "react";
import { Link } from "react-router-dom";
import {
  FloatingMenu,
  MainButton,
  ChildButton
} from "react-floating-button-menu";
import Layers from "@material-ui/icons/MoreVert";
import MdClose from "@material-ui/icons/Clear";
import FBIcon from "@material-ui/icons/Facebook";
import Twitter from "@material-ui/icons/Twitter";
import LinkedIn from "@material-ui/icons/LinkedIn";
import Contacts from "@material-ui/icons/Contacts";
import Instagram from "@material-ui/icons/Instagram";
import ThumbUp from "@material-ui/icons/ThumbUp";
import Help from "@material-ui/icons/Help";

import radium from "radium";
class ContactFloatingBtn extends React.Component {
  state = {
    open: false
  };
  render() {
    return (
      <FloatingMenu
        slideSpeed={500}
        direction="up"
        spacing={8}
        isOpen={this.state.isOpen}
        className="floating-btn"
      >
        <MainButton
          iconResting={<Layers style={{ fontSize: 30 }} />}
          iconActive={<MdClose style={{ fontSize: 20 }} />}
          backgroundColor="white"
          onClick={() => this.setState({ isOpen: !this.state.isOpen })}
          size={56}
        />
        <ChildButton
          icon={
            <Link to="/ContactUs">
              <Contacts style={{ fontSize: 20 }} />
            </Link>
          }
          backgroundColor="white"
          size={40}
        />
        <ChildButton
          icon={
            <a
              href="https://www.facebook.com/digitalsharktechs"
              target="_blank" rel="noopener noreferrer"
            >
              <FBIcon style={{ fontSize: 20 }} />
            </a>
          }
          backgroundColor="white"
          size={40}
        />
        <ChildButton
          icon={
            <a
              href="http://www.twitter.com/Digitalshark_14?s=09"
              target="_blank" rel="noopener noreferrer"
            >
              <Twitter style={{ fontSize: 20 }} />
            </a>
          }
          backgroundColor="white"
          size={40}
        />
        <ChildButton
          icon={
            <a
              href="http://www.linkedin.com/company/digitalsharktechnology"
              target="_blank" rel="noopener noreferrer"
            >
              <LinkedIn style={{ fontSize: 20 }} />
            </a>
          }
          backgroundColor="white"
          size={40}
        />
        <ChildButton
          icon={
            <a
              href="http://www.instagram.com/digital.shark_technology/"
              target="_blank" rel="noopener noreferrer"
            >
              <Instagram style={{ fontSize: 20 }} />
            </a>
          }
          backgroundColor="white"
          size={40}
        />

        <ChildButton
          icon={
            <Link to="/Corporate-Testimonials">
              <ThumbUp style={{ fontSize: 20 }} />
            </Link>
          }
          backgroundColor="white"
          size={40}
        />
        <ChildButton
          icon={
            <Link to="/AboutUs">
              <Help style={{ fontSize: 20 }} />
            </Link>
          }
          backgroundColor="white"
          size={40}
        />
      </FloatingMenu>
    );
  }
}

export default radium(ContactFloatingBtn);
