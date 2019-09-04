import React from 'react';
import './App.css';

import About from './components/About';
import Search from './components/Search';
import Profile from './components/Profile';

import { Container } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className='App'>
          <header className="App-header">
            <Container style={{ minHeight: '700px' }}>
              <Switch>
                <Route exact path='/' component={Search} />
                <Route exact path='/profile/:id' component={Profile} />
                <Route exact path='/about' component={About} ></Route>
              </Switch>
            </Container>
          </header>

        </div>

      </Router>
    );
  }
}

export default App;
