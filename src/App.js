import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";

// Pages
import MainPage from './pages/MainPage';
import BranchSelect from './pages/BranchSelect';
import LoginPage from './pages/LoginPage';
import DailyBranch from './pages/DailyBranch';
import RecommendPage from './pages/RecommendPage';
 
function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={LoginPage}/>
          <Route exact path="/main" component={MainPage}/>
          <Route exact path="/branchSelect" component={BranchSelect}/>
          <Route exact path="/dailyBranch" component={DailyBranch}/>
          <Route exact path="/recommend" component={RecommendPage}/>
        </Switch>
      </Router>

      
    </div>
  );
}

export default App;
