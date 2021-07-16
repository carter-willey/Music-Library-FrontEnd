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

  deleteSong = async number => {
    console.log(number); // 25, 26, 27, 28
    try{                                             // ?id=25             
      let response = await axios.delete('http://127.0.0.1:8000/music/' + number) // This line works
      console.log(response);
    }
    catch (ex) {
      console.log(ex);
      console.log("error in Delete API Call");
    }
    console.log(this);
    this.makeGetRequest();
  }

  render() { 
    return ( 
      <React.Fragment>
        <DisplayTable songs={this.state.songs} deleteSong={this.deleteSong}/>
      </React.Fragment>
     );
  }
}
 
export default App;