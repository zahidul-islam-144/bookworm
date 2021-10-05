import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import About from './components/About/About';
import Blogs from './components/Blogs/Blogs'
import Contact from './components/Contact/contact';
import NotFound from './components/NotFound/NotFund';
import StudentWork from './components/StudentWork/StudentWork';
import TeacherWork from './components/TeacherWork/TeacherWork';
import Tutorial from './components/Tutorial/Tutorial';
import GetWork from './components/GetWork/GetWork';
import WorkInfo from './components/WorkInfo/WorkInfo';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { Container, Row } from 'react-bootstrap';


function App() {

  return (
    <div className="App">
      <Container fluid>
        <Row>
          <Router>
              <Header></Header>

                <Switch>
                  <Route exact path="/">
                      <Home></Home>
                  </Route>

                  <Route exact path="/home">
                      <Home></Home>
                  </Route>

                  <Route path="/about">
                      <About></About>
                  </Route>

                  <Route path="/blogs">
                      <Blogs></Blogs>
                  </Route>

                  <Route path="/contact">
                    <Contact></Contact>
                  </Route>

                  <Route path="/student">
                    <StudentWork></StudentWork>
                  </Route>

                  <Route path="/teacher">
                    <TeacherWork></TeacherWork>
                  </Route>

                  <Route path="/tutorials">
                    <Tutorial></Tutorial>
                  </Route>

                  <Route path="/work">
                    <GetWork></GetWork>
                  </Route>

                  <Route path="/work-info">
                    <WorkInfo></WorkInfo>
                  </Route>

                  <Route path="*">
                    <NotFound></NotFound>
                  </Route>
                </Switch>

              <Footer></Footer>
            </Router>
        </Row>
    
      </Container>
    </div>

  );
}

export default App;
