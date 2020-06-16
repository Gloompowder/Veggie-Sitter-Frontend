import React from "react"
import { Link } from 'react-router-dom';


const Nav = props => {

   
    
    return (

        <div >
                        
            {/* <Logo to="/">Veggie Sitter  </Logo> */}

            <Link to="/plants">Buy Plants</Link>
            {/* {props.loggedInDog ? <StyledLink to={`/dogs/${props.loggedInDog.id}`}>My Profile</StyledLink> : null} */}
          

            
            
        </div>


            
        

    )
}

export default Nav;