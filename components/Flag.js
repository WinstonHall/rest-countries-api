import React from 'react';
import Image from "next/image";
import styles from "../styles/Flag.module.css";

const Flag = ({data, width, height}) => {
    return (
        <div className={styles.flag_container}>
            <Image src={data.flags.svg}
                   alt={"Image Missing"}
                   width={!width ? 300 : width}
                   height={!height ? 200 : height}
                   className={styles.flag}
            />
        </div>
    );
};

export default Flag;