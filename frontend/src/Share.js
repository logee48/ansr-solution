import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function Share (){
    const [title, settitle] = useState("")
    const [notes, setnotes] = useState("")

    const {id} = useParams();

    const fetchDataa = async () => {
        return await axios.get(`/api/mongo/${id}`)
              .then((response) => [setnotes(response.data.notes),settitle(response.data.title)]);
      }

    useEffect(()=>{
        fetchDataa()
    },[])
    return (
        <div>
            <div>{title}</div>
            <div>{notes}</div>
        </div>
    )
}

export default Share