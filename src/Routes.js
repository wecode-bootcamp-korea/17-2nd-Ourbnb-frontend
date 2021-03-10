import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Main from './Pages/Main/Main';
import Nav from './componenets/Nav/Nav';
import Footer from './componenets/Footer/Footer';
import DetailList from './Pages/DetailListpage/DetailList';
// import Login from './Pages/Payment/Payment';
import Detailpage from './Pages/Detailpage/Detailpage';
import Join from './Pages/Join/Join';
import Payment from './Pages/Payment/Payment';

const Routes = () => {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/detaillist" component={DetailList} />
        <Route exact path="/detail/:id" component={Detailpage} />
        <Route exact path="/" component={Join} />
        {/* <Route exact path="/Join" component={Join} /> */}
        <Route exact path="/Payment" component={Payment} />
      </Switch>
      <Footer />
    </Router>
  );
};

export default Routes;
