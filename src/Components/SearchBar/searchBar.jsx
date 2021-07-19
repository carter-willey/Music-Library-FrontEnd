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
            <form onSubmit={this.handleSubmit} class="d-flex">
                <input name='searchCriteria' onChange={this.handleChange} value={this.state.searchCriteria} class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                <button class="btn btn-outline-success" type="submit">Search</button>
            </form>
        </React.Fragment>
        );
    }
}
 
export default SearchBar;