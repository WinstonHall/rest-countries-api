import React from 'react';
import Link from "next/link";

const CountryCard = ({countryData}) => {
    const {name, capital, region, flags, population} = countryData;
    return (
        <div>
            <Link href={`/country/${name.common}`}>
                <img src={flags.svg} alt={"Image Missing"}/>
                <p>{name.common}</p>
                <p>{population}</p>
                <p>{region}</p>
                <p>{capital[0]}</p>
            </Link>
        </div>
    );
};

export default CountryCard;

// Name Population Region Capital