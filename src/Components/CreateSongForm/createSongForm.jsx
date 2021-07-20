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
        <div className="col-md-6 bg-light">
          <form className="row g-3 align-items-center p-2" onSubmit={this.handleSubmit} >
            <label className="lead d-flex justify-content-center p-2">Song Title: </label>
              <input className="bg-light form-control form-control-lg" type="text" name="title" placeholder="Yellow Submarine" 
              onChange={this.handleChange} value={this.state.title} />
            <label className="lead d-flex justify-content-center p-2">Artist: </label>
              <input className="bg-light form-control form-control-lg" type="text" name="artist" placeholder="The Beatles" 
              onChange={this.handleChange} value={this.state.artist} />
            <label className="lead d-flex justify-content-center p-2">Genre: </label>
              <input className="bg-light form-control form-control-lg" type="text" name="genre" placeholder="Psychadelic Rock" 
              onChange={this.handleChange} value={this.state.genre} />
            <label className="lead d-flex justify-content-center p-2">Album Title: </label>
              <input className="bg-light form-control form-control-lg" type="text" name="album" placeholder="Yellow Submarine" 
              onChange={this.handleChange} value={this.state.album} />
            <label className="lead d-flex justify-content-center p-2">Song Release Date: </label>
              <input className="bg-light form-control form-control-lg" type="date" name="release_date" 
              onChange={this.handleChange} value={this.state.release_date} />
            <button className="lead btn btn-primary btn-lg" submit="submit">Add Song</button>
          </form>
        </div>
      </React.Fragment>
     );
  }
}
 
export default CreateSongForm;