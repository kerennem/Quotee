import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import './App.css';
import Home from './home/home'
import Child from './child'

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/child/:childId">
          <Child />
        </Route>
        <Route path="/">
          <Home kids={[
            {
              name: 'Naomi'
            }, {
              name: 'Sophie'
            }
          ]} />
        </Route>
      </Switch>
    </Router>
  )
}

export default App;
