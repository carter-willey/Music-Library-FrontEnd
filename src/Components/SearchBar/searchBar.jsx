import React, { Component } from 'react';

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            searchCriteria: ''
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
         * Parent component App method: this.props.filterSong(searchCriteria).
         */
        event.preventDefault();
        this.props.filterSong(this.state.searchCriteria);
    }

    render() { 
        /**
         * Populates a search bar for users to look for a specific song, or for songs
         * with characteristics that reflect what they type in. A user will come back 
         * to the list of all songs in the backend server by just typing nothing 
         * in the search bar and clicking on "Search".
         */
        return ( 
        <React.Fragment>
            <div className="col-md-8"><h1 className="display-5 p-2">Music Library</h1></div>
            <div className="col-md-4">
                <form onSubmit={this.handleSubmit} class="d-flex p-3">
                    <input name='searchCriteria' onChange={this.handleChange} 
                    value={this.state.searchCriteria} className="form-control form-control-lg me-2" 
                    type="search" placeholder="Search" aria-label="Search" />
                    <button class="btn btn-outline-success" type="submit">Search</button>
                </form>
            </div>
            <div className="col"></div>
        </React.Fragment>
        );
    }
}
 
export default SearchBar;