import React from 'react';
import styles from "../styles/FilterDropDown.module.css"

const FilterDropdown = ({value, setValue}) => {
    const handleOnChange = (e) => {
        setValue(e.target.value)
    }
    return (
        <label htmlFor={'filter-dropdown'} className={styles.label}>
            <select className={styles.drop_down} name={'filter-dropdown'} id={'filter-dropdown'} value={value}
                    onChange={e => handleOnChange(e)}>
                <option value={''}>Filter By Region</option>
                <option value={'asia'}>Asia</option>
                <option value={'africa'}>Africa</option>
                <option value={'europe'}>Europe</option>
                <option value={'americas'}>America</option>
                <option value={'oceania'}>Oceania</option>
            </select>
        </label>
    );
};

export default FilterDropdown;