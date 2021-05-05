
import 'bootstrap/dist/css/bootstrap.min.css';
import {React,useState} from 'react'
import {Card,Row,Col,Container,Button,} from 'react-bootstrap';
import { FaTrashAlt } from 'react-icons/fa';
import NavBar from "./NavBar"
import Footer from "./Footer"



function Favorite() {

    
  let [data,setData]=useState(JSON.parse(localStorage.getItem("data")));
  
  return (
      <div >
      
          <Container fluid className="fav">
          <NavBar/>
           <h2 className="pre d-flex justify-content-center text-warning mt-5">Your Favorite Street Food</h2>
              <Row>
              {
              data.map(el => (
              <Col md={4} className="cards d-flex justify-content-center">
                                <Card className="bg-warning" W m={4} style={{ width: '18rem' }} >
                                    <Card.Img variant="top" src={el.strMealThumb} />
                                    <Card.Body>
                                        <Card.Title className="text-dark">{el.strMeal}</Card.Title>
                                        <Card.Text>{el.strArea}</Card.Text><br></br><br></br>
                                     
                                       <Button variant="outline-danger "> <FaTrashAlt onClick={()=>{
                                    let arr=[];
                                     arr=data.filter(x=> x.idMeal !== el.idMeal);
                                     setData(arr);
                                     localStorage.setItem("data",JSON.stringify(arr));
                                }
                                } /></Button>
                                    </Card.Body>
                                </Card>
                            </Col>
              
              ))}
              </Row>
      </Container>
     
          <Footer />

     
  </div>
  )
}

export default Favorite;