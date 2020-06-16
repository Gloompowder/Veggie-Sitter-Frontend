import React from 'react'
import GardenCard from '../components/GardenCard'

function Gardenshop(props) {
    return (
        <div>
            <h1>Please Pick a Garden!</h1>
            {props.gardentemplates.map(gardentemplate=><GardenCard 
            currentUser={props.currentUser} 
            key={gardentemplate.id}
            {...gardentemplate}
            />)}
        </div>
      );
}

export default Gardenshop;