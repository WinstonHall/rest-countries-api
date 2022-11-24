import React from 'react';

const CountryCardsContainer = ({children}) => {
    return (
        <div className={"country-cards-container"}>
            {children}
        </div>
    );
};

export default CountryCardsContainer;