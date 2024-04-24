import "./App.css"
import {arr} from "./ArrList"
import {useState} from "react"


export default function App(){
  let [list,setList]=useState(arr)
  let [count,setCount]=useState(5)
  let [title,setTitle]=useState(`${count} Birthdays Today`)

  function removeName(id){
    let newName=list.filter((i)=>{
      return(
      i.id!=id
      )
    })
    setList(newName)
  }
  return(
    <div style={{textAlign:"center",margin:"20px",width:"800px"}} className="card w-100"> 
    <h1 style={{margin:"30px"}}>{title}</h1>
      {list.map((item)=>{
        return(
          <div key={item.id} style={{paddingBottom:"10px",display:"flex",padding:"40px"}}>
            <img src={item.img} style={{width:"80px",borderRadius:"100%"}} />
           
           <div style={{marginLeft:"50px"}}>
            <div style={{display:"flex"}}>
            <h4>{item.name}</h4>
            <p style={{paddingLeft:"100px"}} onClick={()=>{
              removeName(item.id)
              setCount(--count)
              setTitle(`${count} Birthday Today`)
            }}>Remove</p>
            </div>
            <h5 style={{color:"gray",marginLeft:"-150px"}}>{item.years}</h5>
           </div>
          </div>
        )
      })}
      
      <button style={{ backgroundColor:"palevioletred",color:"white",margin:"20px"}} onClick={()=>{
        setList([])
        setTitle("0 Birthdays Today")
      }}>Clear All</button>
    </div>
  )
}