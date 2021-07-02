import React, { Component }  from 'react';
import { Redirect, Link } from 'react-router-dom';
import { Button } from "reactstrap";


export default class Header2 extends Component {

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
                  <a className="nav-link" data-widget="pushmenu" href="#" role="button"><i className="fas fa-bars"></i></a>
                </li>
                <li className="nav-item d-none d-sm-inline-block">
                  <a href="index3.html" className="nav-link">Home</a>
                </li>
                <li className="nav-item d-none d-sm-inline-block">
                  <a href="#" className="nav-link">Contact</a>
                </li>
              </ul>
          
              <ul className="navbar-nav ml-auto">
                <li className="nav-item dropdown">
                  <a className="nav-link" data-toggle="dropdown" href="#">
                    <i className="far fa-comments"></i>
                    <span className="badge badge-danger navbar-badge">3</span>
                  </a>
                  
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link" data-toggle="dropdown" href="#">
                    <i className="far fa-bell"></i>
                    <span className="badge badge-warning navbar-badge">15</span>
                  </a>
                  
                </li>
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
            <aside className="main-sidebar sidebar-dark-primary elevation-4">
              <a href="index3.html" className="brand-link">
                <img src="lte/dist/img/AdminLTELogo.png" alt="AdminLTE Logo" className="brand-image img-circle elevation-3" />
                <span className="brand-text font-weight-light">Ryal Inc.</span>
              </a>

              <div className="sidebar">
                <div className="user-panel mt-3 pb-3 mb-3 d-flex">
                   
                  <div className="info">
                    <a href="#" class="d-block">K</a>
                  </div>
                </div>

                <div className="form-inline">
                  <div className="input-group" data-widget="sidebar-search">
                    <input className="form-control form-control-sidebar" type="search" placeholder="Search" aria-label="Search"/>
                    <div className="input-group-append">
                      <button className="btn btn-sidebar">
                        <i className="fas fa-search fa-fw"></i>
                      </button>
                    </div>
                  </div>
                </div>

                <aside className="main-sidebar sidebar-dark-primary elevation-4">
                  <a href="index3.html" className="brand-link">
                    <img src="lte/dist/img/AdminLTELogo.png" alt="AdminLTE Logo" className="brand-image img-circle elevation-3"/>
                    <span className="brand-text font-weight-light "> <b>Adonis Inc..</b></span>
                  </a>

                  <div className="sidebar">
                    <div className="user-panel mt-3 pb-3 mb-3 d-flex">
                      <div className="image">
                        <img src="lte/dist/img/avatar5.png" className="img-circle elevation-2" alt="User Image"/>
                      </div>
                      <div className="info">
                        <a href="#" class="d-block">Alexander Pierce</a>
                      </div>
                    </div>

                    <div className="form-inline">
                      <div className="input-group" data-widget="sidebar-search">
                        <input class="form-control form-control-sidebar" type="search" placeholder="Search" aria-label="Search"/>
                        <div className="input-group-append">
                          <button className="btn btn-sidebar">
                            <i className="fas fa-search fa-fw"></i>
                          </button>
                        </div>
                      </div>
                    </div>

                    <nav className="mt-2">
                      <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                        <li className="nav-item">
                          <a href="#" className="nav-link active">
                            <i className="nav-icon fas fa-tachometer-alt"></i>
                              <p>
                              Dashboard
                              </p>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a href="#" className="nav-link" data-backdrop="false" data-toggle="modal" data-target="#logout" >
                            <i className="fas fa-sign-out-alt "> </i> 
                             <p> &nbsp; Logout</p>
                          </a>
                         
                        </li>
                      </ul>
                    </nav>
                  </div>
                </aside>
              </div>
            </aside>
          </div>
            <div className="modal fade" id="logout">
              <div className="modal-dialog modal-sm">
                <div className="modal-content" >
                  <div className="modal-header pt-1 pb-1"  >
                      <button  className="close text-white" data-dismiss="modal" aria-label="Close" >
                        <span aria-hidden="true" className="text-dark"></span>
                      </button>
                  
                  </div>
                  <div className="modal-body text-center">
                    <div className="col-md-12 ">
                        <p  className="text-muted p-0" >
                          <i className="fa fa-exclamation-circle fa-lg text-warning " > </i> Are you sure you want logout?<br/>
                        </p>
                    </div>
                  
                    <div className="col-md-12 text-right">
                      <button  className="btn btn-success btn-md" onClick={this.onLogoutHandler}>
                        <i className="fas fa-sign-out-alt "> </i> 
                        Yes,Logout
                      </button>
                      <button type="button" className="btn btn-secondary btn-md " data-dismiss="modal"><i className="fas"></i> No, cancel!</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
    };
};

