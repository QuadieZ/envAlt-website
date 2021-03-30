import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";

// Pages
import mainPage from './pages/mainPage';
import branchSelect from './pages/branchSelect';
import LoginPage from './pages/LoginPage';
import dailyBranch from './pages/dailyBranch';
import recommendPage from './pages/recommendPage';

 
function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={LoginPage}/>
          <Route exact path="/main" component={mainPage}/>
          <Route exact path="/branchSelect" component={branchSelect}/>
          <Route exact path="/dailyBranch" component={dailyBranch}/>
          <Route exact path="/recommend" component={recommendPage}/>
        </Switch>
      </Router>

      
    </div>
  );
}

export default App;
