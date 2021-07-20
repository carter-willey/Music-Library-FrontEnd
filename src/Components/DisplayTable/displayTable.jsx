import React, { Component } from 'react';
import './displayTable.css'
import UpdateModal from '../UpdateModal/updateModal';
import Modal from 'react-modal';

class DisplayTable extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      currentSong: [],
      modalIsOpen: false
     }
  }

setModalIsOpen = () => {
  this.setState({
    modalIsOpen: true
  })
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
                      <td><button type="button" className="btn btn-primary" onClick={() => this.setModalIsOpen()}>Edit</button></td>
                      <td><button type="button" onClick={() => this.props.deleteSong(song.id) } className="btn btn-danger">Delete</button></td>
                    </tr>
                    
                      </React.Fragment>
                  )
                })}
              </tbody>
            </table>
            
          </div>
          <UpdateModal setModalIsOpen={this.state.modalIsOpen} />  
        </React.Fragment>
        
       );

  }
}
 
export default DisplayTable;
