import React from 'react';
import './App.css';
import Home from './containers/Home'
import PlantShop from './containers/PlantShop'
import Nav from './components/NavBar'
import { Route, Switch} from 'react-router-dom'
import MyPlants from './components/MyPlantCard';

class App extends React.Component {
  state={
    currentUser: {
    },
    userPlants: []
  }
  
  url='http://localhost:3000/api/v1/users'
  planturl= 'http://localhost:3000/api/v1/plants'

  componentDidMount(){
    fetch(this.url)
    .then(r=>r.json())
    .then(userData=> this.setState({ currentUser: userData[0].user, userPlants: userData[0].plants}))
    // this.setState({this.state.currentUser.name})


  }

  render(){
    console.log(this.state.currentUser, this.state.userPlants)
    return (
      <div className="App">
        <Nav> </Nav>
        <Switch>
          <Route exact path="/" render={routerProps =><Home {...routerProps} currentUser={this.state.currentUser} currentUserPlants={this.state.userPlants}/>}/>
          <Route path= "/plants" render= {routerProps => <PlantShop  {...routerProps} plants = {this.state.plants} />}/>
        </Switch>
      </div>
    );
  }
}

export default App;
