import React, { Component } from 'react';
import "./style/usage/app.scss"
import Home from "./pages/myYiJia"
import Detail from "./pages/detail"
import {BrowserRouter as Router,Route,Switch} from "react-router-dom"

class App extends Component {
  render() {
    return (
    
      <Router>
        <Switch>
        <Route path="/" exact component={Home}></Route>
        <Route path="/detail" component={Detail}></Route>
        </Switch>
        </Router>
      
    );
  }
}

export default App;
