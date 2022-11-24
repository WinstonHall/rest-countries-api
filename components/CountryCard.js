import React from 'react';
import Link from "next/link";
import Image from "next/image";

const CountryCard = ({countryData}) => {
    const {name, capital, region, flags, population} = countryData;
    return (
        <div className={"country-card"}>
            <Link href={`/country/${name.common}`}>
                <div className={"flag"}>
                    <Image src={flags.svg} alt={"Image Missing"} fill style={{objectFit: 'cover',}}/>
                </div>
                <div className={"country-card-info"}>
                    <p>{name.common}</p>
                    <p>Population: <span>{population}</span></p>
                    <p>Region: <span>{region}</span></p>
                    <p>Capital: <span>{capital[0]}</span></p>
                </div>
            </Link>
        </div>
    );
};

export default CountryCard;