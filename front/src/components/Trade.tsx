import React, { useState } from 'react'
import  "./trade.css"

import { BackButton } from '@vkruglikov/react-telegram-web-app';
import { useNavigate } from "react-router-dom";
import { TradePopup } from './TradePopup';
import { MessageInfo } from './MessageInfo';

interface TradeInterface {
  trade:  (block: string, amount: number) => void
  swapStatus: number,
  goldP: number,
   silverP: number,
    copperP: number,
    copper: number,
    silver: number,
    gold: number
}

export const Trade: React.FC<TradeInterface> = ({trade, swapStatus, goldP, silverP, copperP, gold, silver, copper} : TradeInterface) =>  {
    let navigate = useNavigate(); 
    const routeChange = () =>{ 
      let path = '/'; 
      navigate(path);
    }

    const [showPopup, setShowPopup] = useState(false);
    const [block, setBlock] = useState('');

    const choose = (block: string) => {
      setShowPopup(true)
      setBlock(block)
    }

    const cancel = () => {
      setShowPopup(false)
    }
  return (
    <div className="container-trade" >
    <div className="main-info-trade" >
    <img style={{transform: "rotate(-90deg)"}} src="images/trade.png" width={100} height={100}/>
        <p style={{fontSize: "30px", fontWeight: 500}}>Trade</p>
        <p>Simple trade and swap</p>
    </div>
    <div className="trade">
    <div className="section-card" onClick={() => choose('gold')}>
        <img src={"images/gold.webp"}  alt="logo"  width="50px" height="50px" style={{marginLeft: "10px"}}/>
     
        <div className='price'> <img src={"images/coin.png"}  alt="logo"  width="20px" height="20px"/><p style={{marginLeft: "5px", fontSize: "16px"}}>{goldP}</p><div className='price-action-green'><p className='price-action'>+17%</p></div></div>
    </div>
    <div className="section-card" onClick={() => choose('silver')}>
        <img src={"images/silver3.png"}  alt="logo"  width="50px" height="50px" style={{marginLeft: "10px"}}/>
        <div className='price'> <img src={"images/coin.png"}  alt="logo"  width="20px" height="20px"/><p style={{marginLeft: "5px", fontSize: "16px"}}>{silverP}</p><div className='price-action-neutral'><p className='price-action'>-0.1%</p></div></div>
    </div>
    <div className="section-card" onClick={() => choose('copper')}>
        <img src={"images/copper.webp"}  alt="logo"  width="50px" height="50px" style={{marginLeft: "10px"}}/>
        <div className='price'> <img src={"images/coin.png"}  alt="logo"  width="20px" height="20px"/><p style={{marginLeft: "5px", fontSize: "16px"}}>{copperP}</p><div className='price-action-red'><p className='price-action'>-7%</p></div></div>
    </div>
    <p>Price updates every 12 hours</p>
    </div>
    {showPopup && <TradePopup trade={trade} block={block} cancel={cancel}  gold={gold} silver={silver} copper={copper} showPopup={showPopup}></TradePopup>}
    {swapStatus === -1 ? <MessageInfo type={'error'} block={block}></MessageInfo> : swapStatus === 1 ? <MessageInfo type={'success'} block={block}></MessageInfo> : ""}
    <div className='test'></div>
    <BackButton onClick={routeChange}></BackButton>
</div>
  )
}
