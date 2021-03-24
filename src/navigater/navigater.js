import React from "react";

function Navigator(props, Comp) {
  // const subdomain = window.location.hostname.split(".");
  /*  console.log("subDomian->", subdomain); */

  return <Comp {...props} />;
}
export default Navigator;
