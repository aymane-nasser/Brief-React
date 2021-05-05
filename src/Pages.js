
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from "./components/NavBar"
import Slogan from "./components/Slogan"
import Home from "./components/Home"
import Card from "./components/Card"
import About from "./components/About"
import Footer from "./components/Footer"
function Pages() {
  return (
    <div>
      <NavBar/>
      <Slogan/>
      <Home/>
      <Card/>
      <About/>
      <Footer/>
    </div>
  );
}

export default Pages;