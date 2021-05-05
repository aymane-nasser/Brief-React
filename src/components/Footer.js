import React from "react";
import { Container,fluid, InputGroup, FormControl, Button, Row, Col, Image } from "react-bootstrap";

function Footer() {
  return (
      <div>

      <Container  fluid className="footer text-center text-md-left">
        <Row>
          {/*++++++++++++++++++ LOGO AND SLOGEN +++++++++++++++++++++++++++*/}
          <Col md="2">
           <img className="mt-5 ml-5" src="./img/logo.png" width="60px" height="60px" />
            <p className="mt-3 ml-2">
              Eat, Eat, and Repeat Food for all
            </p>
          </Col>

           {/*++++++++++++++++++ Follow Us +++++++++++++++++++++++++++*/}
          <Col md="3">
            <h5 className="text-center mt-5">Follow Us:</h5>
            <ul>
              <li className="list-unstyled">
                <a href="#!">Facebook</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Instagram</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Youtube</a>
              </li>
            </ul>
          </Col>

          {/*++++++++++++++++++ Service: +++++++++++++++++++++++++++*/}
              <Col md="3">
            <h5 className="text-center mt-5">Service:</h5>
            <ul>
              <li className="list-unstyled">
                <a href="#!">Web Heading</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Private Service</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">E-mail Heading</a>
              </li>
            </ul>
          </Col>
              {/*++++++++++++++++++ Contact Us: +++++++++++++++++++++++++++*/}
              <Col md="3">
            <h5 className="text-center mt-5">Contact Us:</h5>
            <ul>
              <li className="list-unstyled">
                <a href="#!">StreetFood@gmail.com</a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>

       {/*++++++++++++++++++ copyright +++++++++++++++++++++++++++*/}
      <div className="footer footer-copyright text-center py-3">
        <Container fluid >
         <p className="mt-3" > &copy; {new Date().getFullYear()} Copyright 2021: StreetFooD AYMANE and MARIAM </p>
        </Container>
      </div>
   
     </div>
  )
}

export default Footer