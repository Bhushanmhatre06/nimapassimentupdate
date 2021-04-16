import React, { Component } from 'react';
import { Form ,Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
class AddUser extends Component {
	render() {
        return(
            <div>
                <Form>
  <Form.Group controlId="formBasic">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="UserName" placeholder="Enter UserName" />
    
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="Newpassword" placeholder="NEWPassword" />
  </Form.Group>
  
  <Button variant="primary" type="submit">
    Login
  </Button>
  <Button variant="primary" type="submit">
    Logout
  </Button>
</Form>
            </div>
        );
    }
};
export default AddUser;