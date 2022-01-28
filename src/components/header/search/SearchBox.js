import React from 'react';


const SearchBox = ({ searchChange }) => {
    return (
        <div>
            <input 
                className = 'ma4 pa3 ba b--green bg-lightest-blue br2 w-third'
                type = 'search' 
                placeholder = 'Search robot friends...'
                onChange = {searchChange} />
        </div>
    );
}

export default SearchBox;
