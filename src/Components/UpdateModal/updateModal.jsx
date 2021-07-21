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
     * GrandParent component App method: this.props.updateSong(song). It's also 
     * passing data back to the Parent component DisplayTable method: 
     * this.props.updateModalStatus(true or false).
     */
    event.preventDefault();
    let currentId = this.props.song.id
    this.setState({
      id: currentId
    })
    let updatedSong = {
      id: this.state.id,
      title: this.state.title,
      artist: this.state.artist,
      album: this.state.album,
      genre: this.state.genre,
      release_date: this.state.release_date,
    }
    this.props.updateSong(updatedSong)
    this.props.updateModalStatus(this.state.modal);
  }

  isModalOpen = (checker) => {
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
    /**
     * Populates a modal that is going to be open whenever the user chooses Edit inside of DisplayTable
     * component. Once they click on Edit, the only way to get out of the modal is to either update the 
     * info inside of the current form, or close the modal. Passes information taken in from form back
     * to this.handleChange and this.handleSubmit to allow for changes to happen to our backend server.
     */
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
              <label className="lead d-flex justify-content-center p-2">Song</label>
                <input className="bg-light form-control form-control-lg" type="text" name="title" 
                onChange={this.handleChange} placeholder={this.props.song.title} value={this.state.title} />
              <label className="lead d-flex justify-content-center p-2">Artist</label>
                <input className="bg-light form-control form-control-lg" type="text" name="artist"  
                onChange={this.handleChange} placeholder={this.props.song.artist} value={this.state.artist} />
              <label className="lead d-flex justify-content-center p-2">Genre</label>
                <input className="bg-light form-control form-control-lg" type="text" name="genre"  
                onChange={this.handleChange} placeholder={this.props.song.genre} value={this.state.genre} />
              <label className="lead d-flex justify-content-center p-2">Album</label>
                <input className="bg-light form-control form-control-lg" type="text" name="album"  
                onChange={this.handleChange} placeholder={this.props.song.album} value={this.state.album} />
              <label className="lead d-flex justify-content-center p-2">Release Date</label>
                <input className="bg-light form-control form-control-lg" type="date" name="release_date" 
                onChange={this.handleChange} placeholder={this.props.song.release_date} value={this.state.release_date} />
              <button className="btn btn-primary" type="submit" onClick={() => this.isModalOpen(false)}>Update</button>
              <button className="btn btn-danger" onClick={() => this.isModalOpen(false)}>Close</button>
            </form>
          </Modal>
        </div>
      </React.Fragment>
    );
  }
}
 
export default UpdateModal;