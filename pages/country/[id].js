import React, {useContext} from 'react';
import styles from '../../styles/CountryPage.module.css'
import BackButton from "../../components/BackButton";
import InfoSection from "../../components/InfoSection";
import BorderCountries from "../../components/BorderCountries";
import {Ctx} from "../_app";

const Country = ({data}) => {
    const {darkMode} = useContext(Ctx)
    return (
        <div style={{minHeight: '100vh'}} className={`${!darkMode ? styles.light : styles.dark}`}>
            <div className={styles.parent}>
                <BackButton/>
                <div className={styles.info_container}>
                    <img src={data.flags.svg} alt={`${data.name.common}'s flag`} className={styles.info_flag}/>
                    <div className={styles.info}>
                        <h3>{data.name.common}</h3>
                        <InfoSection data={data}/>
                        <BorderCountries data={data}/>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Country;

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

