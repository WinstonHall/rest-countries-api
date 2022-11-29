import React from 'react';
import styles from "../styles/CountryCardsContainer.module.css"

const CountryCardsContainer = ({children}) => {
    return (
        <div className={styles.country_cards_container}>
            {children}
        </div>
    );
};

export default CountryCardsContainer;