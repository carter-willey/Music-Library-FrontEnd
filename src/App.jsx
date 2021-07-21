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

  componentDidMount = () => {
    /**
     * Best place to make API request. As soon as the page is rendered, this will run.
     */
    this.makeGetRequest();
  }

  displayTable = (currentSongArray) => {
    /**
     * Takes in songs array and decides whether the current songs should be updated to show
     * a filtered list of songs or a complete list of songs, based off of the search criteria
     * in the constructor variable this.currentCriteria.
     */
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
    /**
     * This anonymous/asynchronous function is requesting data from the backend
     * server to get all the songs in the current list of songs contained inside
     * of the server. The setState is what makes the render method rerun, 
     * allowing for new data to populate onto the screen because of the change 
     * of state.
     */
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
    /**
     * This will be working alongside the SearchBar component to return a list of 
     * songs that are pertinent to the (criteria) being brought in from the SearchBar
     * component. After filtering through the songs, a an array of new songs will be
     * found and displayed on the table via this.displayTable(filteredSongsArray).
     */
    let temp = this.state.allSongs
    this.currentCriteria = criteria.toLowerCase();
    let filteredSongsArray = []
    filteredSongsArray = temp.filter(song => (song.title.toLowerCase().includes(this.currentCriteria)) || (song.genre.toLowerCase().includes(this.currentCriteria)) || (song.artist.toLowerCase().includes(this.currentCriteria)) || (song.album.toLowerCase().includes(this.currentCriteria)) || song.release_date.includes(this.currentCriteria))
    this.displayTable(filteredSongsArray);
    console.log(this);
  }

  deleteSong = async number => {
    /**
     * This method is working alongside the DisplayTable component to find a specific
     * song id (number), and then deleting it from the backend server. Upon deletion,
     * the data inside of the table will be rerendered via the this.makeGetRequest at the
     * end of the method (after the catch).
     */
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
    /**
     * This method is working alongside the CreateSongForm component to make a
     * post request to the backend server to create a new song and then populate 
     * it onto our current table that is displaying all the songs on the screen.
     */
    try{
      let response = await axios.post('http://127.0.0.1:8000/music/', newSong)
      console.log(response.data);
    }
    catch (err) {
      console.error(err);
    }
    this.makeGetRequest();
  }

  updateSong = async song => {
    /**
     * This method is going to work alongside DisplayTable and UpdateModal components to update 
     * a specific song in our database and current songs state inside of App.jsx.
     */
    try {
      let response = await axios.put('http://127.0.0.1:8000/music/' + song.id, 
      {
        "title": `${song.title}`,
        "artist": `${song.artist}`,
        "genre": `${song.genre}`,
        "album": `${song.album}`,
        "release_date": `${song.release_date}`,
      })
      console.log(response.data); // contains: title, artist, genre, album, release_date for song to update
    }
    catch (err){
      console.log(err);
      alert(`Sorry for the inconvenience. Try submitting one again. ${err}`);
    }
    this.makeGetRequest();
  }

  render = () => { 
    /**
     * LifeCycle: The constructor runs first, then this render method, and finally componentDidMount will run.
     * After componentDidMount runs, then the new data is populated inside of here.
     */
    return ( 
      <div className="container-fluid">
        
        <div className="row row-cols-1 row-cols-sm-1 row-cols-md-1 row-cols-lg-1 p-3">
          <SearchBar filterSong={this.filterSong} />
        </div>

        <div className="row row-cols-1 row-cols-sm-1 row-cols-md-1 row-cols-lg-1 p-3">
          <Introduction />
        </div>
        
        <div className="row justify-content-md-center p-3">
          <DisplayTable songs={this.state.currentSongs} 
            deleteSong={this.deleteSong}
            updateSong={this.updateSong} />
         
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