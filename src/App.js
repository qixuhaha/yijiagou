import React, { Component,Fragment } from 'react';
import "./style/usage/app.scss"
import Home from "./pages/home/index"
import Index from "./pages/Index/index"
import Detail from "./pages/detail/index"
import {BrowserRouter as Router,Route} from "react-router-dom"

class App extends Component {
  render() {
    return (
      <Router>
        <Fragment>
        <Route path="/"  exact component={Index}/>
       <Route path="/detail" component={Detail}></Route>
       </Fragment>
     </Router>
    );
  }
}

export default App;
