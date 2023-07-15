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
        <div style={{backgroundColor:"#FFD9EF",height:"100vh"}}>
                <div style={{fontSize:"60px",display:'flex',justifyContent:"center",position:"relative",top:"20px"}} id="fontthingy">Noteit</div>
                <div style={{fontSize:"40px",marginLeft:"80px",position:"relative",top:"50px"}} id="fontthingy">shared by {user} :</div>
                <div style={{backgroundColor:'white',margin:"80px",padding:"50px",height:"450px"}}>
                <div style={{fontSize:"40px",color:"grey",display:"flex"}} id="fontthingy2">{title}</div>
                <div style={{fontSize:"30px",color:"grey",display:"flex",overflow:'scroll',height:"80vh"}} id="fontthingy2">{notes}</div>
                </div>
        </div>
    )
}

export default Share