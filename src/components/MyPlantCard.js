import React from 'react'

class MyPlants extends React.Component {
    render(){console.log(Object.keys(this.props)[0], Object.values(this.props)[0])
        return(
            <h1>This is one of my plants.</h1>
        )
    }
}

export default MyPlants