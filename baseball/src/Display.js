import React, {useState} from 'react'
import {Dashboard} from './Dashboard'



export const strikeClick = strike => {
        if (strike < 3){
        return strike + 1
        } else {
        setStrike(0);
        setBalls(0)
        }
    }

const Display=()=>{
   const[strike, setStrike, balls, setBalls]=Dashboard()
     console.log(strike)

    const strikeClick = () => {
        if (strike < 3){
        return strike + 1
        } else {
        setStrike(0);
        setBalls(0)
        }
    }
    

    const foulClick = () => {
        if (strike < 2){
            setStrike(strike + 1)
            return strike + 1
        } else{
            setStrike(strike + 0)
        }
    }

    //const[balls, setBalls] = useState(0);

    const ballsClick = () => {
        if(balls < 1){
        setBalls(balls + 1)
        } else {
        setBalls(0);
        setStrike(0)
        }
    }

    const hitClick = () =>{
        setStrike(0);
        setBalls(0)
    }

    return (
        <>
        <h1>Baseball App</h1>
        <div>
            <h3>Balls:{balls}</h3>
        </div>
        <div>
            <h3>Strikes:{strike}</h3>
        </div>
        <div> 
            <button onClick={() => setStrike(strikeClick(strike))}>Strikes</button>
            
        </div>
        
        <div> 
            <button onClick={foulClick}>Foul Ball</button>
        </div>
        <div> 
            <button onClick={ballsClick}>Ball</button>
        </div>
        <div> 
            <button onClick={hitClick}>Hit</button>
        </div>
        </>
    )
}

export default Display
