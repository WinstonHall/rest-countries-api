import React from 'react';

const SearchBar = ({value, filterCountries}) => {
    const handleOnChange = (e) => {
        filterCountries('searchBarInput', e.target.value)
    }
    return (
        <label htmlFor={'search-bar'}>
            <input
                placeholder={'Search for a country'}
                type={"text"}
                value={value}
                onChange={(e) => handleOnChange(e)}
                name={'search-bar'}
                id={'search-bar'}
            />
        </label>
    );
};

export default SearchBar;