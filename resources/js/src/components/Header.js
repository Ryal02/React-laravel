import React, { Component }  from 'react';
import { Redirect, Link } from 'react-router-dom';
import { Button } from "reactstrap";


export default class Header extends Component {

    state = {
      navigate: false,
    };
  
    onLogoutHandler = () => {
      localStorage.clear();
      this.setState({
        navigate: true,
      });
    };
    render() {
      const user = JSON.parse(localStorage.getItem("userData"));
      const { navigate } = this.state;
      if (navigate) {
        return <Redirect to="/" push={true} />;
      }
        return (
            <div className="hold-transition sidebar-mini layout-fixed">
                <div className="wrapper">
                    <nav className="main-header navbar navbar-expand navbar-white navbar-light" style={{marginTop: '-1em'}}>
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link" data-widget="pushmenu" to="/home" role="button"><i className="fas fa-bars"></i></Link>
                            </li>
                            <li className="nav-item d-none d-sm-inline-block">
                                <Link to="/home" className="nav-link">Home</Link>
                            </li>
                        
                        </ul>

                        <form className="form-inline ml-3">
                            <div className="input-group input-group-sm">
                                <input className="form-control form-control-navbar" type="search" placeholder="Search" aria-label="Search"/>
                                <div className="input-group-append">
                                <button className="btn btn-navbar">
                                    <i className="fas fa-search"></i>
                                </button>
                                </div>
                            </div>
                        </form>

                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <a className="nav-link" data-widget="fullscreen" href="#" role="button">
                                    <i className="fas fa-expand-arrows-alt"></i>
                                </a>
                                </li>
                                <li className="nav-item">
                                <a className="nav-link" data-widget="control-sidebar" data-slide="true" href="#" role="button">
                                    <i className="fas fa-th-large"></i>
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        );
    };
};

