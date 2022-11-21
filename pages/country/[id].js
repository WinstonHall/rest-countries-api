import React from 'react';

const country = ({data}) => {
    console.log(data);
    return (
        <div>

        </div>
    );
};

export default country;

export async function getServerSideProps(context) {
    const id = context.params.id;

    const response = await fetch(`https://restcountries.com/v3.1/name/${id}`);
    //?fields=name,capital,subregion,languages,tld,flags,population,currencies,borders
    const parsedResponse = await response.json();

    return {
        props: {
            data: parsedResponse
        }
    }
}

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