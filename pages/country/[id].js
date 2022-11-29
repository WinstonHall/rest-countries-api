import React from 'react';
import Link from "next/link";
import Router from "next/router";
import Image from "next/image";
import styles from '../../styles/CountryPage.module.css'

const country = ({data}) => {
    return (
        <div className={styles.parent}>
            <BackButton/>
            <div className={styles.container}>
                <FlagContainer data={data}/>
                <div className={styles.info_container}>
                    <h2>{data.name.common}</h2>
                    <InfoSection data={data}/>
                    <div className={styles.info_borders_links_container}>
                        <p>Border Countries:</p>
                        <BorderCountriesButtons data={data}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

const BackButton = () => {
    return <button className={styles.button} onClick={() => Router.back()}>{"<--"}Back</button>
}

const FlagContainer = ({data}) => {
    return (
        <div className={styles.flag}>
            <Image src={data.flags.svg} alt={"Image Missing"} fill style={{objectFit: 'contain',}}/>
        </div>
    )
}

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
        <div className={styles.info_section}>
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

const BorderCountriesButtons = ({data}) => {
    return (
        <div className={styles.info_borders_links}>
            {data.borders.map((border, index) => <Link href={`/country/${border}?byCode=1`}
                                                       key={index}>{border}</Link>)}
        </div>
    )
}

export default country;

export async function getServerSideProps(context) {
    const id = context.params.id;
    const code = context.query.byCode;
    let data;

    //Search for country by code route if code is 1 else by name
    if (parseInt(code) === 1) {
        const response = await fetch(`https://restcountries.com/v3.1/alpha/${id}?fields=name,capital,subregion,languages,tld,flags,population,currencies,borders,region`);

        data = await response.json();
    } else {
        const response = await fetch(`https://restcountries.com/v3.1/name/${id}?fields=name,capital,subregion,languages,tld,flags,population,currencies,borders,region`);

        //This route returns an array with an object
        data = await response.json().then(results => results[0]);
    }

    return {
        props: {
            data
        }
    }
}

