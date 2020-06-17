import React from 'react'

class MyPlants extends React.Component {
    render(){console.log(Object.keys(this.props)[0], Object.values(this.props)[0])
        return(
            <div className="my-plant-card">
                {/* <h3>{Object.keys(this.props)[0]}</h3>
                <h5>{Object.values(this.props)[0]}</h5> */}
            </div>
        )
    }
}

export default MyPlants