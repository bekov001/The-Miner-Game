import React, { useState } from 'react'
import "./boosts.css"
import { Grid } from '@mui/material'

import { BackButton } from '@vkruglikov/react-telegram-web-app';
import { useNavigate } from "react-router-dom";
import { BoostPopup } from './BoostPopup';
import { BoostStatus } from './BoostStatus';
import { numericFormatter } from 'react-number-format';
import { AutoClaim } from './AutoClaim';
import { ImpactOccurredFunction } from '@vkruglikov/react-telegram-web-app';


interface BoostsInterface {
  tokens: number,
  pickaxeP: number[],
  luck: number[],
  upgrade: (block: string) => void,
  boostStatus: number,
  autoClaim: boolean,
  impact: ImpactOccurredFunction
}

export const Boosts: React.FC<BoostsInterface> = ({impact, tokens, upgrade, pickaxeP, boostStatus, luck, autoClaim} :BoostsInterface) => {
  let navigate = useNavigate(); 
  const routeChange = () =>{ 
    let path = '/'; 
    navigate(path);
  }

  const [showPopup, setShowPopup] = useState(false);
  const [type, setType] = useState('');


  function open(block: string){
    if (block === ""){
      impact("heavy")
    } else if (block === "luck"){
      impact('medium')
    } else if (block === "pickaxe") {
      impact('light')
    }
    setType(block)
    setShowPopup(true);
  }
  function close(){
    setShowPopup(false);
  }


  return (
    <div className="container-trade">
    <div className="main-info-boosts">
      <p>Your balance</p>
      <div className='price'> <img src={"images/coin.png"}  alt="logo"  width="40px" height="40px"/><p style={{marginLeft: "5px", fontSize: "40px"}}>{numericFormatter(tokens.toString(), {thousandSeparator: "," })}</p></div>
      <p></p>
    </div>
    <div className="trade">
    <AutoClaim open={open} autoClaim={autoClaim}></AutoClaim>
    <div className="card-holder" onClick={() => open('')}>
        <div className='holder'><img src={"images/battery.png"}  alt="logo"  width="30px" height="60px"/></div>
        <Grid container flexDirection={"column"} style={{marginLeft: "10px"}}>

        <Grid item > <p style={{marginBottom: "20px", fontSize: "17px"}}>Energy Limit</p></Grid>
        <Grid item ><div className='price'> <img src={"images/coin.png"}  alt="logo"  width="20px" height="20px"/><p style={{marginLeft: "5px", fontSize: "16px"}}>{numericFormatter('1000', {thousandSeparator: "," })}</p></div></Grid>
    
        </Grid>
        <p style={{marginRight: "13px", fontSize: "17px", whiteSpace: 'nowrap'}}>🔒</p>
        </div>
        <div className="card-holder" onClick={() => open((luck[1] < 15 ? 'luck': ''))}>
        <div className='holder'><img src={"images/bullseye.png"}  alt="logo"  width="50px" height="50px"/></div>
        <Grid container flexDirection={"column"} style={{marginLeft: "10px"}}>

        <Grid item > <p style={{marginBottom: "20px", fontSize: "17px",  opacity: (luck[1] < 15 ? 1 : 0.5)}}>Luck</p></Grid>
        <Grid item >{luck[1] < 15 ? <div className='price'> <img src={"images/coin.png"}  alt="logo"  width="20px" height="20px"/><p style={{marginLeft: "5px", fontSize: "16px"}}>{numericFormatter(luck[0].toString(), {thousandSeparator: "," })}</p></div>: <p style={{opacity: 0.5}}>Lv. Max</p>}</Grid>
        
        </Grid>
        <p style={{marginRight: "13px", fontSize: "17px", whiteSpace: 'nowrap'}}>Lv. {luck[1]}</p>
        </div>
        <div className="card-holder" onClick={() => open('')}>
        <div className='holder'><img src={"images/rock-boost.png"}  alt="logo"  width="50px" height="50px"/></div>
        <Grid container flexDirection={"column"} style={{marginLeft: "10px"}}>

        <Grid item > <p style={{marginBottom: "20px", fontSize: "17px"}}>Rock</p></Grid>
        <Grid item ><div className='price'> <img src={"images/coin.png"}  alt="logo"  width="20px" height="20px"/><p style={{marginLeft: "5px", fontSize: "16px"}}>{numericFormatter('1000', {thousandSeparator: "," })}</p></div></Grid>
    
        </Grid>
        <p style={{marginRight: "13px", fontSize: "17px", whiteSpace: 'nowrap'}}>🔒</p>
        </div>
        <div className="card-holder" onClick={() => open((pickaxeP[1] < 15 ? 'pickaxe': ''))}>
        <div className='holder'><img src={"images/pickaxe.webp"}  alt="logo"  width="50px" height="50px"/></div>
   
        <Grid container flexDirection={"column"} style={{marginLeft: "10px"}}>

        <Grid item ><p style={{marginBottom: "20px", fontSize: "17px", opacity: (pickaxeP[1] < 15 ? 1 : 0.5)}}>Pickaxe</p></Grid>
        <Grid item >{pickaxeP[1] < 15 ? <div className='price'> <img src={"images/coin.png"}  alt="logo"  width="20px" height="20px"/><p style={{marginLeft: "5px", fontSize: "16px"}}>{numericFormatter(pickaxeP[0].toString(), {thousandSeparator: "," })}</p></div>: <p style={{opacity: 0.5}}>Lv. Max</p>}</Grid>
        
        </Grid>
        {pickaxeP[1] < 15 ? <p style={{marginRight: "13px", fontSize: "17px", whiteSpace: 'nowrap'}}>Lv. {pickaxeP[1]}</p>: <img src="images/tick.png" style={{marginRight: "13px", height: '20px', whiteSpace: 'nowrap', opacity: 0.5}} />}</div>

       
  
    </div>

    <div className='stars'>
      <img src="images/star.png" id={"first"} width={"30px"} />
      <img src="images/star.png" id={"second"} width={"20px"} />
      <img src="images/star.png" id={"third"} width={"15px"} />
    </div>

    {showPopup && <BoostPopup type={type} cancel={close} upgrade={upgrade}></BoostPopup>}
    {boostStatus === 1 ? <BoostStatus type={'success'} block={type}></BoostStatus> : boostStatus === -1 ? <BoostStatus type={'error'} block={type}></BoostStatus> : '' }
    <BackButton onClick={routeChange}></BackButton>
</div>
  )
}
