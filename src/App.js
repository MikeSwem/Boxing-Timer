import React, { Component } from "react";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import HomePage from "./Components/HomePage";
import SettingsPage from "./Components/SettingsPage";

class App extends Component {
  render() {
    return (
      <div className="App container">
        {/* <header className="App-header">
          <h1 className="App-title">App for Cal</h1>
        </header> */}
        {/* <hr /> */}
        <BrowserRouter>
          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/settings" component={SettingsPage} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;