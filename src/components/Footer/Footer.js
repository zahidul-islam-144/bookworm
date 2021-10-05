import React from 'react';
import { Col, Row } from 'react-bootstrap';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopyright } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faYoutube, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import headerLogo from '../../images/headerLogo.png';

const Footer = () => {
    return (
        <div className="footer">
            <Row xxl={3} lg={3} md={3} sm={1} xs={1}>
                <Col className="footer-content-block">
                    <h5>Questions</h5>
                    <h5>Jobs</h5>
                    <h5>Help</h5>
                </Col>
                <Col className="footer-middle-block">
                  <div className="footer-img-block"><img className="footer-img" src={headerLogo}alt=""></img></div>
                  <h4>Bookworm team <FontAwesomeIcon icon={faCopyright} /> 2022</h4>
                </Col>
                <Col className="icon-block">
                    <span><FontAwesomeIcon icon={faFacebook} className="icon-size"/> </span>
                    <span><FontAwesomeIcon icon={faInstagram} className="icon-size"/> </span>
                    <span><FontAwesomeIcon icon={faYoutube} className="icon-size"/> </span>
                    <span><FontAwesomeIcon icon={faLinkedin} className="icon-size"/> </span>
                </Col>
            </Row>
        </div>
    );
};

export default Footer;