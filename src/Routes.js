import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Main from './Pages/Main/Main';
import Nav from './componenets/Nav/Nav';
import Footer from './componenets/Footer/Footer';
import DetailList from './Pages/DetailListpage/DetailList';
import Detailpage from './Pages/Detailpage/Detailpage';
import Join from './Pages/Join/Join';

const Routes = () => {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/detaillist" component={DetailList} />
        <Route exact path="/detail/:id" component={Detailpage} />
        <Route exact path="/" component={Join} />
      </Switch>
      <Footer />
    </Router>
  );
};

export default Routes;
