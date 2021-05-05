import "./App.css";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Pages  from "./Pages";
import Favorite  from "./components/Favorite";
import 'bootstrap/dist/css/bootstrap.min.css';
import {React,useEffect} from 'react'


function App() {

  useEffect(() => {
    localStorage.setItem("data",JSON.stringify([]));
  }, [])

  return (
    <div>
      <Router>
        <div className="pages">
          <Switch>
            <Route exact path="/" component={Pages} />
            <Route exact path="/Favorite" component={Favorite} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
