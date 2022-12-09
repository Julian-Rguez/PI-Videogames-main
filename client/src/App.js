import './App.css';
import Login from './components/login/login';
import Navbar from './components/navbar/navbar';
import Search from './containers/Search/Search'
import Create from './containers/Create/Create';
import { Route } from "react-router-dom";
import Home from './containers/Home/Home';
import GameDetail from './containers/GameDetail/GameDetail';

function App() {
  return (
    <div className="App">
      <Route exact path={"/"} component={Login}/>

      <Route path={'/home'} component={Navbar}/>
			<Route exact path='/home' component={Home} />
          
      <Route path='/results' component={Navbar} />
      <Route exact path='/results/:name' component = {Search} />   

      <Route path='/create' component={Navbar} />
      <Route path='/create' exact component={Create} />

      
      <Route path='/videogames/:id' component={Navbar} />
			<Route exact path='/videogames/:id' render={({ match }) => <GameDetail id={match.params.id} />}	/>
    </div>
  );
}

export default App;
