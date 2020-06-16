import React from 'react'


class PlantCard extends React.Component {



    render(){
    return (
        <div className="Plant">
            <form>
                {/* <input type="text_field" name="name" value=""/> */}
                <h1>{this.props.name}</h1>
                <img src={this.props.image} alt={this.props.name}/>
                <h4>Buy Price: {this.props.price}</h4>
                <h4>Sell Price: {this.props.sellprice}</h4>
                <button>Purchase</button>
            </form>
        </div>
        );
    }
}

export default PlantCard;