import React, {useContext} from 'react';
import styles from "../styles/BackButton.module.css";
import Router from "next/router";
import {Ctx} from "../pages/_app";

const BackButton = () => {
    const {darkMode} = useContext(Ctx);
    return (
        <button className={`${styles.back_button} ${!darkMode ? styles.light : styles.dark}`}
                onClick={() => Router.back()}>{"<--"}Back</button>
    );
};

export default BackButton;