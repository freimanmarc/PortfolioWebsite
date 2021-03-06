import React from 'react';
import Home from './home';
import Contact from './contact';
import Projects from './projects';
import Resume from './resume';

import {Switch, Route} from 'react-router-dom';

const Main = () => (
  <Switch className="landing-grid">
    <Route exact path="/" component={Home} />
    <Route path="/contact" component={Contact} />
    <Route path="/Projects" component={Projects} />
    <Route path="/Resume" component={Resume} />
  </Switch>
)

export default Main;
