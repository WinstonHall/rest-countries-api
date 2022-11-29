import React from 'react';
import {BsFillMoonFill} from "react-icons/bs";
import styles from "../styles/HeadBar.module.css"

const HeadBar = () => {
    return (
        <div className={styles.container}>
            <h3>Where in the world?</h3>
            <button className={"dark-mode-button"} onClick={() => console.log("Button Pressed")}><BsFillMoonFill/> Dark
                Mode
            </button>
        </div>
    );
};

export default HeadBar;