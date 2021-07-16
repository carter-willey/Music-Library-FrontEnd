import './App.css';
import React, { Component } from 'react';
import DisplayTable from './Components/DisplayTable/displayTable';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      songs: []
     }
  }

  componentDidMount(){
    this.makeGetRequest();
  }

  async makeGetRequest() {
    try{
      let response = await axios.get('http://127.0.0.1:8000/music/')
      
      this.setState({
        songs: response.data
      })
    }
    catch (ex) {
      console.log("error in API Call");
    }
  }

  render() { 
    return ( 
      <React.Fragment>
        <DisplayTable songs={this.state.songs}/>
      </React.Fragment>
     );
  }
}
 
export default App;