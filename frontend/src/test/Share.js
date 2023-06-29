import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function Share (){
    const [title, settitle] = useState("")
    const [notes, setnotes] = useState("")
    const [user,setuser] = useState("")

    const {id} = useParams();

    const fetchDataa = async () => {
        return await axios.get(`/api/mongo/${id}`)
              .then((response) => [setnotes(response.data.notes),settitle(response.data.title),setuser(response.data.user)]);
      }

    useEffect(()=>{
        fetchDataa()
    },[])
    return (
        <div style={{display:"flex",alignContent:"center",justifyContent:"center"}}>
            <div style={{display:'grid',gridTemplateColumns:"auto"}}>
                <div style={{fontSize:"40px"}}>Shared by {user}</div>
                <div style={{fontSize:"30px",color:"lightgrey",display:"flex"}}><div style={{color:"black",marginRight:"8px"}}>title: </div> {title}</div>
                <div style={{color:"black",marginRight:"8px",fontSize:"25px"}}>notes: </div>
                <div style={{fontSize:"20px",color:"lightgrey",display:"flex",maxWidth:"500px",overflow:'scroll',height:"80vh"}}>{notes}</div>
            </div>
        </div>
    )
}

export default Share