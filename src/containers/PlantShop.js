import React from 'react'
import PlantCard from '../components/PlantCard'

function PlantShop(props) {

    return (
        <div>
            <h1>Please Pick Plants!</h1>
            {props.plants.map(plant=><PlantCard 
            updatePlantState = {props.updatePlantState}
            currentUser = {props.currentUser}
            key={plant.id}
            {...plant}
            />)}
        </div>
      );
}

export default PlantShop;