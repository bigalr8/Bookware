/* 
import React, {Component } from "react";
 
import Wrapper from "./components/Wrapper";
  
class App extends Component {
    render() {
        console.log("App.render()")
        return(
            <Wrapper></Wrapper>
        
        );
    }
};

export default App;
*/

import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
//import Home from "./pages/Home";
import SavedBooks from "./pages/SavedBooks";
//import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import Wrapper from "./components/Wrapper";

function App() {
  return (
    <Router>
      <div>
        <Nav /> 
        <Switch>
          <Route exact path="/" component={Wrapper} />
          <Route exact path="/saved" component={SavedBooks} /> 
          {/* //<Route component={NoMatch} /> */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;