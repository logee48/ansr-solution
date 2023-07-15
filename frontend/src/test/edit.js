import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import copy from 'copy-to-clipboard';

function Edit(){
    const [title,settitle] = useState("")
    const [notes,setnotes] = useState("")
    const [linkk,setlinkk] = useState("")
    const type = useParams()
    const updateusingid = async () =>{
        const val = {
            "user":type.name,
            "title":title,
            "notes":notes
        }
        return await axios.put(`/api/neww/${type.id}`,val)
    }
    const deleteusingid = async()=>{
        await axios.delete(`/api/del/${type.id}`)
    }
    const sharelinkusingid = () => {
        setlinkk(`http://localhost:3000/share/${type.id}`)
    }
    const copyToClipboard = () => {
        copy(linkk);
        alert(`text copied successfully`);
    }
    useEffect(() => {
        const headers = { 'autho': `Bearer ${type.user}`};
        fetch(`/api/gett/${type.id}`, { headers })
            .then(response => response.json())
            .then(data => [setnotes(data.notes),settitle(data.title)]);
    }, []);
    
    return(
        <div style={{display:"flex",alignContent:"center",justifyContent:"center",backgroundColor:"#FFD9EF",height:"100vh"}}>
            <div style={{display:"grid",gridTemplateColumns:"auto"}}>
                <div style={{display:"flex",justifyContent:'center',alignContent:"center",fontSize:"60px",position:"relative",top:"10px",marginBottom:"50px"}} id="fontthingy">Noteit</div>
                <div style={{display:"flex",justifyContent:'center',alignContent:"center",position:'relative',top:'-20px'}}><input style={{width:"500px",padding:"5px",height:"30px",fontFamily:'Inconsolata, monospace',fontSize:"20px"}} value={title} onChange={(e)=>{settitle(e.target.value)}}></input></div>
                <div style={{display:"flex",justifyContent:'center',alignContent:"center",position:'relative',top:'-50px'}}><textarea style={{width:"500px",padding:"5px",height:"150px",fontFamily:'Inconsolata, monospace',fontSize:"20px"}} value={notes} onChange={(e)=>{setnotes(e.target.value)}}></textarea></div>
                <div style={{display:"flex",justifyContent:'center',alignContent:"center",position:'relative',top:'-80px'}}><button id="fontthingy1" style={{width:'500px',padding:"5px",height:"50px",borderRadius:"50px",borderStyle:"none",backgroundColor:"#E766B0",color:"white",fontSize:"20px"}} onClick={updateusingid}>update</button></div>
                <div style={{display:"flex",justifyContent:'center',alignContent:"center",position:'relative',top:'-110px'}}><button id="fontthingy1" style={{width:'500px',padding:"5px",height:"50px",borderRadius:"50px",borderStyle:"none",backgroundColor:"#E766B0",color:"white",fontSize:"20px"}} onClick={deleteusingid}>delete</button></div>
                <div style={{display:"flex",justifyContent:'center',alignContent:"center",position:'relative',top:'-140px'}}><button id="fontthingy1" style={{width:'500px',padding:"5px",height:"50px",borderRadius:"50px",borderStyle:"none",backgroundColor:"#E766B0",color:"white",fontSize:"20px"}} onClick={sharelinkusingid}>share</button></div>
                <div style={{display:"flex",position:'relative',top:'-170px'}}><div onClick={()=>{navigator.clipboard.writeText(this.state.textToCopy)}}style={{display:"flex",justifyContent:"center",alignContent:"center",padding:"10px"}}>{linkk}</div>{linkk !== ""?<div style={{padding:"2px"}}><button onClick={copyToClipboard} style={{borderRadius:"10px",borderStyle:"none",backgroundColor:"#BC3081",color:"white",width:"100px",height:"30px"}}>copy</button></div>:""}</div>
            </div>
        </div>
    )
}

export default Edit