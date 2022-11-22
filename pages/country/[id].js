import React from 'react';

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
    return (
        <div>
            <button>{"<--"}Back</button>
            <div>
                <img src={flags.svg} alt={'Missing image'}/>
            </div>
            <div>
                <h3>{common}</h3>
                <div>
                    <p>Native Name: {nativeName.ara.official}</p>
                    <p>Population: {population}</p>
                    <p>Region: {region}</p>
                    <p>Sub Region: {subregion}</p>
                    <p>Capital: {capital[0]}</p>
                    <p>Top Level Domain: {tld[0]}</p>
                    <p>Currencies: {currencies.MRU.name}</p>
                    <p>Languages: {languages.ara}</p>
                </div>
                <div>
                    <p>Border Countries:</p>
                    <div>
                        {borders.map((border, index) => <button key={index}>{border}</button>)}
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

