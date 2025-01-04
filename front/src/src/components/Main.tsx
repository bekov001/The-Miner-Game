import React, {useState, useEffect} from 'react';
import {Container} from "react-bootstrap";
import "./main.css";

import {Tabs} from './Tabs';
import { AnimationWin } from './animationWin';

import { useDrag } from '@use-gesture/react';
import { animated, useSpring } from '@react-spring/web';
import Loader from './Loader';



interface MainInterface {
  clicks: number,
  animationStart: boolean
  rockNumber: number,
  winDrop: boolean,
  gold: number,
  silver: number,
  copper: number,
  mine: () => void,
  claim: () => void,
  onAnimationEnd: () => void,
  randomBlock: string,
  randomInt: number,
  loading: boolean,
  energy: number,
  click: number
}


export const Main: React.FC<MainInterface> = ({clicks, animationStart, rockNumber, winDrop, gold, silver, copper, mine, claim, onAnimationEnd, randomInt, randomBlock, loading, energy, click}: MainInterface) => {

  // const [{ x, y }, api] = useSpring(() => ({ x: 0, y: 0 }))
  const [springs, api]= useSpring(() => ({
    config: {
      // duration: 100000,
    },
  }))

  const bind = useDrag(state => {
    const {
      swipe,         // [swipeX, swipeY] 0 if no swipe detected, -1 or 1 otherwise
      tap,   // is the drag assimilated to a tap
      xy: [x, y]         
    } = state

    if (tap && !winDrop && y < 600){
      mine()
      api.start({
        from: {
        x: Math.round(x),
        top: Math.round(y),
          opacity: 1
        },
        to: {
         
          x: Math.round(x),
          top: (y - 200),
          opacity: 0
        },
      })
      
    }
   
  })


  
    if (loading){
      return (
        <Loader></Loader>
      )
    } else {
    
    
  
    return (
      
      <div>
           <header className="App-header" {...bind()}  >
          <Container style={{display: "flex", justifyContent: "space-around"}}>
          <Container style={{display: "flex", alignItems: "center"}}><img src={"images/gold.webp"}  alt="logo"  width="50px" height="50px"/><p style={{marginLeft: "10px", fontFamily: "'VCR OSD Mono', sans-serif"}}>{gold}</p></Container>
          <Container style={{display: "flex", alignItems: "center"}}><img src={"images/silver3.png"}  alt="logo"  width="50px" height="50px"/><p style={{marginLeft: "10px", fontFamily: "'VCR OSD Mono', sans-serif"}}>{silver}</p></Container>
          <Container style={{display: "flex", alignItems: "center"}}><img src={"images/copper.webp"}  alt="logo"  width="50px" height="50px"/><p style={{marginLeft: "10px", fontFamily: "'VCR OSD Mono', sans-serif"}}>{copper}</p></Container>
          </Container>
          {energy - click >= 0 ? <animated.div
            style={{
              position: 'absolute',
              fontSize: '23px',
              fontWeight: 'bold',
              opacity: 0,
              zIndex: 5,
              ...springs,
            }}
          >{-click}</animated.div> : <animated.img style={{
            position: 'absolute',
            width: "23px",
            height: "23px",
            fontWeight: 'bold',
            opacity: 0,
            zIndex: 5,
            ...springs,
          }} src="images/ban.webp" />}
          {!winDrop ? <div className='game'>
          
            <img src={"images/rock/rock" + rockNumber + ".png"}  alt="logo" className='rock' />
            <img src={"images/pickaxe.webp"}  className={"pickaxe-start " + (animationStart ? "animate" : "")} onAnimationEnd={onAnimationEnd}/>
          </div> : ""}
          <Container className='clicks' ><p>
            Total clicks: {clicks}
          </p></Container>

          {winDrop ? <AnimationWin block={randomBlock} num={randomInt} claim={claim}></AnimationWin> : ""}
          
          <Tabs energy={energy}></Tabs>
          
          <div className='sun'></div>
        </header>
        
        
      </div>
    );
  }
}
