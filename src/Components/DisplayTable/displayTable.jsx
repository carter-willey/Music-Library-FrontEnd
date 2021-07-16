import React from 'react';
import './displayTable.css'

const DisplayTable = (props) => {
  return ( 
    <table>
        <thead>
          <tr>
            <th>Head</th>
          </tr>
        </thead>
        <tbody>
          {props.songs.map((song) => {
            return(
              <tr key={song.id}>
                <td>{song.title}</td> 
                <td>{song.artist}</td>
                <td>{song.album}</td>
                <td>{song.release_date}</td>
                <td><button type="button" onClick={() => props.deleteSong(song.id) } className="btn btn-primary">Delete</button></td>
              </tr>
            )
          })}
        </tbody>
    </table>
   );
}
 
export default DisplayTable;