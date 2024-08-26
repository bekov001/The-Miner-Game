import React from 'react'
import styles from './success.module.css';

interface IBoostStatus {
  block: string,
  type:string
}

export const BoostStatus : React.FC<IBoostStatus> = ({type, block}: IBoostStatus) => {
  if (type === "error"){
    return (
      <div className={styles.main}>
          <img src="images/error.png" width="30" height={30} style={{marginLeft: "10px"}}></img>
          <p className={styles.text_info}>Error - not enough tokens</p>
      </div>
    )
  } else if (block === "auto_claim") {
    return (
      <div className={styles.main_success}>
          <img src="images/success.png" width="35" height={35} style={{marginLeft: "10px"}}></img>
          <p className={styles.text_info}>Succesfully turned Auto Claim on</p>
      </div>
    )
  }
  else {
    return (
      <div className={styles.main_success}>
          <img src="images/success.png" width="35" height={35} style={{marginLeft: "10px"}}></img>
          <p className={styles.text_info}>Succesfully upgraded {block} for new level</p>
      </div>
    )
    
  }
 
}
