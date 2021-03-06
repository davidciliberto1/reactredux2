import logo from './logo.svg';
import './App.css';
import { HomePage } from './containers/HomePage';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import { UserPage } from './containers/HomePage/UserPage';

function App() {
  return (
    <Router>
    <div className="App">
     <Switch>
      <Route exact path='/' component={HomePage} />
      <Route exact path='/user/:userId' component={UserPage} />
      <Route>404 Pagina No Encontrada!!</Route>
     </Switch>
    </div>
    </Router>
      );
}

export default App;
