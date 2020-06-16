import React from 'react'
import { Redirect } from "react-router-dom"

class GardenCard extends React.Component {

    state = { redirect: null };

    handleClick = () => {
        this.setState({redirect: "/plants"})
    }
    
    render(){
        if (this.state.redirect) {
            return <Redirect to={this.state.redirect} />
          }
    return (
        <div className="App">
            <form>
                {/* <input type="text_field" name="name" value=""/> */}
                <h1>{this.props.name}</h1>
                <img src={this.props.image} alt={this.props.name}/>
                <h4>{this.props.category}</h4>
                <h4>Buy Price: {this.props.price}</h4>
                <h4>Sell Price: {this.props.sellprice}</h4>
                <button onClick= {this.handleClick}>Purchase</button>
            </form>
        </div>
      );
    }
}

export default GardenCard;