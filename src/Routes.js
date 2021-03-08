import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory,
} from 'react-router-dom';
import Main from './Pages/Main/Main';
import Nav from './componenets/Nav/Nav';
import Footer from './componenets/Footer/Footer';
import Login from './Pages/Login/Login';
import DetailList from './Pages/DetailListpage/DetailList';
import Detailpage from './Pages/Detailpage/Detailpage';

const Routes = () => {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/detaillist" component={DetailList} />
        <Route exact path="/detail/:id" component={Detailpage} />
      </Switch>
      <Footer />
    </Router>
  );
};

export default Routes;
