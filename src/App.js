import React from 'react';
import './App.css';
import Home from './containers/Home'
import { Route, Switch} from 'react-router-dom'

class App extends React.Component {
  state={
    currentUser: {
    }
  }
  
  url='http://localhost:3000/api/v1/users'

  componentDidMount(){
    fetch(this.url)
    .then(r=>r.json())
    .then(userData=> this.setState({ currentUser: userData[0]}))
    // this.setState({this.state.currentUser.name})
  }
  render(){
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" render={routerProps =><Home {...routerProps} currentUser={this.state.currentUser}/>}/>
        </Switch>
      </div>
    );
  }
}

export default App;
