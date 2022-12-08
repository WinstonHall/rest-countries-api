import React, {useContext} from 'react';
import {BsFillMoonFill} from "react-icons/bs";
import styles from "../styles/HeadBar.module.css"
import {Ctx} from "../pages/_app";

const HeadBar = () => {
    const {darkMode, setDarkMode} = useContext(Ctx);
    console.log(darkMode);
    return (
        <div className={`${styles.parent} ${!darkMode ? styles.light_mode : styles.dark_mode}`}>
            <span className={styles.container}>
            <h4>Where in the world?</h4>
            <button className={styles.dark_mode_button}
                    onClick={() => setDarkMode(!darkMode)}>
                <BsFillMoonFill/> Dark Mode
            </button>
        </span>
        </div>
    );
};

export default HeadBar;