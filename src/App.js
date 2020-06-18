import React from 'react';
import './App.css';
// import Home from './containers/Home'
import Nav from './components/NavBar'
import { Route, Switch} from 'react-router-dom'
import Gardenshop from './containers/Gardenshop.js';
import MyPlants from './containers/MyPlants.js';
import PlantShop from './containers/PlantShop.js';
import MyGarden from './containers/MyGarden.js'




class App extends React.Component {
  state={
    currentUser: {
    },
    userPlants: [],
    userGarden:{},
    planttemplates:[],
    gardentemplates:[],
    gardens:[],
    newGarden:{
        name:"",
        user_id: ''
    },
    plants:[],
    receipts:[],
    newReceipt:{},
    newPlot:{}
  }
  
  url='http://localhost:3000/api/v1/users'
  gardenurl='http://localhost:3000/api/v1/gardens'

  planttemplateurl='http://localhost:3000/api/v1/planttemplates'


  gardentemplateurl='http://localhost:3000/api/v1/gardentemplates'

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

    fetch(this.gardentemplateurl)
        .then(r=>r.json())
        .then(gardenTempData=>this.setState({...this.state, gardentemplates: gardenTempData}))

      fetch(this.gardenurl)
        .then(r=>r.json())
        .then(gardenData=>this.setState({...this.state, gardens: gardenData[0]}))

        fetch(this.planttemplateurl)
        .then(r=>r.json())
        .then(plantTemplateData=>this.setState({...this.state, planttemplates: plantTemplateData}))
  }

  updatePlantState =(plant) => {
    this.setState({ userPlants: [...this.state.userPlants, plant]})
  }


  render(){
    console.log(this.state.currentUsergarden)
    return (
      <div className="App">
        <Nav> </Nav>
        <Switch>
          <Route exact path="/" render={routerProps =><Gardenshop {...routerProps} gardentemplates={this.state.gardentemplates} updatePlantState = {this.updatePlantState} currentUser={this.state.currentUser} currentUserPlants={this.state.userPlants} currentUsergarden={this.state.userGarden} plants={this.state.planttemplates}/>}/>
          <Route path = "/plants" render={(routerProps) => <PlantShop {...routerProps} updatePlantState = {this.updatePlantState} plants = {this.state.planttemplates} currentUser = {this.state.currentUser}/>}/>
          <Route exact path = "/mygarden" render= {(routerProps) => <MyGarden {...routerProps} myGarden={this.state.userGarden} MyGardenPlants={this.state.gardens.gardenPlants}/>}/>
          <Route exact path= "/myplants" render={(routerProps) => <MyPlants {...routerProps} currentUser={this.state.currentUser} currentUserPlants={this.state.currentUserPlants}/>}/>
        </Switch>
      </div>
    );
  }
}

export default App;

