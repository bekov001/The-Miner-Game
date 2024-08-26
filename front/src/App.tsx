import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import {Main} from './components/Main';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import {Boosts} from './components/Boosts';
import {Frens} from './components/Frens';
import {Trade} from './components/Trade';
import { WebAppProvider, useExpand, useSwitchInlineQuery, WebAppUser, useWebApp } from '@vkruglikov/react-telegram-web-app';
import {URL, production}  from './socket';
import useWebSocket, { ReadyState } from 'react-use-websocket';
import { IFrens } from './types';
import { Earn } from './components/Earn';
import {Pit} from './components/Pit';
import { useHapticFeedback } from '@vkruglikov/react-telegram-web-app';




function choose(choices: any) {
    var index = Math.floor(Math.random() * choices.length);
    return choices[index];
  }

  function randomInteger(min: number, max: number) {
    // случайное число от min до (max+1)
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
  }

function getBlock(gold_probability: number, silver_probability: number) {
  const integer = randomInteger(1, 100);
  if (integer < gold_probability + 3) {
    return 'gold';
  } else if ( integer < (silver_probability + gold_probability + 7) && integer >= gold_probability) {
      return 'silver';
  }
  return 'copper'
  }


function App() {

    const [clicks, setClicks] = useState(0);
    const [animationStart, setAnimationStart] = useState(false);
    const [rockNumber, setRockNumber] = useState(1);
    const [winDrop, setWinDrop] = useState(false);
    const [loading, setLoading] = useState(true);

    const [gold, setGold] = useState(0);
    const [silver, setSilver] = useState(0);
    const [copper, setCopper] = useState(0);

    const [goldP, setGoldP] = useState(0);
    const [silverP, setSilverP] = useState(0);
    const [copperP, setCopperP] = useState(0);

    const [energyValue, setEnergyValue] = useState(1000)
    const [tokens, setTokens] = useState(0)
    const [friends, setFriends] = useState<IFrens[]>([])
    const [rockHealth, setRockHealth] = useState(17);
    
    
    const WebApp = useWebApp();
    const user:  WebAppUser = production ? WebApp.initDataUnsafe.user : {id: 123217, username: "HAY", first_name: "GAYYAyA"};
    // const user = {id: 123213, username: "HAY", first_name: "GAYYAyA"};
    const telegramID = production ? user.id : 9123213117;
    const tg_username = production ? user.first_name : "GAY"

    const invite = useSwitchInlineQuery();
    const [isExpanded, expand] = useExpand();
    // 0 - neutral, -1 - error, 1 - success
    const [swapStatus, setSwapStatus] = useState(0);
    const [boostStatus, setBoostStatus] = useState(0);
    const [earnStatus, setEarnStatus] = useState(0);

    // 0 - neutral, -1 - error, 2 - loading, 1 - success
    const [earnIcon, setEarnIcon] = useState([0, 0]);

    const [pickaxeP, setPickeaxeP] = useState([1000, 1]);
    const [luck, setLuck] = useState([1000, 1, 1, 1]);

    const [autoClaim, setAutoClaim] = useState(false);
    const [tokensClaim, setTokensClaim] = useState(0);
    
    const [impactOccurred, notificationOccurred, selectionChanged] = useHapticFeedback();

  const { sendMessage, lastMessage, readyState } = useWebSocket(URL, {
    onOpen: () => {
      sendMessage(
        JSON.stringify({
          type: "init",
          message: {
            name: tg_username,
            telegram_id: telegramID
          }

        }))
    },
    onMessage: (event) => {
      const data = JSON.parse(event.data);
      if (data.type === "init"){
        setLoading(false);
        setClicks(data.clicks);
        setGold(data.gold);
        setSilver(data.silver);
        setCopper(data.copper);
        setTokens(data.tokens);
        setGoldP(data.gold_p);
        setSilverP(data.silver_p);
        setCopperP(data.copper_p);
        setPickeaxeP(data.pickaxe_p)
        setFriends(data.friends);
        setLuck(data.luck);
        setAutoClaim(data.auto_claim);
        setTokensClaim(data.tokens_claim);
        setEarnIcon(data.tasks);
      
      } else if (data.type === "swap") {
        setTokens(data.tokens)
      } else if (data.type === "earn") {
        setTokens(data.tokens)
        setEarnIcon(data.tasks)
      } else if (data.type === "upgrade") {
        setTokens(data.tokens)
        if (data.boost === 'pickaxe'){
          setPickeaxeP(data.info)
        } else if (data.boost === 'luck') {
          setLuck(data.info)
        }
        
      }
      console.log(data)
    }
    ,
    //Will attempt to reconnect on all close events, such as server shutting down
    shouldReconnect: (closeEvent) => true});

  useEffect(() => {

    expand();
    const interval = setInterval(() => {
        if (energyValue < 1000) {
            setEnergyValue(energyValue + 1);
        } else {
            
        }
  }, 1000);

  return () => clearInterval(interval)

  }, [energyValue]);

  

  const connectionStatus = {
    [ReadyState.CONNECTING]: 'Connecting',
    [ReadyState.OPEN]: 'Open',
    [ReadyState.CLOSING]: 'Closing',
    [ReadyState.CLOSED]: 'Closed',
    [ReadyState.UNINSTANTIATED]: 'Uninstantiated',
  }[readyState];


  const claimTokens = ()=> {
    setTokens(tokens + tokensClaim)
    setTokensClaim(0)
    sendMessage(
      JSON.stringify({
        type: "claim",
        message: {
          telegram_id: telegramID
        }
      })
    )
  }

  const updateEarnIcon = (pos: number, number: number) => {
    let data = earnIcon.slice(0, pos)
    data.push(number)
    data.concat(earnIcon.slice(pos + 1))
    setEarnIcon(data)
  }

  const sex = (pos: number, num: number) => {
    updateEarnIcon(pos, 0)
    setEarnStatus(num)
    setTimeout(()=> setEarnStatus(0), 4000)
  }
  const earn = (block: string, pos: number)=> {
    
    updateEarnIcon(pos, 2)
    if (block === 'community' || friends.length >= 3 || block === "chat" || block === "sponsor"){
      setTimeout(()=> sex(pos, 1), 6000)
      sendMessage(
      JSON.stringify({
        type: "earn",
        message: {
          telegram_id: telegramID,
          block: block
        }
      })
    )
    } else {
      setTimeout(()=> sex(pos, -1), 6000)
    }
    
  }

  const upgrade = (block: string) => {
    if (block === "pickaxe" && tokens >= pickaxeP[0]){
      setBoostStatus(1)
      setTimeout(()=> setBoostStatus(0), 3000)
      sendMessage(
        JSON.stringify({
          type: "upgrade",
          message: {
            telegram_id: telegramID,
            block: block
          }
        })
      )
    } else if (block === "luck" && tokens >= luck[0]){
      setBoostStatus(1)
      setTimeout(()=> setBoostStatus(0), 3000)
      sendMessage(
        JSON.stringify({
          type: "upgrade",
          message: {
            telegram_id: telegramID,
            block: block
          }
        })
      )
    } else if (block === "auto_claim" && tokens >= 3000){
      setBoostStatus(1)
      setTimeout(()=> setBoostStatus(0), 3000)
      setAutoClaim(true);
      sendMessage(
        JSON.stringify({
          type: "upgrade",
          message: {
            telegram_id: telegramID,
            block: block
          }
        })
      )
    } else {
      setBoostStatus(-1)
      setTimeout(()=> setBoostStatus(0), 3000)
    }
    
    // if (block === "pickaxe"){
    //   setTokens(tokens - pickaxeP[0])
    //   setPickeaxeP([])
    // }
    
  }

   
    const trade = (block: string, amount: number) => {
        
        if (block === "copper" && copper > 0 && amount > 0){
          setCopper(copper - amount)
        } else if (block === "silver" && silver > 0 && amount > 0){
          setSilver(silver - amount)
        } else if (block === "gold" && gold > 0 && amount > 0){
          setGold(gold - amount)
        } else {
          setSwapStatus(-1)
          setTimeout(()=> setSwapStatus(0), 3000)
          return 0
        }
        setSwapStatus(1)
        setTimeout(()=> setSwapStatus(0), 3000)
        sendMessage(
            JSON.stringify({
              type: "swap",
              message: {
                telegram_id: telegramID,
                block: block,
                amount: amount,
              }
            })
          )
    }

    const mine = () => {

        if (!winDrop){
          sendMessage(
            JSON.stringify({
              type: "click",
              message: {
                telegram_id: telegramID
              }
            })
          )
          if (energyValue - pickaxeP[1] >= 0){
            setEnergyValue(energyValue - pickaxeP[1])
          
          setClicks(clicks + pickaxeP[1]);
          setAnimationStart(true); 
          impactOccurred('medium');
          // setRockH
          if (pickaxeP[1] === 1 && (clicks + 1) % 2 === 0 && rockNumber <= 11){
            setRockNumber(rockNumber + 1)
          } else if (pickaxeP[1] === 2 && rockNumber + 1 <= 11){
            setRockNumber(rockNumber + 1)
          } else if (pickaxeP[1] >= 3 && rockNumber + pickaxeP[1] - 1 <= 11){
            setRockNumber(rockNumber + pickaxeP[1] - 1)
          } else if (rockNumber + pickaxeP[1] - 1 > 11) {
            // const block = choose(["gold", "copper", "silver", "copper", "silver", "copper", "copper", "copper", "copper", "copper"]);
            const block = getBlock(luck[2], luck[3])
            const amount = randomInteger(1, 9);
            
            sendMessage(
              JSON.stringify({
                type: "drop",
                message: {
                  telegram_id: telegramID,
                  block: block,
                  amount: amount
                }
              })
            )
            setRandomBlock(block)
            setRandomInt(amount)
            if (!autoClaim){
              
              setWinDrop(true)
            } else {
              
              claim()
            }
            
          }
          }
          
        }
       
      };

      
  
      const [randomBlock, setRandomBlock] = useState("copper")
      const [randomInt, setRandomInt] = useState(0)


      const claim = () => {
        console.log(randomBlock, randomInt)
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

<div className="App">
         
         
         <Router>
            <WebAppProvider>
                
            <Routes>
                    {/* This route is for home component 
          with exact path "/", in component props 
          we passes the imported component*/}
                    <Route
                        
                        path="/"
                        element={<Main  clicks={clicks} animationStart={animationStart} rockNumber={rockNumber} winDrop={winDrop} gold={gold} silver={silver} copper={copper} mine={mine} claim={claim} randomInt={randomInt} randomBlock={randomBlock} onAnimationEnd={onAnimationEnd} loading={loading} energy={energyValue} click={pickaxeP[1]}/>}
                    />
 
                    {/* This route is for about component 
          with exact path "/about", in component 
          props we passes the imported component*/}
                    <Route
                        path="/boosts"
                        element={<Boosts impact={impactOccurred} autoClaim={autoClaim} upgrade={upgrade} tokens={tokens} pickaxeP={pickaxeP} boostStatus={boostStatus} luck={luck}/>}
                    />
 
                    {/* This route is for contactus component
          with exact path "/contactus", in 
          component props we passes the imported component*/}
                    <Route
                        path="/frens"
                        element={<Frens impact={notificationOccurred} claimTokens={claimTokens} inviteID={telegramID} friends={friends} tokensClaim={tokensClaim}/>}
                    />
      
                    <Route
                        path="/trade"
                        element={<Trade goldP={goldP} silverP={silverP} copperP={copperP} trade={trade} swapStatus={swapStatus} gold={gold} silver={silver} copper={copper} />}
                    />

                    <Route
                        path="/earn"
                        element={<Earn earnStatus={earnStatus} earnIcon={earnIcon} earn={earn}/>}
                    />
                     <Route
                        path="/pit"
                        element={<Pit pickaxe_level={pickaxeP[1]}></Pit>}
                    />
 
                    {/* If any route mismatches the upper 
          route endpoints then, redirect triggers 
          and redirects app to home component with to="/" */}
                    {/* <Redirect to="/" /> */}
                    <Route
                        path="*"
                        element={<Navigate to="/" />}
                    />
                </Routes>
            </WebAppProvider>
              
            </Router>
        
    </div>
        
    </div>
   
  );
}

export default App;
