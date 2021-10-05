
import './Students.css'
import studentLogo from '../../images/studentLogo.png';
import { Link } from 'react-router-dom';

const Student = () => {
    return (
        <div className="student-thumb">
            <h1>Are you a Student?</h1>
            <span>
                <img className="student-img" src={studentLogo} alt=""/>
            </span>
            <h5>Please, join our public community...</h5>

            <Link to="/student">
                <button type="button" class="btn btn-outline-secondary">Join...</button>
            </Link>
        </div>
    );
};

export default Student;
