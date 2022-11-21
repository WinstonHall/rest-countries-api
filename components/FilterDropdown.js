import React from 'react';

const FilterDropdown = ({value, setValue}) => {
    const handleOnChange = (e) => {
        setValue(e.target.value)
    }
    return (
        <label htmlFor={'filter-dropdown'}>
            <select name={'filter-dropdown'} id={'filter-dropdown'} value={value}
                    onChange={e => handleOnChange(e)}>
                <option value={''}>Filter By Region</option>
                <option value={'asia'}>Asia</option>
                <option value={'africa'}>Africa</option>
                <option value={'europe'}>Europe</option>
                <option value={'north-america'}>North America</option>
                <option value={'south-america'}>South America</option>
                <option value={'oceania'}>Oceania</option>
            </select>
        </label>
    );
};

export default FilterDropdown;