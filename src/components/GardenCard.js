import React from 'react'
import { Redirect } from "react-router-dom"

class GardenCard extends React.Component {
    state={
        newGarden:{
            name:""
        },
        redirect: null
    }

    handleChange=(e)=>{
        e.persist()
        e.preventDefault()
        const newGardenName={ name: e.target.value }
        console.log(newGardenName)
        this.setState({...this.state, newGarden: newGardenName})
    }
    // addNote(newNote) {
    //     this.setState({ toDoNotes: [...this.state.toDoNotes, newNote]})
    //   }
    createGarden=(e)=>{
        e.persist()
        e.preventDefault()
        const gardenurl='http://localhost:3000/api/v1/gardens'
        const newGardenToBePosted={
            name: this.state.newGarden.name,
            user_id: this.props.currentUser.id,
            category: this.props.category,
            sellprice: this.props.sellprice,
            price: this.props.price,
            image: this.props.image
        }

        fetch(gardenurl,{
            method: 'POST',
            headers: {'Content-type':'application/json',
            'Accept':'application/json'},
            body:   JSON.stringify(
                newGardenToBePosted
            )
        })
        .then( this.setState({...this.state, redirect: "/plants"}))
    }

    render(){
    
        if (this.state.redirect) {
            return <Redirect to={this.state.redirect} />
          }
    return (
        <div>
            <form onChange={this.handleChange}>
                <div className="garden-card">
                <h1>{this.props.name}</h1>
                <img src={this.props.image} alt={this.props.name}/>
                <div className='whitebox'>
                <br></br>
                <input type="text_field" name="name" placeholder="Garden Name" />
                <h4>{this.props.category}</h4>
                <h4>Buy Price: {this.props.price}</h4>
                <h4>Sell Price: {this.props.sellprice}</h4>
                <button onClick={this.createGarden}>Purchase</button>
                </div>
                </div>
            </form>
        </div>
      );
    }
}

export default GardenCard;