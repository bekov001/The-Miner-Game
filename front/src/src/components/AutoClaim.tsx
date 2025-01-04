import React, { useState } from 'react'
import { Grid } from '@mui/material'

import { BackButton } from '@vkruglikov/react-telegram-web-app';
import { useNavigate } from "react-router-dom";
import { BoostPopup } from './BoostPopup';
import { BoostStatus } from './BoostStatus';
import { NumericFormat, numericFormatter } from 'react-number-format';
import styles from "./auto-claim.module.css"


interface IEarn {
    open: (block: string) => void,
    autoClaim: boolean
}

export const AutoClaim: React.FC<IEarn> = ({open, autoClaim} :IEarn) => {
  let navigate = useNavigate(); 
  const routeChange = () =>{ 
    let path = '/'; 
    navigate(path);
  }

  const [showPopup, setShowPopup] = useState(false);
  const [type, setType] = useState('');


  function close(){
    setShowPopup(false);
  }

  if (autoClaim){
    return (<div className={styles.disabled_card_holder} onClick={() => {}}>
    <div className={styles.holder}><img src={"images/robot.png"}  alt="logo"   className={styles.disabled_robot}/></div>

    <Grid container flexDirection={"column"} style={{marginLeft: "10px"}} justifyContent={"space-around"}>

    <Grid item ><p style={{fontSize: "15px", marginBottom: "10px",  opacity: 0.5}}>Auto Claim</p></Grid>
    <Grid item > <p style={{marginRight: "13px", fontSize: "15px", whiteSpace: 'nowrap',  opacity: 0.5}}>Turned on</p></Grid>
    
    </Grid>
    <img src="images/tick.png" style={{marginRight: "13px", height: '20px', whiteSpace: 'nowrap', opacity: 0.5}} /></div>)
  }
  return (
    <div className={styles.card_holder} onClick={() => open('auto_claim')}>
    <div className={styles.holder}><img src={"images/robot.png"}  alt="logo"   className={styles.robot}/></div>

    <Grid container flexDirection={"column"} style={{marginLeft: "10px"}} justifyContent={"space-around"}>

    <Grid item ><p style={{fontSize: "15px", marginBottom: "10px"}}>Auto Claim</p></Grid>
    <Grid item ><div className={styles.price}> <img src={"images/coin.png"}  alt="logo"  width="17px" height="17px"/><p style={{marginLeft: "5px", fontSize: "14px"}}>{numericFormatter('3000', {thousandSeparator: "," })}</p></div></Grid>
    
    </Grid>
    <p style={{marginRight: "13px", fontSize: "17px", whiteSpace: 'nowrap'}}>Turned off</p></div>
  )
}
