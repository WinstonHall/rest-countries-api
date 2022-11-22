import React from 'react';
import Link from "next/link";

const country = ({data}) => {
    console.log(data);
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
    } = data[0];

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
            <button>{"<--"}Back</button>
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
                        {borders.map((border, index) => <Link href={`/country/${border}`}
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

    const response = await fetch(`https://restcountries.com/v3.1/name/${id}?fields=name,capital,subregion,languages,tld,flags,population,currencies,borders,region`);
    //?fields=name,capital,subregion,languages,tld,flags,population,currencies,borders
    const parsedResponse = await response.json();

    return {
        props: {
            data: parsedResponse
        }
    }
}

