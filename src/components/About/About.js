import React from 'react';
import './About.css';
import aboutUs from '../../images/aboutUs.png';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <div>
           <Container fluid>
            <div>
                    <h1>
                        Empowering the world to develop technology through collective knowledge.
                    </h1>
                    <div className="img-with-content">
                        <img className="about-us" src={aboutUs} alt=""></img>
                        
                        <h3 className="h3-text">Our public platform serves 100 million people every month, making it one of the 50 most popular websites in the world.</h3>
                    </div>

                    <h5>Adopt a Growth Mindset. Be curious and eager to learn. Aim for ethical, sustainable, long-term growth, both personally and in the company.</h5>

                    <div className="about-footer">
                       <h5> New here? Then join our Student section....</h5>

                       <Link to="/student">
                             <button type="button" class="btn btn-outline-secondary">Go</button>
                        </Link>
                    </div>
                </div>
           </Container>
        </div>
    );
};

export default About;