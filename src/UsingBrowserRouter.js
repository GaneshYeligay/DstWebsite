import React, { Component } from 'react';
import {BrowserRouter} from 'react-router-dom'
import BrowserRouterLinks from './BrowserRouterLinks'
class UsingBrowserRouter extends Component {
  render() {
    return (
      <div>
        <h1>Browser Router</h1>
        <BrowserRouter>
          <BrowserRouterLinks />
        </BrowserRouter>
      </div>
    );
  }
}
export default UsingBrowserRouter;