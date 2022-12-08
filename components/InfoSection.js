import React from 'react';
import styles from "../styles/InfoSection.module.css";


const InfoSection = ({data}) => {
    const {
        name: {nativeName},
        population,
        tld,
        currencies,
        capital,
        region,
        subregion,
        languages,
    } = data;

    const languagesString = (languages) => {
        const values = Object.values(languages);
        let newString = ''

        values.forEach((value, index) => {
            values.length - 1 === index
                ? newString += `${value}`
                : newString += `${value}, `
        });

        return newString
    };
    return (
        <div className={styles.container}>
            <div>
                <p>Native Name: <span>{nativeName[Object.keys(nativeName)[0]].official}</span></p>
                <p>Population: <span>{population}</span></p>
                <p>Region: <span>{region}</span></p>
                <p>Sub Region: <span>{subregion}</span></p>
                <p>Capital: <span>{capital[0]}</span></p>
            </div>
            <div>
                <p>Top Level Domain: <span>{tld[0]}</span></p>
                <p>Currencies: <span>{currencies[Object.keys(currencies)[0]].name}</span></p>
                <p>Languages: <span>{languagesString(languages)}</span></p>
            </div>
        </div>
    )
};


export default InfoSection;