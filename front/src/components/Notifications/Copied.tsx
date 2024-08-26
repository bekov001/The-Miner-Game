import React from 'react'
import styles from "./copied.module.css"
import { numericFormatter } from 'react-number-format'


export default function Copied() {
  return (
    <div className={styles.back}>
        <div className={styles.row}>
            <img style={{marginLeft:'5px', marginRight: "18px"}}src="images/right.png" width={18}/>
            <p>Referral link is copied!</p>
        </div>
    </div>
  )
}
