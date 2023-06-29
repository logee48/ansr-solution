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
        <div style={{display:"flex",alignContent:"center",justifyContent:"center"}}>
            <div style={{display:"grid",gridTemplateColumns:"auto"}}>
                <div style={{display:"flex",justifyContent:'center',alignContent:"center",fontSize:"50px"}}>edit your note</div>
                <div style={{display:"flex",justifyContent:'center',alignContent:"center",padding:"10px"}}><input style={{width:"400px",padding:"5px"}} value={title} onChange={(e)=>{settitle(e.target.value)}}></input></div>
                <div style={{display:"flex",justifyContent:'center',alignContent:"center",padding:"10px"}}><textarea style={{width:"400px",padding:"5px",height:"150px"}} value={notes} onChange={(e)=>{setnotes(e.target.value)}}></textarea></div>
                <div style={{display:"flex",justifyContent:'center',alignContent:"center",padding:"5px"}}><button style={{width:'400px',padding:"5px"}} onClick={updateusingid}>update</button></div>
                <div style={{display:"flex",justifyContent:'center',alignContent:"center",padding:"5px"}}><button style={{width:'400px',padding:"5px"}} onClick={deleteusingid}>delete</button></div>
                <div style={{display:"flex",justifyContent:'center',alignContent:"center",padding:"5px"}}><button style={{width:'400px',padding:"5px"}} onClick={sharelinkusingid}>share</button></div>
                <div style={{display:"flex"}}><div onClick={()=>{navigator.clipboard.writeText(this.state.textToCopy)}}style={{display:"flex",justifyContent:"center",alignContent:"center",padding:"10px"}}>{linkk}</div>{linkk !== ""?<div style={{padding:"6px"}}><button onClick={copyToClipboard}>copy</button></div>:""}</div>
            </div>
        </div>
    )
}

export default Edit