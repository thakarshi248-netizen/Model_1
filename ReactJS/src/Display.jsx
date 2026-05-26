import {useState} from "react"

const Display = () =>{
    const[name,setName]=useState("");
    return(
        <div>
            <input type="text" placeholder="Enter Your Name" onChange={
                (e) => setName(e.target.value)
            }/>
            <h1>Welcome {name}!</h1>
        </div>        
    )
}

export default Display 