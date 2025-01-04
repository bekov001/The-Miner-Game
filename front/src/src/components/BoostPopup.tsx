import React from 'react'
import styles from './boost_popup.module.css';

interface BoostPopupInterface {
    type: string
    cancel: () => void,
    upgrade: (block: string) => void,
  }

export const BoostPopup: React.FC<BoostPopupInterface> = ({cancel, type, upgrade})  => {

    function sell(){
      if (type != ""){
        upgrade(type)
      }
      cancel()
        
    }
    if (type === ""){
      return (
        <div>
        <div className={styles.filter} onClick={() => cancel()}></div>
        <div className={styles.main}>
            <div className={styles.section}>
            <h1 style={{color: "white"}}>Coming soon...</h1>
            <img src={"images/pickaxe.webp"}  alt="logo"  width="100px" height="100px"/>
            <button className={styles.upgrade_btn} onClick={() => sell()}>WAIT</button>
            </div>
        
    </div>
    </div>
      )
    }

    return (
      <div>
      <div className={styles.filter} onClick={() => cancel()}></div>
      <div className={styles.main}>
          <div className={styles.section}>
          <h1 style={{color: "white"}}>Confirm?</h1>
          <img src={type === 'pickaxe' ? "images/pickaxe.webp" : type==='luck'? "images/bullseye.png" : type==='auto_claim' ? 'images/robot.png' : ''}  alt="logo"  width="100px" height="100px"/>
          <p>{type === 'auto_claim' ? 'No need to claim drop every time' : ''}</p>
          <button className={styles.upgrade_btn} onClick={() => sell()}>{type === 'auto_claim' ? 'TURN ON' : 'UPGRADE'}</button>
          </div>
      
  </div>
  </div>
    )
 
}
