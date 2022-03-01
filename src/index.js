import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './custom.js'
// 
import 'bootstrap/dist/css/bootstrap.min.css'
import reportWebVitals from './reportWebVitals';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// Conponentes
import NavbarComp from './navbar.js'
import BannerComp from './banner.js';
import ProfileComp from './profile.js';
import ExperienceComp from './experience.js';
import FooterComp from './footer.js'
import reactDom from 'react-dom';

ReactDOM.render(
  <NavbarComp />, document.getElementById('navBar')
)

ReactDOM.render(
  <BannerComp />, document.getElementById('banner')
)

ReactDOM.render(
  <ProfileComp/>, document.getElementById('profileSec')
)

reactDom.render(
  <ExperienceComp/>, document.getElementById('experienceSec')
)

reactDom.render(
  <FooterComp/>, document.getElementById('footerSec')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
