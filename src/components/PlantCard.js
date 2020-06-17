import React from 'react'


class PlantCard extends React.Component {

    createReceipt=(e)=>{
        e.persist()
        e.preventDefault()
        const receipturl='http://localhost:3000/api/v1/receipts'
        const newReceipt={
            plant_id: this.props.id,
            user_id: this.props.currentUser.id
        }

        fetch(receipturl ,{
            method: 'POST',
            headers: {'Content-type':'application/json',
            'Accept':'application/json'},
            body:   JSON.stringify(
               newReceipt
            )
        })
        .then(res => res.json())
        .then(plant => this.props.updatePlantState(plant))
        // .then( this.setState({...this.state, redirect: "/plants"}))
    }


    render(){
    return (
        <div className="Plant">
            <form>
                {/* <input type="text_field" name="name" value=""/> */}
                <h1>{this.props.name}</h1>
                <img src={this.props.image} alt={this.props.name}/>
                <h4>Buy Price: {this.props.price}</h4>
                <h4>Sell Price: {this.props.sellprice}</h4>
                <button onClick={this.createReceipt}>Purchase</button>
            </form>
        </div>
        );
    }
}

export default PlantCard;