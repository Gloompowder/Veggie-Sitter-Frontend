import React from 'react'

class MyGarden extends React.Component {
    render(){
        console.log(this.props)
        return (
            <div className="my-garden">
                <h4>This is a single garden card.</h4>
                <h3></h3>
            </div>
          );
    }
}

export default MyGarden;