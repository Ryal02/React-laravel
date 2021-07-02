import React, { useState, Component } from 'react';
import { useHistory, Link } from 'react-router-dom'
import { Button, Form, Input } from "reactstrap";
import api from './api';


export default class Register extends Component {


    userData;
    constructor(props) {
      super(props);
      this.state = {
        signupData: {
          name: "",
          email: "",
          password: "",
          isLoading: "",
        },
        msg: "",
      };
    }
  
    onChangehandler = (e, key) => {
      const { signupData } = this.state;
      signupData[e.target.name] = e.target.value;
      this.setState({ signupData });
    };
    onSubmitHandler = (e) => {
      e.preventDefault();
      this.setState({ isLoading: true });
      axios
        .post("http://localhost:8000/api/register", this.state.signupData)
        .then((response) => {
          this.setState({ isLoading: false });
          if (response.data.status === 200) {
            this.setState({
              msg: response.data.message,
              signupData: {
                name: "",
                email: "",
                password: "",
              },
            });
            setTimeout(() => {
              this.setState({ msgComplete: response.data.complete });
            }, 2000);
           
          }
  
          if (response.data.status === "failed") {
            this.setState({ msg: response.data.message });
            setTimeout(() => {
              this.setState({ msg: "" });
            }, 10000);
          }
          
        });
    };
    render(){
        if (this.state.redirect) {
            return <Redirect to="/home" />;
          }

        const isLoading = this.state.isLoading;
        return (

            <div className="hold-transition login-page bg-white">
                <div className="login-box ">
                    
                    <div className="card">
                        <div className="card-body login-card-body bg-dark">
                        <Form>
                            <h3 className="text-center">Register</h3>
                            
                            <div className="form-group">
                                <label>Name</label>
                                <Input type="name" name="name" className="form-control" placeholder="First name"
                                defaultValue={this.state.signupData.name}
                                onChange={this.onChangehandler} />
                            </div>

                            <div className="form-group">
                                <label>Email</label>
                                <Input type="email" name="email" className="form-control" placeholder="Enter email" 
                                 defaultValue={this.state.signupData.email}
                                 onChange={this.onChangehandler}/>
                            </div>

                            <div className="form-group">
                                <label>Password</label>
                                <Input type="password" name="password" className="form-control" placeholder="Enter password" 
                                defaultValue={this.state.signupData.password}
                                onChange={this.onChangehandler}/>
                            </div>
                            <div className="text-danger">{this.state.msg}</div>
                            <div className="text-success">{this.state.msgComplete} </div><br/>
                            <Button type="submit" className="btn btn-success btn-lg btn-block" 
                            onClick={this.onSubmitHandler} > 
                            Register
                            {isLoading ? (
                                <span
                                  className="spinner-border spinner-border-sm ml-5"
                                  role="status"
                                  aria-hidden="true"
                                ></span>
                              ) : (
                                <span></span>
                              )} </Button>
                            <p className="forgot-password text-center">
                                Already registered <Link to="/">log in?</Link>
                            </p>
                        </Form>
                        </div>
                    </div>
                </div>
            </div>

        )
    };
   
};

