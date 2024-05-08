import React from 'react'
import { Container } from 'react-bootstrap';
import "./tabs.css";
import {EnergyBar} from './EnergyBar';
import { Link } from 'react-router-dom';


interface TabsInterface {
  clicks: number
}


export const Tabs: React.FC<TabsInterface> = ({clicks}: TabsInterface) =>  {
  return (
    <div>
        
        <Container className="tabs">
            <div className='energy-container'><EnergyBar clicks={clicks}></EnergyBar></div>
            <div className='tabs-center'>
                <div className='background-tabs'>
                <Link to="frens" ><div style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}><img src="images/gift.png" width={40} height={40} /><a>Frens</a></div></Link>
                
                <Link to="trade" ><div style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}><img style={{transform: "rotate(-90deg)"}} src="images/trade.png" width={40} height={40}/><a>Trade</a></div></Link>
                <Link to="boosts" ><div style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}><img src="images/rocket.png" width={40} height={40}/><a>Boosts</a></div></Link>
                
                </div>
            </div>
            
          </Container>
    </div>
  )
}
