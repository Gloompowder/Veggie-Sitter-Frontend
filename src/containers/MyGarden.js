import React from 'react'
import MyGardenCard from '../components/MyGardenCard'

class MyGarden extends React.Component {
    render(){
        console.log(this.props)
        return (
            <div className="my-garden">
                <h1>Welcome to !</h1>
            </div>
          );
    }
}

export default MyGarden;