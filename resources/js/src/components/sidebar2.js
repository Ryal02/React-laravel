import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar2 = ({title, children}) => {
    return (
        
        <aside className="main-sidebar sidebar-dark-primary elevation-4">
            <Link to="/home" className="brand-link">
                <span className="brand-text font-weight-light text-center "><b> <center>CUSTOMER PAGE</center></b></span>
            </Link>

            <div className="sidebar">
                <div className="user-panel mt-3 pb-3 mb-3 d-flex">
                  
                    <div className="image">
                    <img src="lte/aaa.jpg" className="img-circle elevation-2" alt="User Image" />
                    </div>
                    <div className="info">

                        <a href="#" className="d-block"> Example </a>
                    </div>
                </div>

                <nav className="mt-2">
                    <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                        <li className="nav-item">
                            <Link to="/home" className="nav-link active">
                            <i className="nav-icon fas fa-tachometer-alt"></i>
                            <p>
                                Dashboard
                                <span className="right badge badge-danger"></span>
                            </p>
                            </Link>
                        </li>
                        
                    </ul>
                </nav>
            </div>
        </aside>
    );
};


export default Sidebar2;