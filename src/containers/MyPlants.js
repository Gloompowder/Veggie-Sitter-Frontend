import React from 'react'
import MyPlantCard from '../components/MyPlantCard.js'

class MyPlants extends React.Component {
    // plantHash={}
    // plantArray=[]
    // this.props.currentUserPlants.forEach(plant=>{
    //     if (this.plantHash[plant.name]){
    //         this.plantHash[plant.name] = this.plantHash[plant.name]+1
    //     }
    //     else {
    //         this.plantHash[plant.name]=1
    //     }
    // })
    //     console.log(this.plantHash)
    //     console.log(Object.keys(this.plantHash))
    //     Object.keys(this.plantHash).map(
    //         plantName => {
    //         plantArray.append({plantName: this.plantHash[plantName]})
    //     }
    //     )
    render(){
        const plantHash={}
        const plantArray=[]
        this.props.currentUserPlants.forEach(plant=>{
            if (plantHash[plant.name]){
                plantHash[plant.name] = plantHash[plant.name] + 1
            }
            else{
                plantHash[plant.name] = 1
            }
        })
        const plantNameHash= Object.keys(plantHash)
        plantNameHash.map(
            (plant) => {
                plantArray.push({plant : plantHash[plant]})
            }
        )
        return(
            plantArray.map(plant_plus_number =><MyPlantCard plantCount={plant_plus_number}/>)
        )
    }
}

export default MyPlants