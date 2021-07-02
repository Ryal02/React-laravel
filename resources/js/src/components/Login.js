import React, { Component } from 'react';
import { Link, Redirect} from 'react-router-dom';
import { Button, Form, Input } from "reactstrap";
import axios from "axios";

export default class Login extends Component {

    constructor(props) {
      super(props);
      this.state = {
        email: "",
        password: "",
        role: "",
        msg: "",
        isLoading: false,
        redirect: false,
        errMsgEmail: "",
        errMsgPwd: "",
        errMsg: "",
      };
    }
    onChangehandler = (e) => {
      let name = e.target.name;
      let value = e.target.value;
      let data = {};
      data[name] = value;
      this.setState(data);
    };
  
    onSignInHandler = () => {
      this.setState({ isLoading: true });
      axios
        .post("http://localhost:8000/api/login", {
          email: this.state.email,
          password: this.state.password,
        })
        .then((response) => {
          this.setState({ isLoading: false });
          if (response.data.status === 200) {
              localStorage.setItem("isLoggedIn", true);
              localStorage.setItem("userData", JSON.stringify(response.data.data));
            this.setState({
              msg: response.data.messages,
              redirect: true,
            });      
          }
          if (
            response.data.status === "failed" &&
            response.data.success === undefined
           
          ) {
            this.setState({
              errMsgEmail: response.data.validation_error.email,
              errMsgPwd: response.data.validation_error.password,
            });
            setTimeout(() => {
              this.setState({ errMsgEmail: "", errMsgPwd: "" });
            }, 2000);
          } else if (
            response.data.status === "failed" &&
            response.data.success === false
           
          ) {
            this.setState({
              errMsg: response.data.message,
            });
            setTimeout(() => {
              this.setState({ errMsg: "" });
            }, 10000);
          }
        })
        .catch((error) => {
          console.log(error);
        });
    };

    render () {
     
        if (this.state.redirect) {
            if(this.state.email == 'basadre@gmail.com') {
              return <Redirect to="/home" />;
            } else {
              return <Redirect to="/customerdash"/>;
            }
          }
          const login = localStorage.getItem("isLoggedIn");
          if (login) {
            return <Redirect to="/Home" />;
          }
          const isLoading = this.state.isLoading;
    
        return(
            <div className="hold-transition login-page bg-white">
                <div className="login-box ">
                    
                    <div className="card">
                        <div className="card-body login-card-body bg-dark">
                        <Form>

                            <h3 className="text-center">Log in</h3>

                            <div className="form-group">
                                <label>Email</label>
                                <Input type="email" name="email" className="form-control" placeholder="Enter email" 
                                defaultValue={this.state.email}
                                onChange={this.onChangehandler}/>
                                <span className="text-danger">{this.state.errMsg}</span>
                                <span className="text-danger">{this.state.errMsgEmail}</span>
                            </div>

                            <div className="form-group">
                                <label>Password</label>
                                <Input type="password" name="password" className="form-control" placeholder="Enter password" 
                                defaultValue={this.state.password}
                                onChange={this.onChangehandler}/>
                                <span className="text-danger">{this.state.errMsgPwd}</span>
                            </div>

                            <div className="form-group">
                                <div className="custom-control custom-checkbox">
                                    <Input type="checkbox" className="custom-control-input" id="customCheck1" />
                                    <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                                </div>
                            </div>

                            <Button className="btn btn-success btn-lg btn-block" 
                            onClick={this.onSignInHandler} > Sign in 
                                {isLoading ? (
                                <span
                                    className="spinner-border spinner-border-sm ml-5"
                                    role="status"
                                    aria-hidden="true"
                                ></span>
                                ) : (
                                <span></span>
                                )}
                            </Button>
                            <p className="forgot-password text-center">
                                <Link to="/register">Create Account</Link>
                            </p>
                            </Form>
                        </div>
                    </div>
                </div>
            </div>
        );
    };
};

