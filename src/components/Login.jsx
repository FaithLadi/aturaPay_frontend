import React from "react";
import { Link } from 'react-router-dom';
import Navbar from "./Navbar";

const Login = () => {
  return (
    <div class="container Login">
      <Navbar/>
      <div className="row">
        <div className="col-md-3 Login-left">
          <img src={require("../asset/logo_white.png")} alt="" />
          <h3>Welcome</h3>
          <p>You are 30 seconds away from earning your own money!</p>
        </div>
        <div className="col-md-9 Login-right">
          <div className="tab-content" id="myTabContent">
            <div
              className="tab-pane fade show active"
              id="home"
              role="tabpanel"
              aria-labelledby="home-tab"
            >
              <section className="standalone-forms">
                <div className="row">
                  <h2 className="col-12">Sign In</h2>
                  <div className="login col-4">
                    <form>
                      <div className="form-group">
                        <label>Email address</label>
                        <input
                          type="email"
                          className="form-control"
                          placeholder="Enter email"
                        />
                      </div>

                      <div className="form-group">
                        <label>Password</label>
                        <input
                          type="password"
                          className="form-control"
                          placeholder="Enter password"
                        />
                      </div>

                      <div className="form-group">
                        <div className="custom-control custom-checkbox">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            id="customCheck1"
                          />
                          <label
                            className="custom-control-label"
                            htmlFor="customCheck1"
                          >
                            Remember me
                          </label>
                        </div>
                      </div>
                      <input
                        type="submit"
                        className="btnLogin"
                        value="Login"
                      />
                      <p className="forgot-password text-right">
                        Forgot <Link to="#">password?</Link>
                      </p>
                    </form>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
