import React, { Component } from 'react';
import Modal from 'react-modal'

Modal.setAppElement('#root')

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
      modalIsOpen: true
    }
  }

  handleChange = (event) =>{
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) =>{
    event.preventDefault();
    this.setState({
      id: this.props.song.id
    })
    this.props.updateSong(this.state)
  }

  setModalIsOpen = (currentStateOfModal) => {
    this.setState({
      modalIsOpen: currentStateOfModal
    })
  }
  // const [modalIsOpen, setModalIsOpen] = useState(false);
  render() {
    return(
      <React.Fragment>
        <div className="App">
          <Modal
            isOpen={this.props.setModalIsOpen} // true if open, false, if closed
            onRequestClose={() => this.setModalIsOpen(false)}
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
              <h1>Make Changes Here</h1>
              {this.componentDidMount}
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
                <button className="btn btn-primary" submit="submit" onClick={() => this.setModalIsOpen(false)}>Update</button>
              </form>
              <button className="btn btn-danger" onClick={() => this.setModalIsOpen(false)}>Close</button>
            </Modal>
          </div>
        </React.Fragment>
    );
  }
  
}
 
export default UpdateModal;