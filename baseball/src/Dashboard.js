import React, {useState} from 'react'


export const Dashboard=()=>{
    const[strike, setStrike] = useState(0);
    const[balls, setBalls] = useState(0);
    
    return(
        [strike, setStrike, balls, setBalls]
        
    )
}