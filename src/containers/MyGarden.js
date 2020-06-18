import React from 'react'
import MyGardenCard from '../components/MyGardenCard'

class MyGarden extends React.Component {
    render(){console.log(this.props)
        return (
            <div className="my-garden">
                <h1>Welcome to {this.props.myGarden.name}!</h1>
                {this.props.gardensAndPlants.map(plant=><MyGardenCard 
                key={plant.id} 
                {...plant}/>
                )}
            </div>
          );
    }
}

export default MyGarden;