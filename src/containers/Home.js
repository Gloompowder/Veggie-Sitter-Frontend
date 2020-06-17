import React from 'react';
import Gardenshop from '../containers/Gardenshop.js';
import MyPlants from '../containers/MyPlants.js';

class Home extends React.Component {

    state={
        gardentemplates:[],
        gardens:[],
        newGarden:{
            name:"",
            user_id: this.props.currentUser.id
        },
        plants:[],
        planttemplates:[],
        receipts:[],
        newReceipt:{},
        newPlot:{}
    }


    gardentemplateurl='http://localhost:3000/api/v1/gardentemplates'

    gardenurl='http://localhost:3000/api/v1/gardens'

    planturl='http://localhost:3000/api/v1/plants'

    planttemplateurl='http://localhost:3000/api/v1/planttemplates'

    receipturl='http://localhost:3000/api/v1/receipts'

    componentDidMount(){
        fetch(this.gardentemplateurl)
        .then(r=>r.json())
        .then(gardenTempData=>this.setState({...this.state, gardentemplates: gardenTempData}))

        fetch(this.gardenurl)
        .then(r=>r.json())
        .then(gardenData=>this.setState({...this.state, gardens: gardenData}))

        fetch(this.planturl)
        .then(r=>r.json())
        .then(plantData=>this.setState({...this.state, plants: plantData}))

        fetch(this.planttemplateurl)
        .then(r=>r.json())
        .then(plantTemplateData=>this.setState({...this.state, planttemplates: plantTemplateData}))

        fetch(this.receipturl)
        .then(r=>r.json())
        .then(receiptData=>this.setState({...this.state, receipts: receiptData}))

        fetch(this.ploturl)
        .then(r=>r.json())
        .then(plotData=>this.setState({...this.state, plots: plotData}))
    }

    
    render(){
        return (
            <div className="Home">
                <MyPlants currentUser={this.props.currentUser} currentUserPlants={this.props.currentUserPlants}/>
                {/* 
                IF ACTIVERECORD DOESNT WORK: HOW TO FIND MY INVENTORY
                pass down all of the models as props, compare receipt instance user_id attributes for a user_id that matches the id of the current user,
                then the plants that match the id of the receipts. That will give me the plants owned by the current user. render them as hash keys and then map through and 
                increment the corresponding values of the keys by by 1 for each plant owned. the values will the the amount of flowers owned by the current user.
                pass down all of the plots as props and the garden of the current user as props. using .find, iteratre through the array of gardens and find the one
                that corresponds to the current user. then, filter throught the props.plots to find one that has the garden id of the current user. The ones that match 
                will be saved in an array. then, filter through and find those plots' plant_ids. then filter through the plants to match the plant ids. create a hash with the 
                keys as the plants' names and a value of 1. every time they match, increment those values by 1. find the difference of those values and the number of how many of
                each plant you own. the resulting number will be the ones that aren't planted in a plot. pass these all down as props, render it in the my plant cards. */}
                {/* TRYING TO DO MY GARDEN RENDERING 
                1passdown the gardens as props
                2passdown currentUser as props, 
                3.pass down plots as props
                4.pass down plants as props
                5.find the garden with an id that matches the current User's id. that is the user's garden.
                6.Render that in garden page, saying a radonmly generated greeting :<garden's name>
                7.go through plots and filter out the plots to only be left with plots that have the same garden id as the current user's garden id. those are the plots in the current user's garden.
                8.if a plot has a plant_id, render a dirtpatch. 
                9. filter through the plots to find the id of the plant it belongs to. 
                10/ find the plant with that id. that plot should have an image of that plant's seed on top of it.
                11. card that is showing the card and seed should ahve an onclick that highlights it.
                12. the parent container of my garden cards should have an onclick to set all plots to watered false. if the plot was watered, it should show image2 rather than 1 and image 3 rather than 2. 
                13. if the plant is on image 3, then the onlclick at the bottom of the page will be set to sell rather than water. 
                14. if they decide to sell, they will increment the currentUser's money by the sellprice of the plant that was highlighted.
                15. this will delete the dirt patch, with they can create using a different button for 2 dollars. 
                */}
                <Gardenshop gardentemplates={this.state.gardentemplates} currentUser={this.props.currentUser} plants={this.state.plants}/>
            </div>
          );
    }
  }
  
  export default Home;