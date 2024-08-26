import React, { useState } from 'react'
import "./frens.css"

import { BackButton } from '@vkruglikov/react-telegram-web-app';
import { Link, useNavigate } from "react-router-dom";
import { IFrens } from '../types';
import { numericFormatter } from 'react-number-format';
import Copied from './Notifications/Copied';
// import styles from ""
interface FrensInterface {
  inviteID: number,
  friends: IFrens[],
  tokensClaim: number,
  claimTokens: () => void,
  impact: any
}
export const Frens: React.FC<FrensInterface> = ({impact, inviteID, friends, tokensClaim, claimTokens} : FrensInterface) => {

  const [show, setShow] = useState(false);
  let navigate = useNavigate(); 
  const routeChange = () =>{ 
    let path = '/'; 
    navigate(path);
  }

  const claim = () => {
    if (tokensClaim > 0){
      claimTokens()
    }
  }

  function copy(){
    if (!show){
      impact('success')
      setShow(true);
      setTimeout(() => setShow(false), 2500)
    }
    
    navigator.clipboard.writeText('https://t.me/TheMineGame_bot?start=' + inviteID)
  }
  
  return (
    
    <div>
      <div className='main'>
      <div className="header">
        <h1 style={{marginBottom: "15px", marginTop:"10px"}}>Fren zone</h1>
        <img style={{marginBottom: "15px"}} src="images/frens.png" width="50" height="50" />
        <p style={{fontWeight: 600, marginBottom: "15px"}}>Invite Frens</p>
    </div>
    <div className="balance">
        <div className='claim-number'><img src={"images/coin.png"}  alt="logo"  width="25px" height="25px"/><p style={{marginLeft: "5px", fontSize: "23px"}}>{numericFormatter(tokensClaim.toString(), {thousandSeparator: "," })}</p></div>
        <div className={tokensClaim > 0 ? 'claim-btn': 'claim-btn-disabled'} onClick={claim}>Claim</div>
    </div>
    <div className="instructions">
        <p>Get 5% from each referral's  trade</p>
    </div>
    <p className='title-frens'>{friends.length} frens</p>
    <ul className="friends-list">
      {friends.map(arr => {
        return (
          <li>
          <div className='friend-row'>
          <div className='avatar'><p className='letter'>{arr.name.slice(0, 1)}</p></div>
           <p className='friend-name'>{arr.name}</p>
           
          </div>
          <hr style={{marginBottom: "10px"}}></hr>
          </li>

      )
    }
      )}
       
    </ul>
      </div>
     
      <div className="invite-button-bg" >
      <Link to={"https://t.me/share/url?url=" + encodeURI("https://t.me/TheMineGame_bot?start=" + inviteID) + "&text=" + "Join me and let's mine together⛏️! Use my invite link to join the fun. 🌟"}>
      <div className="invite-button">
        Invite a fren
    </div>
    </Link>
    <div className="copy" onClick={() => copy()}><img src="images/copy.png"></img></div>
      </div>
   
      
      {show? <Copied></Copied>: ""}
      
      <BackButton onClick={routeChange}></BackButton>
    </div>
    
  )
}
