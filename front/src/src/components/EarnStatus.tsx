import React from 'react'
import styles from './success.module.css';

interface IEarnStatus {
  type:string
}

export const EarnStatus : React.FC<IEarnStatus> = ({type}: IEarnStatus) => {
  if (type === "error"){
    return (
      <div className={styles.main}>
          <img src="images/error.png" width="30" height={30} style={{marginLeft: "10px"}}></img>
          <p className={styles.text_info}>Task was not completed</p>
      </div>
    )
  } 
  else {
    return (
      <div className={styles.main_success}>
          <img src="images/success.png" width="35" height={35} style={{marginLeft: "10px"}}></img>
          <p className={styles.text_info}>Task completed</p>
      </div>
    )
    
  }
 
}
