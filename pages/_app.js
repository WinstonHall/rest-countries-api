import '../styles/globals.css'
import HeadBar from "../components/HeadBar";
import {Nunito} from '@next/font/google'
//TODO: See if next/font/google even works
//      if not then remove it and find a way to import the fonts you need.
const nunito = Nunito({subset: ['latin']})

function MyApp({Component, pageProps}) {
    return <>
        <main className={nunito.className}>
            <HeadBar/>
            <Component {...pageProps} /></main>
    </>
}

export default MyApp
