import React from 'react';
import styles from "./start.module.css";
interface IStart {
    click: () => void;
}

export const Farming_btn : React.FC<IStart> = ({click}: IStart) => {
  return (
    <div className={styles.button} onClick={() => click()}>START FARMING</div>
  )
}
