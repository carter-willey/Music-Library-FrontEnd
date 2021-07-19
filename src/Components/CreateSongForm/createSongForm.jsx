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
      <React.Fragment>
        <div className="col-6 bg-secondary">
          <form className="row g-3 p-3" onSubmit={this.handleSubmit} >
            <label className="lead">Song Title: </label>
            <input type="text" name="title" placeholder="Yellow Submarine" onChange={this.handleChange} value={this.state.title} />
            <label className="lead">Artist: </label>
            <input type="text" name="artist" placeholder="The Beatles" onChange={this.handleChange} value={this.state.artist} />
            <label className="lead">Genre: </label>
            <input type="text" name="genre" placeholder="Psychadelic Rock" onChange={this.handleChange} value={this.state.genre} />
            <label className="lead">Album Title: </label>
            <input type="text" name="album" placeholder="Yellow Submarine" onChange={this.handleChange} value={this.state.album} />
            <label className="lead">Song Release Date: </label>
            <input type="date" name="release_date" onChange={this.handleChange} value={this.state.release_date} />
            <button className="lead" submit="submit">Add Song</button>
          </form>
        </div>
      </React.Fragment>
     );
  }
}
 
export default CreateSongForm;