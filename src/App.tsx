import React from 'react';
import './App.css';
import {
  Switch,
  Route,
} from "react-router-dom";
import Home from './Components/Home/Home';
import CountryInfo from './Components/CountryInfo/CountryInfo';

function App() {
  return (
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/countryInfo/:countryName'>
          <CountryInfo />
        </Route>
        <Route path="*">
          <p>page Not Found</p>
        </Route>
      </Switch>
  );
}

export default App;
