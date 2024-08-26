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


interface IEarnCards {
  check : (block: string, pos: number) => void,
  earnIcon: number[],
}

export const EarnCards: React.FC<IEarnCards> = ({check, earnIcon} :IEarnCards) => {
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

  const earnCards = [
    {
        tag: 'community',
        name: 'Join Community',
        photo: "images/rock-boost.png"
    },
    {
      tag: 'invite-3',
      name: 'Invite 3 Friends',
      photo: "images/bullseye.png"
  },
  {
    tag: 'chat',
    name: 'Join chat',
    photo: "images/pickaxe.webp"
},
{
  tag: 'sponsor',
  name: 'Join sponsor channel',
  photo: "images/emoji/sponsor.png"
}
  ]
  return (
    <div className="trade">
        {earnCards.map((value, index) => {
          
          if (earnIcon[index] === 1){
            return (
              <div key={index} className="card-holder" onClick={() => index == 0 ? window.open("https://t.me/theminegame", "_blank") : ''}>

              <div className='holder'><img src={value.photo}  alt="logo"  width="50px" height="50px"/></div>
              <Grid container flexDirection={"column"} style={{marginLeft: "10px"}}>

              <Grid item > <p style={{marginBottom: "20px", fontSize: "17px", opacity: 0.5}}>{value.name}</p></Grid>
              <Grid item ><div className='price'><p style={{fontSize: "16px", opacity: 0.5}}>+{numericFormatter('100000', {thousandSeparator: "," })}</p><img src={"images/coin.png"} className={styles.price_coin_disabled} alt="logo"  width="20px" height="20px"/></div></Grid>
          
              </Grid>
              <img src="images/tick.png" style={{marginRight: "13px", height: '20px', whiteSpace: 'nowrap', opacity: 0.5}} /> 
              </div>
        )
          }
            return (
                        <div  key={index} className="card-holder" onClick={() => check(value.tag, index)}>
        
                        <div className='holder'><img src={value.photo}  alt="logo"  width="50px" height="50px"/></div>
                        <Grid container flexDirection={"column"} style={{marginLeft: "10px"}}>

                        <Grid item > <p style={{marginBottom: "20px", fontSize: "17px"}}>{value.name}</p></Grid>
                        <Grid item ><div className='price'><p style={{fontSize: "16px"}}>+{numericFormatter('100000', {thousandSeparator: "," })}</p><img src={"images/coin.png"} className={styles.price_coin} alt="logo"  width="20px" height="20px"/></div></Grid>
                    
                        </Grid>
                        {earnIcon[index] === 0 ? <img src="images/arrow-right.png" style={{marginRight: '13px'}} height={'20px'}></img>: earnIcon[index] === 2 ? <div className={styles.loader}></div> : earnIcon[index] === 1 ?     <img src="images/tick.png" style={{marginRight: "13px", height: '20px', whiteSpace: 'nowrap', opacity: 0.5}} /> : ''}
                        </div>
            )})}
    </div>
        
   


        

  )
}
