import React from 'react';
import './Header.css';
import headerLogo from '../../images/headerLogo.png';
import { Button, Col, Container, Form, FormControl, Nav, Navbar, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='header-container'>
            <Container fluid>
            <Row xxl={3} lg={3} md={3} sm={1} xs={1}>
                {/* website logo  */}
                <Col>
                    <div className='image-container'>
                        <img className='header-image' src={headerLogo} alt="" />
                    </div>  
                </Col>

                 {/* Nav menue bar */}
                <Col>
                <div className="menu-container ">
                     <ul className="menu-list">
                        <Link to="/home" className="items">
                            <li>Home</li>
                        </Link>
                        <Link to="/about" className="items">
                            <li>About</li>
                        </Link>
                        <Link to="/blogs" className="items">
                            <li>Blogs</li>
                        </Link>
                        <Link to="contact" className="items">
                            <li>Contact</li>
                        </Link>
                    </ul>
                </div>
                </Col>

                {/* Search bar */}
                <Col>
                    <div className="search-bar">
                        <Form className="d-flex">
                            <FormControl
                                type="search"
                                placeholder="Search"
                                className="mr-2"
                                aria-label="Search"
                            />
                            <Button>Search</Button>
                        </Form>
                    </div>
                </Col>
            </Row>
            </Container>
        </div>
    );
};

export default Header;