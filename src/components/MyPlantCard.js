import React from 'react'

class MyPlantCard extends React.Component {
    render(){
        return(
            <div className="my-plant-card">
                <h3>{Object.keys(this.props.plantCount)[0]}</h3>
                <h5>Amount: {Object.values(this.props.plantCount)[0]}</h5>
            </div>
        )
    }
}

export default MyPlantCard