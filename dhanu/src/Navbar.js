import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Nav,} from 'react-bootstrap';
import './App.css';
class Navbar extends Component {
	render() {
		return(
			<nav className= "navbar navbar-dark bg-dark navbar-expand-lg ">
            
			<div className= "collapse navbar-collapse">
	  			<ul className= "navbar-nav mr-auto">
				 
				  
				  <Nav variant="pills" defaultActiveKey="/home">
  <Nav.Item>
    <Nav.Link eventKey="disabled" disabled>
      @NiMapTechnology
    </Nav.Link>
  </Nav.Item>
</Nav>
                      
	  		
                      <li className= "navbar-item">
	  					<Link to= "/Home" className= "nav-link"><span>Home</span>
                          </Link>
                          </li>
						  <li className= "navbar-item">
	  					<Link to= "/task" className= "nav-link">Task</Link>
	  				</li>
						  
                      <li className= "navbar-item">
	  					<Link to= "/user" className= "nav-link"><span/>User</Link>
	  				</li>
                      	 	 
	  			</ul>
				  
	  			</div>
				 
                  
				  
			</nav>
			
		);
	}
}

export default Navbar;