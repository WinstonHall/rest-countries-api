import React, {useContext} from 'react';
import {HiOutlineMagnifyingGlass} from "react-icons/hi2";
import styles from '../styles/SearchBar.module.css'
import {Ctx} from "../pages/_app";

const SearchBar = ({value, setValue}) => {
    const {darkMode} = useContext(Ctx);
    const handleOnChange = (e) => {
        setValue(e.target.value)
    }
    return (
        <label htmlFor={'search-bar'} className={`${styles.label} ${!darkMode ? styles.light : styles.dark}`}>
            <HiOutlineMagnifyingGlass className={styles.search_icon}/>
            <input
                className={styles.input}
                placeholder={'Search for a country...'}
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