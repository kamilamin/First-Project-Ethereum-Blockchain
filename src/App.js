import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import web3 from './web3';
import demo from './demo';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      setHouse: '',
      propertyID: '',
      SellerName: '',
      BuyerName: '',
      no_of_beds: '',
      accountAddress: '',
      cost: ''
    }
  };
  async componentDidMount() {
    const setHouse = await demo.methods.setHouse().call();
    this.setState({ setHouse })
  }
  onSubmit = async (event) => {
    event.preventDefault();
    const accounts = await web3.eth.getAccounts();

    
  };

  render() {
    return (
      <div>
        <nav class="navbar navbar-inverse">
          <div class="container-fluid">
            <div class="navbar-header">
              <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                <span class="sr-only">Toggle navigation</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
              </button>
              <a class="navbar-brand" href="#">Airbnb Demo</a>
            </div>
          </div>
        </nav>
        <div style={{padding: '10px'}}>
          <h1 style={{textAlign: 'center'}}>Welcome to Airbnb Demo</h1>
          <h4 style={{textAlign: 'center'}}>We're providing service for those who want rented house services in other cities</h4>
        </div>
          <div style={{marginLeft: '10px'}}>
            <h3>Add New House</h3>
            <form onSubmit={this.onSubmit}>
              <div className="input-group">
              <div>
                <label>Enter Property ID:</label>
                <input 
                    type="text" 
                    class="form-control" 
                    placeholder="Property ID" 
                    aria-describedby="basic-addon1" 
                    onChange={(event) => {this.setState({propertyID: event.target.value})}}
                  />
              </div>
                <label>Enter Sellers Name:</label>
                <input 
                    type="text" 
                    class="form-control" 
                    placeholder="Seller Name" 
                    aria-describedby="basic-addon1" 
                    onChange={(event) => {this.setState({SellerName: event.target.value})}}
                  />
              </div>
              <div className="input-group">
                <label>Enter Numbers of Bed:</label>
                <input 
                    type="text" 
                    class="form-control" 
                    placeholder="No. of Bed" 
                    aria-describedby="basic-addon1" 
                    onChange={(event) => {this.setState({no_of_beds: event.target.value})}}
                  />
              </div>
              <div className="input-group">
                <label>Enter Account Address:</label>
                <input 
                    type="text" 
                    class="form-control" 
                    placeholder="Account Address" 
                    aria-describedby="basic-addon1" 
                    onchange={(event) => {this.setState({accountAddress: event.target.value})}}
                  />
              </div>
              <div className="input-group">
                <label>Enter Cost Of House:</label>
                <input 
                    type="text" 
                    class="form-control" 
                    placeholder="Cost of House" 
                    aria-describedby="basic-addon1" 
                    onChange={(event) => {this.setState({cost: event.target.value})}}
                  />
              </div>
              <button type="button" class="btn btn-primary" style={{marginTop: '10px'}}>Submit</button>
            </form>
          </div>
          <div style={{marginLeft: '700px', marginTop: '-400px'}}>
          <h3>Rent For House</h3>
          <form>
            <div className="input-group">
            <div>
              <label>Enter Property ID:</label>
              <input 
                  type="text"
                  class="form-control"
                  placeholder="Property ID"
                  aria-describedby="basic-addon1"
                  onChange={(event) => this.setState({ propertyID: event.target.value })}
                />
            </div>
              <label>Enter Buyer's Name:</label>
              <input 
                  type="text"
                  class="form-control"
                  placeholder="Seller Name"
                  aria-describedby="basic-addon1"
                  onChange={(event) => this.setState({ BuyerName: event.target.value })}
                />
            </div>
            <div className="input-group">
              <label>Enter Numbers of Bed Required:</label>
              <input 
                type="text"
                class="form-control"
                placeholder="No. of Bed"
                aria-describedby="basic-addon1"
                onChange={(event) => this.setState({no_of_beds: event.target.value})}
              />
            </div>
            <div className="input-group">
              <label>Enter Account Address:</label>
              <input 
                  type="text" 
                  class="form-control" 
                  placeholder="Account Address" 
                  aria-describedby="basic-addon1" 
                />
            </div>
            <div className="input-group">
              <label>Enter Cost Of House:</label>
              <input 
                  type="text" 
                  class="form-control" 
                  placeholder="Cost of House" 
                  aria-describedby="basic-addon1" 
                />
            </div>
            <button type="button" class="btn btn-primary" style={{marginTop: '10px'}} onClick={this.submitHouse}>Submit</button>
          </form>
        </div>
        <div>
          
        </div>
      </div>
    );
  }
}

export default App;
