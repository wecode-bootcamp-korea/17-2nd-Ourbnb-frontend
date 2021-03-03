import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Main from './Pages/Main/Main';
import Nav from './componenets/Nav/Nav';
import Join from './Pages/Join/Join';
import Detailpage from './Pages/Detailpage/Detailpage';

const Routes = () => {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/Join" component={Join} />
        <Route exact path="/detailpage" component={Detailpage} />
      </Switch>
    </Router>
  );
};

export default Routes;
