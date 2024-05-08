import React, {useState} from 'react'
import {Container} from "react-bootstrap";
import "./main.css";

import {Tabs} from './Tabs';
import { AnimationWin } from './animationWin';

function choose(choices: any) {
  var index = Math.floor(Math.random() * choices.length);
  return choices[index];
}

export default function Main() {
    const [clicks, setClicks] = useState(0);
    const [animationStart, setAnimationStart] = useState(false);
    const [rockNumber, setRockNumber] = useState(1);
    const [winDrop, setWinDrop] = useState(false);

    const [gold, setGold] = useState(0);
    const [silver, setSilver] = useState(0);
    const [copper, setCopper] = useState(0);

    function randomInteger(min: number, max: number) {
      // случайное число от min до (max+1)
      let rand = min + Math.random() * (max + 1 - min);
      return Math.floor(rand);
    }

    const [randomBlock, setRandomBlock] = useState("copper")
    const [randomInt, setRandomInt] = useState(0)
    const mine = (event: React.MouseEvent<HTMLDivElement>) => {
      event.preventDefault();
      setClicks(clicks + 1);
      setAnimationStart(true); 
      if ((clicks + 1) % 2 === 0 && rockNumber <= 17){
        setRockNumber(rockNumber + 1)
      } else if (rockNumber > 17) {
        setRandomBlock(choose(["gold", "copper", "silver", "copper", "silver", "copper", "copper", "copper", "copper", "copper"]))
        setRandomInt(randomInteger(1, 10))
        setWinDrop(true)
      }
      // setClickedButton(button.name);
    };
    
    const claim = () => {
      if (randomBlock === "copper"){
        setCopper(copper + randomInt)
      } else if (randomBlock === "silver"){
        setSilver(silver + randomInt)
      } else {
          setGold(gold + randomInt)
      }
      setRockNumber(1);
      setWinDrop(false);
    }
    const onAnimationEnd = () => {
      setAnimationStart(false);
  
    };
  
    return (
      
      <div>
           <header className="App-header"  >
          <Container style={{display: "flex", justifyContent: "space-around"}}>
          <Container style={{display: "flex", alignItems: "center"}}><img src={"images/gold.webp"}  alt="logo"  width="50px" height="50px"/><p style={{marginLeft: "10px", fontFamily: "'VCR OSD Mono', sans-serif"}}>{gold}</p></Container>
          <Container style={{display: "flex", alignItems: "center"}}><img src={"images/silver3.png"}  alt="logo"  width="50px" height="50px"/><p style={{marginLeft: "10px", fontFamily: "'VCR OSD Mono', sans-serif"}}>{silver}</p></Container>
          <Container style={{display: "flex", alignItems: "center"}}><img src={"images/copper.webp"}  alt="logo"  width="50px" height="50px"/><p style={{marginLeft: "10px", fontFamily: "'VCR OSD Mono', sans-serif"}}>{copper}</p></Container>
          </Container>
       
          {!winDrop ? <div className='game' onClick={mine}>
            <img src={"images/rock/rock" + rockNumber + ".png"}  alt="logo" className='rock' />
            <img src={"images/pickaxe.webp"}  className={"pickaxe-start " + (animationStart ? "animate" : "")} onAnimationEnd={onAnimationEnd}/>
          </div> : ""}
          <Container className='clicks'><p>
            Total clicks: {clicks}
          </p></Container>

          {winDrop ? <AnimationWin block={randomBlock} num={randomInt} claim={claim}></AnimationWin> : ""}
          
          <Tabs clicks={clicks}></Tabs>
          
          <div className='sun'></div>
        </header>
        
        
      </div>
    );
  }

