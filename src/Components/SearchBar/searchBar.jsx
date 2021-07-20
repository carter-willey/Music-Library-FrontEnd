import React, { Component } from 'react';

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            searchCriteria: ''
        }
    }

    handleChange = (event) =>{
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) =>{
    event.preventDefault();
    this.props.filterSong(this.state.searchCriteria);
    }

    render() { 
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