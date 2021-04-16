import React, { Component } from 'react';
import AddUser from './AddUser';
class user extends Component {
    
    constructor(props) {
        super(props);
        this.state = { 
            password: '',
            loggedIn: false
        }
    }


    handleChange = (evt) => {                
        const value = evt.target.value;
        this.setState({
            ...this.state,
            [evt.target.name]: value
        });
    }

    handleSubmit = () => {
        const {username,  password} = this.state;
        const {update} = this.props;
        update();
        if(username  && password) {
            this.props.history.push("/Home");
        }
        else {
            alert('First Login');
        }
    }


    render() { 
        return (
            
                <div className="main">
                
                    <form className="col-3">
                        <div className="form-group"><tr><td>
                            <label>Username</label>
                            </td>
                            <td>
                              
                            <input 
                                name="username" 
                                type="text" 
                                className="form-control" 
                                value={this.state.username} 
                                onChange={this.handleChange}
                            />
                            </td></tr>
                            
                        </div>

                      
                        <div className="form-group"><tr><td>
                            <label>Password</label>
                            </td>
                            <td>
                            <input 
                                name="password" 
                                type="password" 
                                className="form-control" 
                                value={this.state.password}
                                onChange={this.handleChange}
                            />
                            </td>
                            </tr>
                        </div>
                        <button 
                            type="submit" 
                            className="btn btn-primary"
                            onClick={this.handleSubmit}>
                               Login
                        </button>
                        <space/> <space/> <space/> <space/>
                        <button 
                            type="submit" 
                            className="btn btn-primary"
                            onClick={AddUser}>
                               ChangePassword
                        </button>
                    </form> 
                    
                </div>
        )
    }
}
 
export default user;