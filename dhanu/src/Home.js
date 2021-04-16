
import React, { Component } from 'react';
import { Dropdown} from 'react-bootstrap';

class Home extends Component {
  state = {  }

    handleLogout = () => {
        const {update} = this.props;
        update();
        this.props.history.push("/login");       
    }
  render() {
    return (
      <div>
        

          
<br></br>
        
        <div className="dropdown">
          <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              Dropdown Button
  </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
        <br/>
       <p>Nimap Infotech is an IT Outsourcing Company and Top Mobile App Development Company in Mumbai. Our Developers are well familiar and expertise in iOS App Development, Android App Development, dotnet Development, Java App Development, ReactJS App Development, Angular web Development, NodeJS web Development.Nimap Infotech is an IT Outsourcing Company and Top Mobile App Development Company in Mumbai. Our Developers are well familiar and expertise in iOS App Development, Android App Development, dotnet Development, Java App Development, ReactJS App Development, Angular web Development, NodeJS web Development. </p>
       <br/>
       <br/>
      <> <b><p>Note:Here should the  text related to selected dropdown option.</p></b></> 
     

    
 
      </div>

    );
  }
}


export default Home;