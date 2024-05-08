import React from 'react'
import "./frens.css"
export default function Frens() {
  return (
    
    <div>
      <div className='main'>
      <div className="header">
        <h1 style={{marginBottom: "15px", marginTop:"10px"}}>Fren zone</h1>
        <img style={{marginBottom: "15px"}} src="images/frens.png" width="50" height="50" />
        <p style={{fontWeight: 600, marginBottom: "15px"}}>Invite Frens</p>
    </div>
    <div className="balance">
        <h4>Your future drop will be here</h4>
    </div>
    <div className="instructions">
        <p>Get future drop for every referral</p>
    </div>
    <p className='title-frens'>0 frens</p>
    <ul className="friends-list">
        <li>
          <div className='friend-row'>
          <div className='avatar'><p className='letter'>C</p></div>
           <p className='friend-name'>Cruffix</p>
           
          </div>
          <hr style={{marginBottom: "10px"}}></hr>
          </li>

          <li>
          <div className='friend-row'>
          <div className='avatar'><p className='letter'>C</p></div>
           <p className='friend-name'>Cruffix</p>
           
          </div>
          <hr style={{marginBottom: "10px"}}></hr>
          </li>

          <li>
          <div className='friend-row'>
          <div className='avatar'><p className='letter'>C</p></div>
           <p className='friend-name'>Cruffix</p>
           
          </div>
          <hr style={{marginBottom: "10px"}}></hr>
          </li>

          <li>
          <div className='friend-row'>
          <div className='avatar'><p className='letter'>C</p></div>
           <p className='friend-name'>Cruffix</p>
           
          </div>
          <hr style={{marginBottom: "10px"}}></hr>
          </li>

          <li>
          <div className='friend-row'>
          <div className='avatar'><p className='letter'>C</p></div>
           <p className='friend-name'>Cruffix</p>
           
          </div>
          <hr style={{marginBottom: "10px"}}></hr>
          </li>

          <li>
          <div className='friend-row'>
          <div className='avatar'><p className='letter'>C</p></div>
           <p className='friend-name'>Cruffix</p>
           
          </div>
          <hr style={{marginBottom: "10px"}}></hr>
          </li>
    </ul>
      </div>
      <div className="invite-button-bg">
      <div className="invite-button">
        Invite a fren
    </div>
      </div>
      
    
    </div>
    
  )
}
