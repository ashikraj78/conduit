import React from "react";
import { withRouter } from "react-router-dom";

import "bulma/css/bulma.css";
import Header from "./Header";

class Signup extends React.Component {
  state = {
    username: "",
    email: "",
    password: "",
  };
  handleInput = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    fetch("https://mighty-oasis-08080.herokuapp.com/api/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ user: this.state }),
    })
      .then((res) => res.json())
      .then(({ user }) => {
        console.log(user);
        if (user.token) {
          this.props.history.push("/articles");
          localStorage.setItem("authTokenConduit", user.token);
        }
      });
  };

  render() {
    console.log(this.props);
    return (
      <React.Fragment>
        <div className="container">
          <Header />
          <form className="login-form" onSubmit={this.handleSubmit}>
            <div className="field">
              <p className="control has-icons-left has-icons-right">
                <input
                  className="input"
                  type="text"
                  placeholder="User Name"
                  name="username"
                  onChange={this.handleInput}
                />
                <span className="icon is-small is-left">
                  <i className="fas fa-user"></i>
                </span>
                <span className="icon is-small is-right">
                  <i className="fas fa-check"></i>
                </span>
              </p>
            </div>
            <div className="field">
              <p className="control has-icons-left has-icons-right">
                <input
                  className="input"
                  type="email"
                  placeholder="Email"
                  name="email"
                  onChange={this.handleInput}
                />
                <span className="icon is-small is-left">
                  <i className="fas fa-envelope"></i>
                </span>
                <span className="icon is-small is-right">
                  <i className="fas fa-check"></i>
                </span>
              </p>
            </div>
            <div className="field">
              <p className="control has-icons-left">
                <input
                  className="input"
                  type="password"
                  placeholder="Password"
                  name="password"
                  onChange={this.handleInput}
                />
                <span className="icon is-small is-left">
                  <i className="fas fa-lock"></i>
                </span>
              </p>
            </div>
            <div className="field">
              <p className="control">
                <button className="button is-success" type="submit">
                  Signup
                </button>
              </p>
            </div>
          </form>
        </div>
      </React.Fragment>
    );
  }
}
export default withRouter(Signup);
