import { useState } from "react"; 

function ChangColor (){
    const[color,setColor]=useState("");
    return(
        <>
        <label style={{margin:'10px'}}>Please enter your favorit color:</label>
        <input type="text" onChange={e=>setColor(e.target.value)}/>
        <div style={{width:'100px',height:'100px',margin:'20px',background:color}}></div>
        </>
    )
}

export default ChangColor;