import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import AppContainer from './AppContainer';;
import api from './api';
import { Button } from "reactstrap";
import { post } from 'jquery';
import Header from './Header';
import Sidebar from './Sidebar';

 

const Footer = () => {

    return (

        <footer class="main-footer">
    <div class="float-right d-none d-sm-block">
      <b>June </b> 2021
    </div>
    <strong>Ryan Basadre &copy; IT STUDENTS <a href="http://southphilcollege.com/">@Southern Philippines College</a>.</strong> All rights
    reserved.
  </footer>
        
        
        
    );

};


export default Footer;

