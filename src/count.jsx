import { useState } from "react"

export default function Count(){
    const [Count,update]=useState(0)
    const button=()=>{
        const newCount=Count+1
        update(newCount)}
    const Reduce=()=>{
        const removeCount=Count-1;
         update(removeCount)
    }

    return (
        <div style={{
            border:'2px solid green',
            margin:'10px',
            padding:'10px'
        }}>
            <h3>counter : {Count}</h3>
            <button style={{margin:'10px'}} onClick={button}>Add</button>
            <button onClick={Reduce}>Reduce</button>

        </div>
    )
}