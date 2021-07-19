import './App.css';
import React, { Component } from 'react';
import DisplayTable from './Components/DisplayTable/displayTable';
import axios from 'axios';
import CreateSongForm from './Components/CreateSongForm/createSongForm';
import SearchBar from './Components/SearchBar/searchBar';

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

  displayTable = (currentSongArray) => {
    this.setState({
      songs: currentSongArray
    })
  }

  makeGetRequest = async () => {
    console.log(this);
    try{
      let response = await axios.get('http://127.0.0.1:8000/music/')
      let allSongs = response.data
      this.displayTable(allSongs);
    }
    catch (ex) {
      console.log("error in API Call");
    }
  }

  filterSong = (criteria) => {
    let temp = this.state.songs
    let filteredSongsArray = []
    filteredSongsArray = temp.filter(song => song.title === criteria)
    this.displayTable(filteredSongsArray);
    console.log(this);
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

  addNewSong = async newSong => {
    try{
      let response = await axios.post('http://127.0.0.1:8000/music/', newSong)
      console.log(response.data);
    }
    catch (err) {
      console.error(err);
    }
    this.makeGetRequest();
  }

  render() { 
    return ( 
      <React.Fragment>
        <DisplayTable songs={this.state.songs} deleteSong={this.deleteSong} />
        <CreateSongForm addNewSong={this.addNewSong} />
        <SearchBar filterSong={this.filterSong} />
      </React.Fragment>
     );
  }
}
 
export default App;

/*
 */