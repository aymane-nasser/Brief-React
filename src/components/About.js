import React from 'react'
import { Container,fluid, InputGroup, FormControl, Button, Row, Col, Image, } from "react-bootstrap";
function About() {
    return (
        <div id="About" className="about">

   <Container >
      <Row>
        <Col md="12">
           <p className="pre d-flex justify-content-center text-danger mt-2">About Us </p> </Col>
       <Col md="12" >
       <p className="p">Street Food present and help the peopel to prepare the meals in an easy way,  is present the recipes of defferent countries off all what you need with details and ingredients and method . </p>
       </Col>
     </Row>
   </Container>
       
        
        </div>
    )
}

export default About;