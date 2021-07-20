import './App.css';
import React, { Component } from 'react';
import DisplayTable from './Components/DisplayTable/displayTable';
import axios from 'axios';
import CreateSongForm from './Components/CreateSongForm/createSongForm';
import SearchBar from './Components/SearchBar/searchBar';
import Introduction from './Components/Introduction/introduction';
import Footer from './Components/Footer/footer';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allSongs: [],
      currentSongs: []
    }
    this.currentCriteria = '';
  }

  componentDidMount(){
    this.makeGetRequest();
  }

  displayTable = (currentSongArray) => {
    console.log(this.state.allSongs); // All the songs in our DB
    let backToAllSongs = this.state.allSongs;
    if (this.currentCriteria === '') { // If the criteria is blank...
      this.setState({
        currentSongs: backToAllSongs // Back to all the songs.
      })
    }
    else {
      this.setState({
        currentSongs: currentSongArray // Else, go to the current songs list.
      })
    }
  }

  makeGetRequest = async () => {
    console.log(this);
    try{
      let response = await axios.get('http://127.0.0.1:8000/music/')
      let completeListOfSongs = response.data
      this.setState({
        allSongs: completeListOfSongs
      })
      this.displayTable(completeListOfSongs);
    }
    catch (ex) {
      console.log("error in API Call");
    }
  }

  filterSong = (criteria) => {
    let temp = this.state.allSongs
    this.currentCriteria = criteria.toLowerCase();
    let filteredSongsArray = []
    filteredSongsArray = temp.filter(song => (song.title.toLowerCase().includes(this.currentCriteria)) || (song.genre.toLowerCase().includes(this.currentCriteria)) || (song.artist.toLowerCase().includes(this.currentCriteria)) || (song.album.toLowerCase().includes(this.currentCriteria)) || song.release_date.includes(this.currentCriteria))
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
      <div className="container-fluid">
        
        <div className="row row-cols-1 row-cols-sm-1 row-cols-md-1 row-cols-lg-1 p-3">
          <SearchBar filterSong={this.filterSong} />
        </div>

        <div className="row row-cols-1 row-cols-sm-1 row-cols-md-1 row-cols-lg-1 p-3">
          <Introduction />
        </div>
        
        <div className="row justify-content-md-center p-3">
          <DisplayTable songs={this.state.currentSongs} deleteSong={this.deleteSong} />
         
          <CreateSongForm addNewSong={this.addNewSong} />
        </div>

        <div className="row justify-content-md-center p-2">
          <Footer />
        </div>
        
      </div>
     );
  }
}
 
export default App;

/*
 */