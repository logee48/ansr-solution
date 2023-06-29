import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import axios from "axios";

function Edit(){
    const [data,setdata] = useState([])
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
    useEffect(() => {
        const headers = { 'autho': `Bearer ${type.user}`};
        fetch(`/api/gett/${type.id}`, { headers })
            .then(response => response.json())
            .then(data => [setnotes(data.notes),settitle(data.title)]);
    }, []);
    console.log(data);
    
    return(
        <div>
            <input value={title} onChange={(e)=>{settitle(e.target.value)}}></input>
            <textarea value={notes} onChange={(e)=>{setnotes(e.target.value)}}></textarea>
            <button onClick={updateusingid}>update</button>
            <button onClick={deleteusingid}>delete</button>
            <button onClick={sharelinkusingid}>share</button>
            <div>{linkk}</div>
        </div>
    )
}

export default Edit