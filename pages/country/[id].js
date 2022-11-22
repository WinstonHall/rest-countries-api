import React from 'react';
import Link from "next/link";
import Router from "next/router";

const country = ({data}) => {
    // console.log(data);
    const {
        flags,
        name: {common, nativeName},
        population,
        tld,
        currencies,
        capital,
        region,
        subregion,
        languages,
        borders
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
        <div>
            <button onClick={() => Router.back()}>{"<--"}Back</button>
            <div>
                <img src={flags.svg} alt={'Missing image'}/>
            </div>
            <div>
                <h3>{common}</h3>
                <div>
                    <p>Native Name: {nativeName[Object.keys(nativeName)[0]].official}</p>
                    <p>Population: {population}</p>
                    <p>Region: {region}</p>
                    <p>Sub Region: {subregion}</p>
                    <p>Capital: {capital[0]}</p>
                    <p>Top Level Domain: {tld[0]}</p>
                    <p>Currencies: {currencies[Object.keys(currencies)[0]].name}</p>
                    <p>Languages: {languagesString(languages)}</p>

                </div>
                <div>
                    <p>Border Countries:</p>
                    <div>
                        {borders.map((border, index) => <Link href={`/country/${border}?byCode=1`}
                                                              key={index}>{border}</Link>)}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default country;

//Back Button to Home Page
//Flag -
//Name -
//NativeName -
//Population -
//Region -
//Sub Region -
//Capital -
//Top Level Domain -
//Currencies -
//Languages -
//Border Countries
//Border Countries are links to those countries pages

export async function getServerSideProps(context) {
    const id = context.params.id;
    const code = context.query.byCode;
    console.log(`Code ${code}`)
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
    console.log(`Data`)
    console.log(data)
    return {
        props: {
            data
        }
    }
}

