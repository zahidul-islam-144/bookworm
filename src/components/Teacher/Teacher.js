import React from 'react';
import './Teacher.css';
import { Link } from 'react-router-dom';
import teacherLogo from '../../images/teacherLogo.png';

const Teacher = () => {
    return (
        <div className="teacher-thumb">
            <h1>Are you a Teacher?</h1>
            <span>
                <img className="teacher-img" src={teacherLogo} alt=""/>
            </span>
            <h5>Please, join our public community...</h5>

            <Link to="/teacher">
                <button type="button" class="btn btn-outline-secondary">Press</button>
            </Link>
        </div>
    );
};

export default Teacher;