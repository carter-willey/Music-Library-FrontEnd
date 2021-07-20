import React, { Component } from 'react';
import './displayTable.css'
import UpdateModal from '../UpdateModal/updateModal';
import axios from 'axios';

class DisplayTable extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      currentSong: {
        id: '',
        title: '',
        artist: '',
        genre: '',
        album: '',
        release_date: '' 
      },
      modalIsOpen: false
     }
  }

  setModalIsOpen = (song) => {
    this.setState({
      modalIsOpen: true,
      currentSong: song // song w/ id, artist, album, etc.
    })
  }

  updateSong = async song => {
    try{
      let response = await axios.put('http://127.0.0.1:8000/music/' + song.id, 
      {"title": `${song.title}`,
      "artist": `${song.artist}`,
      "genre": `${song.genre}`,
      "album": `${song.album}`,
      "release_date": `${song.release_date}`,})
      console.log(response.data);
    }
    catch (err){
      console.log(err);
    }
  }

  render() { 
    return ( 
        <React.Fragment>
    
          <div className="col-md-6">
            <table className="table table-striped table-light">
              <thead className="align-middle">
                <tr className="h6">
                  <th className="p-3">Song Title</th>
                  <th className="p-3">Artist</th>
                  <th className="p-3">Genre</th>
                  <th className="p-3">Album Title</th>
                  <th className="p-3">Release Date</th>
                  <th className="p-3"></th>
                  <th className="p-3"></th>
                </tr>
              </thead>
              <tbody>
                {this.props.songs.map((song) => {
                  return(
                    <React.Fragment>
                      <tr className="lead" key={song.id}>
                        <td>{song.title}</td> 
                        <td>{song.artist}</td>
                        <td>{song.genre}</td>
                        <td>{song.album}</td>
                        <td>{song.release_date}</td>
                        <td><button type="button" className="btn btn-primary" onClick={() => this.setModalIsOpen(song)}>Edit</button></td>
                        <td><button type="button" onClick={() => this.props.deleteSong(song.id) } className="btn btn-danger">Delete</button></td>
                      </tr>
                    </React.Fragment>
                  )
                })}
              </tbody>
            </table>
            <UpdateModal setModalIsOpen={this.state.modalIsOpen} song={this.state.currentSong} updateSong={this.updateSong} />
          </div>  
        </React.Fragment>
        
       );

  }
}
 
export default DisplayTable;
