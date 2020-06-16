import React from 'react'

function GardenCard(props) {
    return (
        <div className="App">
            <form>
                {/* <input type="text_field" name="name" value=""/> */}
                <h1>{props.name}</h1>
                <img src={props.image} alt={props.name}/>
                <h4>{props.category}</h4>
                <h4>Buy Price: {props.price}</h4>
                <h4>Sell Price: {props.sellprice}</h4>
                <button>Purchase</button>
            </form>
        </div>
      );
}

export default GardenCard;