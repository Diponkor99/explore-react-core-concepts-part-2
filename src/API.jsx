import { useEffect, useState } from "react"
import Friend from "./Friend";
import './Api.css'

export default function Users(){
    const [users , setUsers]=useState([]);
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response=>response.json())
        .then(data=> setUsers(data))
    },[])

    return(
        <div className="box" >
            <h3>users :{users.length}</h3>
            { 
              users.map(friend=> <Friend friend={friend}></Friend>)  
            }
        </div>
    )
} 