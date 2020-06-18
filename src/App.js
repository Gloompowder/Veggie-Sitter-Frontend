import React from 'react';
import './App.css';
import Home from './containers/Home'
import Nav from './components/NavBar'
import { Route} from 'react-router-dom'



class App extends React.Component {
  state={
    currentUser: {
    },
    userPlants: [],
    userGarden:{},
    receipts: []
  }
  
  url='http://localhost:3000/api/v1/users'
  planturl= 'http://localhost:3000/api/v1/plants'

  componentDidMount(){
    fetch(this.url)
    .then(r=>r.json())
    .then(userData=> this.setState({ currentUser: userData[0].user, userPlants: userData[0].plants, userGarden: userData[0].gardens}))
    // this.setState({this.state.currentUser.name}
  }

  updatePlantState =(receipt) => {
    this.setState({ receipts: [...this.state.receipts, receipt]})
    fetch(this.url)
    .then(r=>r.json())
    .then(userData=> this.setState({ currentUser: userData[0].user, userPlants: userData[0].plants, userGarden: userData[0].gardens}))
  }


  render(){
    
    return (
      <div className="App">
        <Nav> </Nav>
          <Route exact path="/" render={routerProps =><Home {...routerProps} updatePlantState = {this.updatePlantState} currentUser={this.state.currentUser} currentUserPlants={this.state.userPlants} currentUsergarden={this.state.userGarden}/>}/>
      </div>
    );
  }
}

export default App;
