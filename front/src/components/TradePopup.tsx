import React, {useState} from 'react'
import styles from './trade_popup.module.css';
import { Counter } from './Counter';


interface TradePopupInterface {
    trade:  (block: string, amount: number) => void
    block: string
    cancel: () => void,
    copper: number,
    silver: number,
    gold: number,
    showPopup: boolean
  }

  
export const TradePopup:  React.FC<TradePopupInterface>  = ({showPopup, trade, block, cancel,  gold, silver, copper}: TradePopupInterface) => {
    const sell = (event: any) => {
        event.preventDefault()
        trade(block, amount)
        cancel()
    }

    const [count, setCount] = useState(block === "silver" ? silver : block === "gold" ? gold : copper)
    const [amount, setAmount] = useState(count);

    const reduce = () => {
      if (amount > 0) {
        setAmount(amount - 1)}
    }

    const increase = () => {
      if (amount < count) {
        setAmount(amount + 1)
      }
    }
    

  return (
    <div>
        <div className={styles.filter} onClick={() => cancel()}></div>
        <div className={styles.main}>
            <div className={styles.section}>
            <h1 style={{color: "white"}}>Confirm?</h1>
            <img src={block === "silver" ? "images/silver3.png" : "images/" + block + ".webp"}  alt="logo"  width="60px" height="60px" />
            <Counter amount={amount} reduce={reduce} increase={increase} ></Counter>
            <button className={styles.sell_btn} onClick={sell}>SELL</button>
            </div>
        
    </div>
    </div>
    
  )
}
