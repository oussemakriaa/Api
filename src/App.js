
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import UserList from './components/UserList/UserList';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import UserDetail from './components/UserDetail/UserDetail';


function App() {
  return (
    <div className="App">
     <Router>
       <Switch>
         <Route path="/" exact component={UserList} />
         <Route path="/:id" exact render={(props) => <UserDetail {...props} /> }/>
       </Switch>
     </Router>
    </div>
  );
}

export default App;
