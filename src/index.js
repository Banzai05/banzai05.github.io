import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// 
import App from './App';
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
import reactDom from 'react-dom';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

const Component1 = () =>
  <Container>
    <Row>
      <Col md={6}>
        <p>adas</p>
      </Col>
      <Col md={6}>
        <p>adas</p>
      </Col>
    </Row>
  </Container>

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

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
