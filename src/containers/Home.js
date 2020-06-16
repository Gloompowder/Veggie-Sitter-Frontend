import React from 'react';
import Gardenshop from '../containers/Gardenshop.js';

class Home extends React.Component {

    state={
        gardentemplates:[],
        gardens:{2:0},

    }

    gardentemplateurl='http://localhost:3000/api/v1/gardentemplates'

    gardenurl='http://localhost:3000/api/v1/gardens'


    componentDidMount(){
        fetch(this.gardentemplateurl)
        .then(r=>r.json())
        .then(gardenTempData=>this.setState({...this.state, gardentemplates: gardenTempData}))

        fetch(this.gardenurl)
        .then(r=>r.json())
        .then(gardenData=>this.setState({...this.state, gardens: gardenData}))
    }

    
    render(){
     
        return (
            <div className="Home">
                <Gardenshop gardentemplates={this.state.gardentemplates} currentUser={this.props.currentUser}/>
            </div>
          );
    }
  }
  
  export default Home;