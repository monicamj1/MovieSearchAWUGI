import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import List from './Components/List';
import Movie from './Components/Movie';



class App extends Component {
  render() {
    return (
        <Router>
          <div className="App">
            <Route path="/" exact 
                  component={List} />
            <Route path="/Movie/"
                  component={Movie} />
          </div>
        </Router>
    );
  }
}

export default App;
