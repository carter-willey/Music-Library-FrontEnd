import React, {useState} from 'react';
import Modal from 'react-modal'


Modal.setAppElement('#root')

const UpdateModal = (props) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [songToEdit, setSongToEdit] = useState([]);
  return ( 
    <div>
                <div className="App">
                    <Modal
                      isOpen={props.setModalIsOpen}
                      onRequestClose={() => setModalIsOpen(false)}
                      style={
                        {
                          overlay: {
                            backgroundColor: 'grey'
                          },
                          content: {
                            position: 'absolute',
                            top: '40px',
                            left: '40px',
                            right: '40px',
                            bottom: '40px',
                            border: '1px solid #ccc',
                            background: '#fff',
                            overflow: 'auto',
                            WebkitOverflowScrolling: 'touch',
                            borderRadius: '4px',
                            outline: 'none',
                            padding: '20px'
                          }
                        }
                      }>
                  
                        <button className="btn btn-danger" onClick={() => setModalIsOpen(false)}>Close</button>
                      <button className="btn btn-primary" onClick={() => setModalIsOpen(false)}>Update</button>
        
                      
                      
                    </Modal>
                  </div>
                      </div>
   );
}
 
export default UpdateModal;

/**
 * <div className="col-md-6 bg-light">
                        <form className="row g-3 align-items-center p-2" >
                          <label className="lead d-flex justify-content-center p-2">Song Title: </label>
                            <input className="bg-light form-control form-control-lg" type="text" name="title" placeholder="{props.song.title}" 
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
                          
                        </form>
 */