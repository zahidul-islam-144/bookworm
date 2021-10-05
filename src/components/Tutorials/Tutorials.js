import React from 'react';
import './Tutorials.css';
import tutorialLogo from '../../images/tutorialLogo.png';
import { Link } from 'react-router-dom';

const Tutorials = () => {
    return (
        <div className="tutorial-thumb">
            <h1>Do you find any tutorials ?</h1>
            <span>
                <img className="tutorial-logo" src={tutorialLogo} alt=""/>
            </span>
            <h5>Then, stay connected...</h5>

            <Link to="/tutorials">
                <button type="button" class="btn btn-outline-secondary">Go</button>
            </Link>
        </div>
    );
};

export default Tutorials;