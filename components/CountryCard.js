import React from 'react';

const CountryCard = ({countryData}) => {
    console.log(countryData)
    const {name, capital, region, flags, population} = countryData;
    return (
        <div>
            <img src={flags.svg} alt={"Image Missing"}/>
            <p>{name.common}</p>
            <p>{population}</p>
            <p>{region}</p>
            <p>{capital[0]}</p>
        </div>
    );
};

export default CountryCard;

// Name Population Region Capital