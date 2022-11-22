import '../styles/globals.css'
import HeadBar from "../components/HeadBar";

function MyApp({Component, pageProps}) {
    return <>
        <HeadBar/>
        <Component {...pageProps} />
    </>
}

export default MyApp
