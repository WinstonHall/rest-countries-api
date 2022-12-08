import '../styles/globals.css'
import HeadBar from "../components/HeadBar";
import {createContext, useState} from "react";

export const Ctx = createContext(null)

function MyApp({Component, pageProps}) {
    const [darkMode, setDarkMode] = useState(true);
    return <>
        <Ctx.Provider value={{darkMode: darkMode, setDarkMode: setDarkMode}}>
            <HeadBar/>
            <Component {...pageProps} />
        </Ctx.Provider>
    </>
}

export default MyApp
