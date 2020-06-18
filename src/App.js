import React from 'react';
import './App.css';
import Home from './containers/Home'
import Nav from './components/NavBar'
import PlantShop from './containers/PlantShop.js';
import { Route, Switch} from 'react-router-dom'



class App extends React.Component {
  state={
    currentUser: {
    },
    userPlants: [],
    userGarden:{},
    planttemplates:[],
    planttemplates:[]
  }
  
  url='http://localhost:3000/api/v1/users'
  gardenurl='http://localhost:3000/api/v1/gardens'

  planttemplateurl='http://localhost:3000/api/v1/planttemplates'

  componentDidMount(){
    fetch(this.url)
    .then(r=>r.json())
    .then(userData=> this.setState({ currentUser: userData[0].user, userPlants: userData[0].plants, userGarden: userData[0].gardens}))
    // this.setState({this.state.currentUser.name}

    fetch(this.planttemplateurl)
    .then(r=>r.json())
    .then(plantTemplateData=>this.setState({...this.state, planttemplates: plantTemplateData}))
  }

  updatePlantState =(plant) => {
    this.setState({ userPlants: [...this.state.userPlants, plant]})
  }


  render(){
    
    return (
      <div className="App">
        <Nav> </Nav>
        <Switch>
          <Route exact path="/" render={routerProps =><Home {...routerProps} updatePlantState = {this.updatePlantState} currentUser={this.state.currentUser} currentUserPlants={this.state.userPlants} currentUsergarden={this.state.userGarden}/>}/>
          <Route path = "/plants" render={(routerProps) => <PlantShop {...routerProps} updatePlantState = {this.updatePlantState} plants = {this.state.planttemplates} currentUser = {this.state.currentUser}/>}/>
        </Switch>
      </div>
    );
  }
}

export default App;
