import React, { Component } from "react";
import "./App.css";
import SmurfsPage from './pages/smurfs-page/smurfs-page'
import { Route } from 'react-router-dom'
import Form from './components/form/form-component'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route path='/smurfs' component={SmurfsPage}></Route>
        <Route path='/random' component={Form}></Route>
      </div>
    );
  }
}

export default App;

