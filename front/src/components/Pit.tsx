import React, {useState} from 'react'
import { BackButton } from '@vkruglikov/react-telegram-web-app';
import { useNavigate } from "react-router-dom";
import styles from "./pit.module.css";
import { Start_btn } from './UI/Start_btn';

interface IPit {
  pickaxe_level: number
}

export const  Pit : React.FC<IPit> = ({pickaxe_level} : IPit) => {
  const [clicked, setClicked] = useState(false)
  const [claim, setClaim] = useState(false)
  const click = () => {
    setClicked(true)
    setTimeout(() => {setClicked(false); setClaim(true)}, 9000)
  }

  let navigate = useNavigate(); 
    const routeChange = () =>{ 
      let path = '/'; 
      navigate(path);
    }

  return (
    <div>
      <div className={styles.main}>
      <h1 className={styles.title}>Mine Pit</h1>
      <div className={styles.mine}>
        <img src="images/minepit.png"  height={250}></img>
      </div>
      { pickaxe_level < 15 &&
      <div className={styles.closed}>
        <p style={{fontSize: "80px"}}>🔒</p>
        <p style={{fontSize: "30px", marginTop: "30px"}}>Will be available soon</p>
      </div>}
        {/* <Start_btn click={click}></Start_btn> */}
        </div>
        <BackButton onClick={routeChange}></BackButton>
    </div>
    
      
  )
}
