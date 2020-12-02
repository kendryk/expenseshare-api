import React from "react";
import {Switch, Route} from 'react-router-dom';
import NavBar from "./components/layout/navbar/NavBar";
import HomePage from "./components/pages/HomePage";
import JoinPage from "./components/pages/JoinPage";
import CreatePage from "./components/pages/CreatePage";
import AboutPage from "./components/pages/AboutPage";
import EventPage from "./components/pages/EventPage";
import './App.scss';

function App() {
  return (

      <React.Fragment>
          <NavBar/>
          <Switch>
              <Route exact path='/' component={HomePage} />
              <Route path='/JoinPage' component={JoinPage} />
              <Route path='/CreatePage' component={CreatePage} />
              <Route path='/AboutPage' component={AboutPage} />
              <Route path='/EventPage/:id' component={EventPage} />

          </Switch>
      </React.Fragment>
  );
}

export default App;
