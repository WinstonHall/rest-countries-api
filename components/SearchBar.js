import React from 'react';

const SearchBar = ({value, setValue}) => {
    const handleOnChange = (e) => {
        setValue(e.target.value)
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