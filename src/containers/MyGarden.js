import React from 'react'
import MyGardenCard from '../components/MyGardenCard'

class MyGarden extends React.Component {
    render(){
    
        if (!this.props.MyGardenPlants) {return null}
        return (
            <div className="my-garden">
                <h1>Welcome to {this.props.myGarden.name}!</h1>
                {this.props.MyGardenPlants.map((plant, index)=><MyGardenCard 
                key={index}
                {...plant}/>
                )}
                <MyGardenCard />
            </div>
          );
    }
}

export default MyGarden;