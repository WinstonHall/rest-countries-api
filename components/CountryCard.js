import React, {useContext} from 'react';
import Link from "next/link";
import styles from "../styles/CountryCard.module.css"
import Flag from "./Flag";
import {Ctx} from "../pages/_app";

const CountryCard = ({countryData}) => {
    const {name, capital, flags, region, population} = countryData;
    const {darkMode} = useContext(Ctx);
    return (
        <div className={`${styles.country_card} ${!darkMode ? styles.light : styles.dark}`}>
            <Link href={`/country/${name.common}`}>
                <Flag data={countryData} width={300} height={200}/>
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