import React, { Component } from 'react';
import './displayTable.css'
import UpdateModal from '../UpdateModal/updateModal';

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
        release_date: '',
        modalStatus: false 
      },
     }
  }

  setModalIsOpen = (song) => {
    /**
     * This will open the modal up and feed this.state.currentSong with song. It will also set the modalStatus to 
     * true in order to open up the modal.
     */
    this.setState({
      modalStatus: true, // modalIsOpen will be set to true upon clicking 'Edit' below
      currentSong: song // song w/ id, artist, album, etc.
    })
  }

  updateModalStatus = currenStatusOfModal => {
    /**
     * The status of modalStatus will change to false, thus closing the modal window and taking the user back
     * to the home screen created by App.jsx file.
     */
    this.setState({
      modalStatus: currenStatusOfModal
    })

  }

  render() { 
    /**
     * Renders a table of songs to with the ability to delete or edit them in a separate, UpdateModal component.
     */
    return ( 
        <React.Fragment>
          <div className="col-md-6">
            <table className="table table-striped table-light">
              <thead className="align-middle">
                {/* Table Header */}
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
                {/* Table Body */}
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
            {/* 
              Here, the modalStats and currentSong inside of DisplayTable state are being passed down to UpdateModal to manipulate.
              We're also passing down the updateModalStatus method in order to update the modal status to false once we're done 
              working with the data inside of UpdateModal child component.
            */}
            <UpdateModal modalStatus={this.state.modalStatus} 
              song={this.state.currentSong} 
              updateSong={this.props.updateSong}
              updateModalStatus={this.updateModalStatus} />
          </div>  
        </React.Fragment>
        
       );

  }
}
 
export default DisplayTable;
