import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Main from './Pages/Main/Main';
import Nav from './componenets/Nav/Nav';
import Footer from './componenets/Footer/Footer';
import DetailList from './Pages/DetailListpage/DetailList';
import Detailpage from './Pages/Detailpage/Detailpage';
import Join from './Pages/Join/Join';
import Payment from './Pages/Payment/Payment';
import Mypage from './Pages/Mypage/Mypage';

const Routes = () => {
  // const [isJoin, setIsJoin] = useState(false);
  return (
    <Router>
      <Nav />
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/detaillist" component={DetailList} />
        <Route exact path="/detail/:id" component={Detailpage} />
        <Route exact path="/" component={Join} />
        <Route exact path="/Payment" component={Payment} />
        <Route exact path="/mypage" component={Mypage} />
      </Switch>
      <Footer />
    </Router>
  );
};

export default Routes;
