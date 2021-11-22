import {
  BrowserRouter as Router,
  Switch,
  Route
  /*Redirect,*/
} from "react-router-dom";
import './App.css';
import Login from './components/login';
import Signup from "./components/signup";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/login" component={Login} /> 
          <Route exact path="/signup" component={Signup} /> 
        </Switch>
      </div>
    </Router>
  );
}

export default App;
