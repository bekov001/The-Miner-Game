import React from 'react'
import  "./trade.css"

export default function Trade() {
  return (
    <div className="container-trade">
    <div className="main-info-trade">
    <img style={{transform: "rotate(-90deg)"}} src="images/trade.png" width={100} height={100}/>
        <p style={{fontSize: "30px", fontWeight: 500}}>Trade</p>
        <p>Simple trade and swap</p>
    </div>
    <div className="trade">
    <div className="section-card">
        <img src={"images/gold.webp"}  alt="logo"  width="50px" height="50px" style={{marginLeft: "10px"}}/>
     
        <div className='price'> <img src={"images/coin.png"}  alt="logo"  width="20px" height="20px"/><p style={{marginLeft: "5px", fontSize: "16px"}}>1000</p><div className='price-action-green'><p className='price-action'>+17%</p></div></div>
    </div>
    <div className="section-card">
        <img src={"images/silver3.png"}  alt="logo"  width="50px" height="50px" style={{marginLeft: "10px"}}/>
        <div className='price'> <img src={"images/coin.png"}  alt="logo"  width="20px" height="20px"/><p style={{marginLeft: "5px", fontSize: "16px"}}>1000</p><div className='price-action-neutral'><p className='price-action'>-0.1%</p></div></div>
    </div>
    <div className="section-card">
        <img src={"images/copper.webp"}  alt="logo"  width="50px" height="50px" style={{marginLeft: "10px"}}/>
        <div className='price'> <img src={"images/coin.png"}  alt="logo"  width="20px" height="20px"/><p style={{marginLeft: "5px", fontSize: "16px"}}>1000</p><div className='price-action-red'><p className='price-action'>-7%</p></div></div>
    </div>
    </div>
   
    <div className='test'></div>
</div>
  )
}
