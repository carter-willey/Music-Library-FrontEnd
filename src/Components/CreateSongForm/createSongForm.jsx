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

  handleChange = (event) => {
    /**
     * Changes the state of the specific variable inside of state, based off of the 
     * event.target.name. So inside of the form below, there are different properties 
     * that are attached to the tags. Two of the properties are "name" and "value". 
     * We use these to allow this.setState to properly change the state of each 
     * variable inside of state. This is due to the onChange property inside of 
     * the <input ... onChange...> tag property.  
     * */ 
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    /**
     * Once all the changes have been made in handleChange, the <input... onSubmit ...> 
     * is going to be sending these changes from the current state, back to the 
     * Parent component App method: this.props.addNewSong(song).
     */
    event.preventDefault();
    this.props.addNewSong(this.state)
  }

  render() { 
    /**
     * Populates a form that will be taking in information to create a new song. Uses 
     * this.handleChange and this.handleSubmit to allow these changes to occur inside
     * of the backend server.
     */
    return (
      <React.Fragment>
        <div className="col-md-6 bg-light">
          <form className="row g-3 align-items-center p-2 bg-light" onSubmit={this.handleSubmit} >
            <label className="lead d-flex justify-content-center p-2">Song Title</label>
              <input className="bg-light form-control form-control-lg" type="text" name="title" placeholder="Yellow Submarine" 
              onChange={this.handleChange} value={this.state.title} />
            <label className="lead d-flex justify-content-center p-2">Artist</label>
              <input className="bg-light form-control form-control-lg" type="text" name="artist" placeholder="The Beatles" 
              onChange={this.handleChange} value={this.state.artist} />
            <label className="lead d-flex justify-content-center p-2">Genre</label>
              <input className="bg-light form-control form-control-lg" type="text" name="genre" placeholder="Psychadelic Rock" 
              onChange={this.handleChange} value={this.state.genre} />
            <label className="lead d-flex justify-content-center p-2">Album Title</label>
              <input className="bg-light form-control form-control-lg" type="text" name="album" placeholder="Yellow Submarine" 
              onChange={this.handleChange} value={this.state.album} />
            <label className="lead d-flex justify-content-center p-2">Song Release Date</label>
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