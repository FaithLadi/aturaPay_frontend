import React from "react";
import { Link } from 'react-router-dom';
import Navbar from "./Navbar";

const Register = () => {
    return (
      <div class="container register">
        <Navbar/>
        <div className="row">
          <div className="col-md-3 register-left">
            <img src={require("../asset/logo_white.png")} alt="" />
            <h3>Welcome</h3>
            <p>You are 30 seconds away from earning your own money!</p>
            <br />
          </div>
          <div className="col-md-9 register-right">
            <div className="tab-content" id="myTabContent">
              <div
                className="tab-pane fade show active"
                id="home"
                role="tabpanel"
                aria-labelledby="home-tab"
              >
                <h3 className="register-heading">Register With Us</h3>
                <div className="row register-form">
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        name="firstname"
                        id="firstname"
                        aria-describedby="helpId"
                        placeholder="Firstname"
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        name="lastname"
                        id="lastname"
                        aria-describedby="helpId"
                        placeholder="Lastname"
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="email"
                        className="form-control"
                        name="email"
                        id="email"
                        aria-describedby="helpId"
                        placeholder="Email"
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        name="PhoneNo"
                        id="PhoneNo"
                        aria-describedby="helpId"
                        placeholder="Phone No:"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="password"
                        className="form-control"
                        name="password"
                        id="password"
                        aria-describedby="helpId"
                        placeholder="password"
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="password"
                        className="form-control"
                        name="password"
                        id="password"
                        aria-describedby="helpId"
                        placeholder="confirm password"
                      />
                    </div>
                    <div className="form-group">
                      <select className="form-control">
                        <option className="hidden" selected>
                          Country
                        </option>
                        <option>Nigeria</option>
                        <option>south-Africa</option>
                        <option>Usa</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <select id="Gender" class="form-control">
                        <option className="hidden" selected>
                          Gender
                        </option>
                        <option>Male</option>
                        <option>Female</option>
                      </select>
                    </div>
                    <Link to="/login">
                      <input
                        type="submit"
                        className="btnRegister"
                        value="Register"
                      />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );

};

export default Register;
