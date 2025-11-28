import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import './App.css';
import Home from './home/home'
import Child from './child/child'
import EditQuote from './edit-quote/EditQuote'
import ManageKids from './manage-kids/ManageKids'

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/child/:childId">
          <Child />
        </Route>
        <Route path="/edit/:quoteId">
          <EditQuote />
        </Route>
        <Route path="/manageKids">
          <ManageKids />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  )
}

export default App;
