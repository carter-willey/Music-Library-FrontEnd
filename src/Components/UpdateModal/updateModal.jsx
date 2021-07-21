import React, { Component } from 'react';
import Modal from 'react-modal'

Modal.setAppElement('#root');

class UpdateModal extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      id: '',
      title: '',
      artist: '',
      album: '',
      genre: '',
      release_date: '',
      modal: false
    }
  }

  componentDidMount = () => {
    this.setState({
      id: this.props.song.id,
      title: this.state.title,
      artist: this.state.artist,
      album: this.state.album,
      genre: this.state.genre,
      release_date: this.state.release_date
    })
  }

  handleChange = (event) =>{
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) =>{
    event.preventDefault();
    this.componentDidMount();
    this.setState({
      title: this.state.title,
      artist: this.state.artist,
      album: this.state.album,
      genre: this.state.genre,
      release_date: this.state.release_date,
      modal: false
    })
    this.props.updateSong(this.state)
    this.handleUpdate();
  }

  handleUpdate = () => {
    this.props.updateModalStatus(this.state.modal);
  }

  isModalOpen = (checker) =>{
    /**
     * Checks whether the user has pressed on either "Close" or "Update" inside of render method. Updates
     * the status of the whether the modal is visible via a prop passed down from DisplayTable.jsx called
     * this.props.updateModalStatus(true or false).
     */
    this.setState({
      modal: checker
    })
    // Returns the current state of the modalStatus inside of UpdateModal class. Not to be confused with 
    // modalStatus taken in from props.
    return this.state.modal;
  }

  // const [modalIsOpen, setModalIsOpen] = useState(false);
  render() {
    return(
      <React.Fragment>
        <div className="App">
          <Modal
            isOpen={this.props.modalStatus} // True if modal open, False, if closed, brought in from DisplayTable.
            onRequestClose={() => this.isModalOpen(false)} // Dictates whether a person presses close or update.
            /* style attribute start */
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
                  padding: '2rem'
                }
              }
            }>
            {/* style attribute end */}  
            <h1>Make Changes Here</h1>
            <form className="row g-3 align-items-center p-2" onSubmit={this.handleSubmit} >
              <label className="lead d-flex justify-content-center p-2">Song Title: </label>
                <input className="bg-light form-control form-control-lg" type="text" name="title" 
                onChange={this.handleChange} placeholder={this.props.song.title} value={this.state.title} />
              <label className="lead d-flex justify-content-center p-2">Artist: </label>
                <input className="bg-light form-control form-control-lg" type="text" name="artist"  
                onChange={this.handleChange} placeholder={this.props.song.artist} value={this.state.artist} />
              <label className="lead d-flex justify-content-center p-2">Genre: </label>
                <input className="bg-light form-control form-control-lg" type="text" name="genre"  
                onChange={this.handleChange} placeholder={this.props.song.genre} value={this.state.genre} />
              <label className="lead d-flex justify-content-center p-2">Album Title: </label>
                <input className="bg-light form-control form-control-lg" type="text" name="album"  
                onChange={this.handleChange} placeholder={this.props.song.album} value={this.state.album} />
              <label className="lead d-flex justify-content-center p-2">Song Release Date: </label>
                <input className="bg-light form-control form-control-lg" type="date" name="release_date" 
                onChange={this.handleChange} placeholder={this.props.song.release_date} value={this.state.release_date} />
              <button className="btn btn-primary" onClick={() => this.isModalOpen(false)} submit="submit">Update</button>
              <button className="btn btn-danger" onClick={() => this.isModalOpen(false)}>Close</button>
            </form>
          </Modal>
        </div>
      </React.Fragment>
    );
  }
}
 
export default UpdateModal;