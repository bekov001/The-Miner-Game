import React from 'react'
import { Container } from 'react-bootstrap';
import "./tabs.css";
import {EnergyBar} from './EnergyBar';
import { Link } from 'react-router-dom';


interface TabsInterface {
  energy: number
}


export const Tabs: React.FC<TabsInterface> = ({energy}: TabsInterface) =>  {
  return (
    <div>
        
        <Container className="tabs">
            <div className='energy-container'><EnergyBar energy={energy}></EnergyBar></div>
            <div className='tabs-center'>
                <div className='background-tabs'>
                <Link to="frens"  style={{ WebkitTapHighlightColor: 'transparent' }} ><div style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}><img src="images/gift.png" width={38} height={38} /><a>Frens</a></div></Link>
                
                <Link to="trade"  style={{ WebkitTapHighlightColor: 'transparent' }}><div style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}><img style={{transform: "rotate(-90deg)"}} src="images/trade.png" width={38} height={38}/><a>Trade</a></div></Link>
                <Link to="pit"  style={{ WebkitTapHighlightColor: 'transparent' }}><div style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}><img src="images/minecart.png" alt="mine-cart" width={38} height={38}></img><a>Pit</a></div></Link>
                <Link to="boosts"  style={{ WebkitTapHighlightColor: 'transparent' }}><div style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}><img src="images/rocket.png" width={38} height={38}/><a>Boosts</a></div></Link>
                <Link to="earn"  style={{ WebkitTapHighlightColor: 'transparent' }}><div style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}><img src="images/coin_tab.png" width={38} height={38}/><a>Earn</a></div></Link>
                
                </div>
            </div>
            
          </Container>
    </div>
  )
}
