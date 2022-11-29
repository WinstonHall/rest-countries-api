import React from 'react';
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/CountryCard.module.css"

const CountryCard = ({countryData}) => {
    const {name, capital, region, flags, population} = countryData;
    return (
        <div className={styles.country_card}>
            <Link href={`/country/${name.common}`}>
                <div className={styles.flag_container}>
                    <Image src={flags.svg} alt={"Image Missing"} fill className={styles.flag}/>
                </div>
                <div className={styles.country_card_info}>
                    <h3>{name.common}</h3>
                    <p>Population: <span>{population}</span></p>
                    <p>Region: <span>{region}</span></p>
                    <p>Capital: <span>{capital[0]}</span></p>
                </div>
            </Link>
        </div>
    );
};

export default CountryCard;