import React, { Component } from 'react';
import './search-box.component.css';

class SearchBox extends Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <input 
                className='search'
                type='search' 
                placeholder={this.props.placeholder}
                onChange={this.props.handleChange} 
            />
        );
    }
}

export default SearchBox;