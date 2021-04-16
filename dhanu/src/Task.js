
import React from 'react';
import { Table, Button, Alert } from 'react-bootstrap';

class Task extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      products: [],
      response: {}
    }
  }

  componentDidMount() {
    const apiUrl = 'http://jsonplaceholder.typicode.com/todos';

    fetch(apiUrl)
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            products: result
          });
        },
        (error) => {
          this.setState({ error });
        }
      )
  }

  deleteProduct(productId) {
    const { products } = this.state;

    const apiUrl = 'http://jsonplaceholder.typicode.com/todos';
    const formData = new FormData();
    formData.append('productId', productId);

    const options = {
      method: 'POST',
      body: formData
    }
    

    fetch(apiUrl, options)
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            response: result,
            products: products.filter(product => product.id !== productId)
          });
        },
        (error) => {
          this.setState({ error });
        }
      )
  }

  render() {
    const { error, products} = this.state;

    if(error) {
      return (
        <div>Error: {error.message}</div>
      )
    } else {
      return(
        <div>
         
          {this.state.response.message && <Alert variant="info">{this.state.response.message}</Alert>}
          <Table>
            <thead>
            
            </thead>
            <tbody>
              {products.map(product => (
                <tr key={product.userid}>
                  <td>{product.id}</td>
                  <td>{product.title}</td>
                  <td>{product.completed}</td>
                  
                  
                
                  <td>
                
                    &nbsp;<Button variant="danger" onClick={() => this.deleteProduct(product.id)}>Delete</Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
          
        </div>
      )
    }
  }
}

export default Task;