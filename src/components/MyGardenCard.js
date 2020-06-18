import React from 'react'

class MyGarden extends React.Component {
    render(){
   
        return (
            <div className="my-garden">
                <h4>{this.props.name}</h4>
                <img src= {this.props.image} alt= {this.props.name}/> 
                <p> {this.props.price} </p>
                <p> {this.props.sellprice} </p>
            </div>
          );
    }
}

export default MyGarden;

