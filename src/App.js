import React, { Component } from "react";

import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Articles from "./components/Articles";

function NotFound() {
  return <h1>Page not Found !</h1>;
}

function Private(props) {
  return (
    <Switch>
      <Route path="/articles">
        <Articles
          isLoggedIn={this.state.isLoggedIn}
          userDetails={this.state.userDetails}
          handleLogout={this.handleLogout}
        />
      </Route>
      <Route component={NotFound} />
    </Switch>
  );
}

function Public(props) {
  return (
    <Switch>
      <Route path="/" exact>
        <Home updateLoggedInUser={props.updateLoggedInUser} />
      </Route>
      <Route path="/login">
        <Login updateLoggedInUser={props.updateLoggedInUser} />
      </Route>
      <Route path="/signup">
        <Signup updateLoggedInUser={props.updateLoggedInUser} />
      </Route>
      <Route component={NotFound} />
    </Switch>
  );
}

class App extends Component {
  constructor() {
    super();
    this.state = {
      isLoggedIn: false,
      userDetails: "",
    };
  }
  componentDidMount() {
    if (localStorage.authTokenConduit) {
      this.setState({ isLoggedIn: true });
    }
  }

  updateLoggedInUser = (user) => {
    this.setState({
      isLoggedIn: true,
      userDetails: user,
    });
  };

  handleLogout() {
    this.setState({ isLoggedIn: false });
    localStorage.removeItem("authTokenConduit");
  }

  render() {
    return (
      <BrowserRouter>
        {this.state.isLoggedIn ? (
          <Private
            isLoggedIn={this.state.isLoggedIn}
            userDetails={this.state.userDetails}
            handleLogout={this.handleLogout}
          />
        ) : (
          <Public updateLoggedInUser={this.updateLoggedInUser} />
        )}
      </BrowserRouter>
    );
  }
}

export default App;
