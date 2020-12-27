import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import JumbotronComponent from "./components/JumbotronComponent";
import NavbarComponent from "./components/NavbarComponent";
import CreateContainer from "./container/CreateContainer";
import DetailContainer from "./container/DetailContainer";
import EditContainer from "./container/EditContainer";
import HomeContainer from "./container/HomeContainer";

export default class App extends Component {
  render() {
    return (
      <div>
        <NavbarComponent />
        <JumbotronComponent />
        <BrowserRouter>
          <Route path="/" exact component={HomeContainer} />

          <Route path="/create" exact component={CreateContainer} />

          <Route path="/edit/:id" exact component={EditContainer} />

          <Route path="/detail/:id" exact component={DetailContainer} />
        </BrowserRouter>
      </div>
    );
  }
}
