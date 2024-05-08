import React from 'react'
import "./boosts.css"
import { Grid } from '@mui/material'
export default function Boosts() {
  return (
    <div className="container-trade">
    <div className="main-info-boosts">
      <p>Your balance</p>
      <div className='price'> <img src={"images/coin.png"}  alt="logo"  width="40px" height="40px"/><p style={{marginLeft: "5px", fontSize: "40px"}}>1000</p></div>
      <p></p>
    </div>
    <div className="trade">
    <div className="card-holder">
        <div className='holder'><img src={"images/battery.png"}  alt="logo"  width="30px" height="60px"/></div>
        <Grid container flexDirection={"column"} style={{marginLeft: "10px"}}>

        <Grid item > <p style={{marginBottom: "20px", fontSize: "17px"}}>Energy Limit</p></Grid>
        <Grid item ><div className='price'> <img src={"images/coin.png"}  alt="logo"  width="20px" height="20px"/><p style={{marginLeft: "5px", fontSize: "16px"}}>1000</p></div></Grid>
    
        </Grid>
        </div>
        <div className="card-holder">
        <div className='holder'><img src={"images/bullseye.png"}  alt="logo"  width="50px" height="50px"/></div>
        <Grid container flexDirection={"column"} style={{marginLeft: "10px"}}>

        <Grid item > <p style={{marginBottom: "20px", fontSize: "17px"}}>Luck</p></Grid>
        <Grid item ><div className='price'> <img src={"images/coin.png"}  alt="logo"  width="20px" height="20px"/><p style={{marginLeft: "5px", fontSize: "16px"}}>1000</p></div></Grid>
    
        </Grid>
        </div>
        <div className="card-holder">
        <div className='holder'><img src={"images/pickaxe.webp"}  alt="logo"  width="50px" height="50px"/></div>
        <Grid container flexDirection={"column"} style={{marginLeft: "10px"}}>

        <Grid item > <p style={{marginBottom: "20px", fontSize: "17px"}}>Pickaxe</p></Grid>
        <Grid item ><div className='price'> <img src={"images/coin.png"}  alt="logo"  width="20px" height="20px"/><p style={{marginLeft: "5px", fontSize: "16px"}}>1000</p></div></Grid>
    
        </Grid>
        </div>
    </div>

    <div className='stars'>
      <img src="images/star.png" id={"first"} width={"30px"} />
      <img src="images/star.png" id={"second"} width={"20px"} />
      <img src="images/star.png" id={"third"} width={"15px"} />
    </div>
</div>
  )
}
