import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
        <Router>
          <div className="App">
            <Header />
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
