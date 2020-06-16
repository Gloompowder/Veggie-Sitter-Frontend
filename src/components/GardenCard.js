import React from 'react'

class GardenCard extends React.Component {
    state={
        newGarden:{
            name:"",
            user_id: this.props.currentUser.id
        }
    }

    handleChange=(e)=>{
        e.persist()
        e.preventDefault()
        const newGardenName={ name: e.target.value }
        this.setState({newGarden: {...this.state.newGarden, newGardenName}})
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
            user_id: this.state.newGarden.user_id,
            category: this.props.category,
            sellprice: this.props.sellprice,
            price: this.props.price,
            image: this.props.iamge
        }

        fetch(gardenurl)
    }

    render(){
    return (
        <div className="App">
            <form onClick={this.createGarden} onChange={this.handleChange}>
                <h1>{this.props.name}</h1>
                <img src={this.props.image} alt={this.props.name}/>
                <br></br>
                <input type="text_field" name="name" placeholder="Garden Name" />
                <h4>{this.props.category}</h4>
                <h4>Buy Price: {this.props.price}</h4>
                <h4>Sell Price: {this.props.sellprice}</h4>
                <button>Purchase</button>
            </form>
        </div>
      );
    }
}

export default GardenCard;