import React, { useState } from 'react'
import styles from './counter.module.css';

interface ICounter {
    amount: number,
    increase: () => void,
    reduce: () => void,
  }

export const Counter : React.FC<ICounter> = ({amount, reduce, increase}: ICounter) => {


  return (
    <div className={styles.section}>
        <div className={styles.minus} onClick={reduce}>-</div>
        <div className={styles.number}>{amount}</div>
        <div className={styles.plus} onClick={increase}>+</div>
    </div>
  )
}
