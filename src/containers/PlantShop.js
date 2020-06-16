import React from 'react'
import PlantCard from '../components/PlantCard'

function PlantShop(props) {
    console.log(props.plants)
    return (
        <div>
            <h1>Please Pick Plants!</h1>
            {props.plants.map(plant=><PlantCard 
            key={plant.id}
            {...plant}
            />)}
        </div>
      );
}

export default PlantShop;