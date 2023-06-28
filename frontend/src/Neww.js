import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";


function Neww (){
    const [linkk, setlinkk] = useState("")
    const [title, settitle] = useState("")
    const [notes, setnotes] = useState("")


    const {id} = useParams();

    const fetchDataa = async () => {
        return await axios.get(`/api/mongo/${id}`)
              .then((response) => [setnotes(response.data.notes),settitle(response.data.title)]);
      }
    const postid = async () =>{
        const val = {
        "title":title,
        "notes":notes
        }
        return await axios.put(`/api/neww/${id}`,val)
    }
    const delid = async()=>{
        await axios.delete(`/api/del/${id}`)
    }
    const sharelink = () => {
        setlinkk(`http://localhost:3000/share/${id}`)
    }
    useEffect(()=>{
        fetchDataa()
    },[])
    return (
        <div>
            <input value={title} onChange={(e)=>{settitle(e.target.value)}}></input>
            <textarea value={notes} onChange={(e)=>{setnotes(e.target.value)}}></textarea>
            <button onClick={postid}>update</button>
            <button onClick={delid}>delete</button>
            <button onClick={sharelink}>share</button>
            <div>{linkk}</div>
        </div>
    )
}

export default Neww;