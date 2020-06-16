import React from 'react';
import './App.css';
import Home from './containers/Home'
import PlantShop from './containers/PlantShop'
import { Route, Switch} from 'react-router-dom'

class App extends React.Component {
  state={
    currentUser: {
    },
    plants: []
  }
  
  url='http://localhost:3000/api/v1/users'
  planturl= 'http://localhost:3000/api/v1/plants'

  componentDidMount(){
    fetch(this.url)
    .then(r=>r.json())
    .then(userData=> this.setState({ currentUser: userData[0]}))
    // this.setState({this.state.currentUser.name})

    fetch(this.planturl)
    .then(r=>r.json())
    .then(plantData => this.setState({plants: plantData}))
  }

  render(){
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" render={routerProps =><Home {...routerProps} currentUser={this.state.currentUser}/>}/>
          <Route path= "/plants" render= {routerProps => <PlantShop  {...routerProps} plants = {this.state.plants} />}/>
        </Switch>
      </div>
    );
  }
}

export default App;
