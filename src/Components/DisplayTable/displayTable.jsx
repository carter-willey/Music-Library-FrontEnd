import React from 'react';
import './displayTable.css'

const DisplayTable = (props) => {
  return (
    <React.Fragment>
      <div className="col-6">
        <table className="table table-striped">
          <thead>
            <tr className="h4">
              <th>Song Title</th>
              <th>Artist</th>
              <th>Genre</th>
              <th>Album Title</th>
              <th>Release Date</th>
              <th></th>
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
                  <td><button type="button" onClick={() => props.deleteSong(song.id) } className="btn btn-primary">Delete</button></td>
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