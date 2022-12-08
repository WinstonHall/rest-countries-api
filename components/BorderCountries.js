import styles from "../styles/BorderCountries.module.css";
import Link from "next/link";
import {useContext} from "react";
import {Ctx} from "../pages/_app";

const BorderCountries = ({data}) => {
    const {darkMode} = useContext(Ctx);
    if (!data.borders.length) return;
    return (
        <div className={styles.info_borders_links_container}>
            <p>Border Countries:</p>
            <div className={`${styles.info_borders_links} ${!darkMode ? styles.light : styles.dark}`}>
                {
                    data.borders.map((border, index) =>
                        <Link href={`/country/${border}?byCode=1`} key={index}>{border}</Link>
                    )
                }
            </div>
        </div>
    )
}

export default BorderCountries;