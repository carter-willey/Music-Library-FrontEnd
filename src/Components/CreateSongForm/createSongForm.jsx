import React, { Component } from 'react';

class CreateSongForm extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      title: "",
      artist: "",
      genre: "",
      album: "",
      release_date: "",
     }
  }

  handleChange = (event) =>{
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) =>{
    event.preventDefault();
    this.props.addNewSong(this.state)
  }

  render() { 
    return ( 
      <form onSubmit={this.handleSubmit} >
        <label>Song Title: </label>
        <input type="text" name="title" onChange={this.handleChange} value={this.state.title} />
        <label>Artist: </label>
        <input type="text" name="artist" onChange={this.handleChange} value={this.state.artist} />
        <label>Genre: </label>
        <input type="text" name="genre" onChange={this.handleChange} value={this.state.genre} />
        <label>Album Title: </label>
        <input type="text" name="album" onChange={this.handleChange} value={this.state.album} />
        <label>Song Release Date: </label>
        <input type="date" name="release_date" onChange={this.handleChange} value={this.state.release_date} />
        <button submit="submit">Add Song</button>
      </form>
     );
  }
}
 
export default CreateSongForm;