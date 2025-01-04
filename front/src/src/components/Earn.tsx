import React, { useState } from 'react'
import "./boosts.css"
import { Grid } from '@mui/material'

import { BackButton } from '@vkruglikov/react-telegram-web-app';
import { Link, useNavigate } from "react-router-dom";
import { BoostPopup } from './BoostPopup';
import { BoostStatus } from './BoostStatus';
import { NumericFormat, numericFormatter } from 'react-number-format';
import styles from "./earn.module.css"
import { EarnStatus } from './EarnStatus';
import { EarnCards } from './EarnCards';


interface IEarn {
  earn : (block: string, pos: number) => void,
  earnIcon: number[],
  earnStatus: number
}

export const Earn: React.FC<IEarn> = ({earn, earnIcon, earnStatus} :IEarn) => {
  let navigate = useNavigate(); 
  const routeChange = () =>{ 
    let path = '/'; 
    navigate(path);
  }

  const [showPopup, setShowPopup] = useState(false);
  const [type, setType] = useState('');


  function open(block: string){
    setType(block)
    setShowPopup(true);
  }
  function close(){
    setShowPopup(false);
  }

  const check = (block: string, pos: number) => {
    if (block == "community"){
      window.open("https://t.me/theminegame", "_blank")
    }
    if (block === "chat"){
      window.open("https://t.me/+2pTcfYbk1SUyNTgy", "_blank")
    }
    earn(block, pos)
    
  }

  return (
    <div className="container-trade">
    <div className={styles.main_info_boosts}>
      <img src={"images/coin.png"} className={styles.coin_main}  alt="logo" />
      <div className='price'><p style={{marginLeft: "5px", fontSize: "35px"}}>Earn more coins</p></div>
      <p></p>
    </div>
    <EarnCards check={check} earnIcon={earnIcon}></EarnCards>
        
        
 
    

    <div className='stars'>
      <img src="images/star.png" id={"first"} width={"30px"} />
      <img src="images/star.png" id={"second"} width={"20px"} />
      <img src="images/star.png" id={"third"} width={"15px"} />
    </div>

    

    <BackButton onClick={routeChange}></BackButton>
    {earnStatus === 1 ? <EarnStatus type={'success'}></EarnStatus > : earnStatus === -1 ? <EarnStatus type={'error'}></EarnStatus > : ''}
    {showPopup && <BoostPopup type={type} cancel={close} upgrade={() => {}}></BoostPopup>}
    
</div>
  )
}
