import React from 'react';
import './displayTable.css'

const DisplayTable = (props) => {
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
            </tr>
          </thead>
          <tbody>
            {props.songs.map((song) => {
              return(
                <tr className="lead" key={song.id}>
                  <td>{song.title}</td> 
                  <td>{song.artist}</td>
                  <td>{song.genre}</td>
                  <td>{song.album}</td>
                  <td>{song.release_date}</td>
                  <td><button type="button" onClick={() => props.deleteSong(song.id) } className="btn btn-danger">Delete</button></td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </React.Fragment>
   );
}
 
export default DisplayTable;