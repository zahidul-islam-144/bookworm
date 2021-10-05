import { Row } from 'react-bootstrap';
import GetWork from '../GetWork/GetWork';
import Student from '../Student/Student';
import Teacher from '../Teacher/Teacher';
import Tutorials from '../Tutorials/Tutorials';
import './Home.css';


const Home = () => {

    return (
        <div>
            <h1 className="title">Our <span>Services</span></h1>
                <Row xl={2} lg={2} md={1} sm={1} g={2} className="home-container">
                    <Student></Student>
                    <Teacher></Teacher>
                    <Tutorials></Tutorials>
                    <GetWork></GetWork>
                </Row>
        </div>
    );
};

export default Home;