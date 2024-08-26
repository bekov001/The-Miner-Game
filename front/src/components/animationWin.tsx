import React from 'react'
import "./animation.css"

interface AnimationInterface {
  block: string,
  num: number,
  claim: () => void
}




export const AnimationWin: React.FC<AnimationInterface> = ({claim, num, block}: AnimationInterface) =>  {
  return (
    <div>
        <div className='claim'>
        <div className="animated-border-box-glow" style={{'--colormetal': block === "gold" ? "#daa520" : block === "silver" ? "#c0c0c0" : "#b87333 "} as React.CSSProperties} ></div>
          <div className="animated-border-box" style={{'--colormetal': block === "gold" ? "#daa520" : block === "silver" ? "#c0c0c0" : "#b87333 "} as React.CSSProperties}>
            {/* <p>CLAIM</p> */}
            <div className='main-info'>
            <p>You got {num}x {block}!</p>
            <img src={block === "silver" ? "images/silver3.png" : "images/" + block + ".webp"}  alt="logo"  width="60px" height="60px" />
            <button style={{ textTransform: "capitalize", width: "50%", height:"15%", backgroundColor: "#FFBF00", borderRadius: "10px"}} onClick={claim}>
                    Get
                </button>
            </div>
            
            </div>
        </div>
        
    </div>
  )
}
