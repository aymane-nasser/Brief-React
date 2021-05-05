import React,{Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container,fluid, InputGroup, FormControl, Button, Row, Col, Image, Card } from "react-bootstrap";
import { FaHeart } from 'react-icons/fa';
class Home extends Component {
  constructor(props) {
    super(props);
 
    this.state = { query: '', meals: [] };
  }
 
  onChange = event => {
    this.setState({ query: event.target.value });
  };
 
  onSearch = event => {
    event.preventDefault();
 
    const { query } = this.state;
 
    if (query === '') {
      return;
    }
 
    fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=' + query)
      .then(response => response.json())
      .then(result => this.onSetResult(result, query));
  };
 
  onSetResult = (result, key) => {
    this.setState({ meals: result.meals });
  };
 
  render() {
    return (
      <div id="search" >
       <Container>
 <Row>
 <Col md={12}><p className="pre d-flex justify-content-center text-dark mt-5">Brings you your favourite foods </p>
       
        {/*++++++++++++++++++ Search Input +++++++++++++++++++++++++++*/}
       


        <form className="d-flex justify-content-center " onSubmit={this.onSearch}>
        <FormControl className="search "  onChange={this.onChange}  type="text" placeholder="for food" aria-label="Search" aria-describedby="inputGroup-sizing-Search"/>
 
        <Button className="search" type="submit" variant="outline-primary">Search</Button>
        </form>
        </Col>
 
        {/*++++++++++++++++++  Result +++++++++++++++++++++++++++*/}
       
        

        <Col md={12} className="d-flex justify-content-center mt-5">
        {this.state.meals.map(item => (
          <Card className="bg-success" style={{ width: '18rem' }} key={item.idMeal}>
        
          <Card.Body>
            <Card.Img variant="top" src={item.strMealThumb} id="imgTop" />
            <br></br><br></br>
            <Card.Title>{item.strMeal}</Card.Title>
            <br></br>
            <Card.Text >{item.strArea}</Card.Text>
            
            <Button  variant="outline-danger" 
             onClick={()=>{
              let all=JSON.parse(localStorage.getItem("data"));
              let obj={idMeal:item.idMeal,strMealThumb:item.strMealThumb,strMeal:item.strMeal,strYoutube:item.strYoutube};
              all.push(obj);
              localStorage.setItem("data",JSON.stringify(all));
          }}
            ><FaHeart/></Button>
            <Card.Text>
            {item.strTags}
            </Card.Text>
          </Card.Body>
        </Card>
        ))}
         </Col>
        </Row>
        </Container>

        {/*++++++++++++++++++  Image +++++++++++++++++++++++++++*/}
      
      
        <Container fluid>
   <Row>
   <Col md={6} >
       <Image className="pizza" src="./img/pizza1.png" rounded />
     </Col>
   <Col md={6} >
       <Image className="pizza1" src="./img/pizza.png" rounded />
     </Col>
   
         </Row>
           </Container>        
        
     
        
       
      </div>
    );
  }
}
 
export default Home;