import React, { Component } from 'react'
import axios from 'axios'
import { Card, Row, Col, Button, Modal, Container } from 'react-bootstrap';
import { FaHeart } from 'react-icons/fa';

export default class Pop extends Component {

    state = {
        recette: [],
        show: false,
        id:0
    }
    handleClose = () => this.setState({ show: false });
    handleShow = () => this.setState({ show: true });
    componentDidMount() {
        axios.get("https://www.themealdb.com/api/json/v1/1/search.php?s").then(res => {
            let meal = [];
            for (let i = 0; i < 6; i++) {
                meal.push(res.data.meals[i]);
            }
            this.setState({ recette: meal });
        });
    }


    render() {
        return (
            <div className="Card" >

               {/*+++++++++ CARDS +++++++++*/}
              <Container>
                <Row>
                    {this.state.recette.map(el => (
                        <React.Fragment key={el.idMeal} >
                            <Col md={4} className="cards d-flex justify-content-center">
                                <Card className="bg-warning" W m={4} style={{ width: '18rem' }} >
                                    <Card.Img variant="top" src={el.strMealThumb} id="imgTop" />
                                    <Card.Body>
                                        <Card.Title>{el.strMeal}</Card.Title>
                                        <Card.Text>{el.strArea}</Card.Text><br></br><br></br>
                                        <Button variant="success" onClick={this.handleShow}>Show</Button>
                                        <Button variant="outline-danger" className="ml-3" 
                                        onClick={()=>{
                                            let all=JSON.parse(localStorage.getItem("data"));
                                            let obj={idMeal:el.idMeal,strMealThumb:el.strMealThumb,strMeal:el.strMeal,strYoutube:el.strYoutube};
                                            all.push(obj);
                                            localStorage.setItem("data",JSON.stringify(all));
                                        }}
                                        ><FaHeart  /></Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </React.Fragment>))}
                </Row>
                </Container>
                 {/*+++++++++ MODAL OF DESCRIPTION  +++++++++*/}
                <Row>
                    {this.state.recette.map(el => (
                        <React.Fragment key={el.idMeal}>
                            <Col md={4}>
                                <Modal size="lg" show={this.state.show} onHide={this.handleClose}>
                                    <Modal.Header closeButton>
                                        <Modal.Title>{el.strMeal}</Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body>{el.strInstructions}</Modal.Body>
                                    <Modal.Title>Les ingrediants</Modal.Title>
                                    <Modal.Body>{el.strIngredient1}<br></br>{el.strIngredient2}<br></br>
                                    {el.strIngredient3}<br></br>{el.strIngredient4}<br></br>{el.strIngredient5}
                                    <br></br>{el.strIngredient6}<br></br>{el.strIngredient7}<br></br>{el.strIngredient8}
                                    <br></br>{el.strIngredient9}<br></br>{el.strIngredient10}<br></br>{el.strIngredient11}
                                    </Modal.Body>
                                    <Modal.Footer>
                                        <Button variant="secondary" onClick={this.handleClose}>Close</Button>
                                    </Modal.Footer>
                                </Modal>
                            </Col>
                        </React.Fragment>))}
                </Row>
            </div>
        )
    }
}