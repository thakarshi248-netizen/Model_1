import {useState} from "react"

function  Counter() {
    const[count,setcount]=useState(0);
    return (
        <div>
            <h1>Counter : {count} </h1>
            <button onClick={ () => {
                   setcount(count+1) 
              }}>Increment</button>
            <br></br>
            <br></br>
              <button onClick={ () => {
                    if(count >0){
                         setcount(count-1) 
                    }
              }}>Decrement</button>
            <br></br>
            <br></br>
                <button onClick={ () => {
                   setcount(0) 
              }}>Reset</button>
        </div>
        
    )
}
 export default Counter