// import React from 'react';
// import Gardenshop from '../containers/Gardenshop.js';
// import MyPlants from '../containers/MyPlants.js';
// import { Switch  } from 'react-router-dom'
// import PlantShop from '../containers/PlantShop.js';
// import MyGarden from '../containers/MyGarden.js'
// import { BrowserRouter as Router, Route} from 'react-router-dom' 



// class Home extends React.Component {

//     state={
//         gardentemplates:[],
//         gardens:[],
//         newGarden:{
//             name:"",
//             user_id: this.props.currentUser.id
//         },
//         plants:[],
//         planttemplates:[],
//         receipts:[],
//         newReceipt:{},
//         newPlot:{}
//     }


    // gardentemplateurl='http://localhost:3000/api/v1/gardentemplates'

    // gardenurl='http://localhost:3000/api/v1/gardens'

    // planttemplateurl='http://localhost:3000/api/v1/planttemplates'

    // componentDidMount(){
    //     fetch(this.gardentemplateurl)
    //     .then(r=>r.json())
    //     .then(gardenTempData=>this.setState({...this.state, gardentemplates: gardenTempData}))

    //     fetch(this.gardenurl)
    //     .then(r=>r.json())
    //     .then(gardenData=>this.setState({...this.state, gardens: gardenData[0]}))

    //     fetch(this.planttemplateurl)
    //     .then(r=>r.json())
    //     .then(plantTemplateData=>this.setState({...this.state, planttemplates: plantTemplateData}))
    // }

    
//     render(){
//         return (
 
//                   <Router>
//                   <div className="Home">
//                 <Switch>
//                     <Route path="/" render={(routerProps) => <Gardenshop {...routerProps} gardentemplates={this.state.gardentemplates} currentUser={this.props.currentUser} plants={this.state.planttemplates}/>}/>
//                     <Route path = "/plants" render={(routerProps) => <PlantShop {...routerProps} updatePlantState = {this.props.updatePlantState} plants = {this.state.planttemplates} currentUser = {this.props.currentUser}/>}/>
//                     <Route path = "/mygarden" render= {(routerProps) => <MyGarden {...routerProps} myGarden={this.props.currentUsergarden} MyGardenPlants={this.state.gardens.gardenPlants}/>}/>
//                     <Route exact path= "/myplants" render={(routerProps) => <MyPlants {...routerProps} currentUser={this.props.currentUser} currentUserPlants={this.props.currentUserPlants}/>}/>
//                 </Switch>
//                 </div>
//                 </Router>

                   
        
               
//           );
//     }
//   }
  
//   export default Home;