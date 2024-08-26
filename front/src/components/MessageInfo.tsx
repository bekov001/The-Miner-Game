import React from 'react'
import styles from './success.module.css';

interface MessageInfoInterface {
  block: string,
  type:string
}

export const MessageInfo : React.FC<MessageInfoInterface> = ({type, block}: MessageInfoInterface) => {
  if (type === "error"){
    return (
      <div className={styles.main}>
          <img src="images/error.png" width="35" height={35} style={{marginLeft: "10px"}}></img>
          <p className={styles.text_info}>Error - not enough {block}</p>
      </div>
    )
  } else {
    return (
      <div className={styles.main_success}>
          <img src="images/success.png" width="35" height={35} style={{marginLeft: "10px"}}></img>
          <p className={styles.text_info}>Succesfully swapped {block}</p>
      </div>
    )
    
  }
 
}
