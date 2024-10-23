
import './App.css'
import Count from './count'
import Users from './API'

function App() {
  
  function hadleclick(){
    alert('first onclick 1')
  }

const hadlecOnclick=()=>{
  alert('second onclick 2')
}
const hadleonclick=(id)=>{
  alert(id+5 )
}


return (
 
    <>
    
    <h1> React</h1>
    <Users></Users>
    <Count></Count>
    <button onClick={hadleclick}>first onclick</button>
    <button onClick={hadlecOnclick}>second onclick</button>
    <button onClick={()=>{alert('Third onclick')}}>third Onclick</button>
    <button onClick={()=>{hadleonclick(5)}}>Four oncilck</button>
    </>
  )
}

export default App
