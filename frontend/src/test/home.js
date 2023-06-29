import { Link, useParams } from "react-router-dom";
import axios from "axios";

const { useEffect, useState } = require("react")

function Home(){
    const [data,setdata] = useState([])
    const [title,settitle] = useState("")
    const [notes,setnotes] = useState("")
    // const queryParameters = new URLSearchParams(window.location.search)
    const type = useParams()
    const postm = async () =>{
        const val = {
            "user": type.name,
            "title":title,
            "notes":notes
        }
        return await axios.post("/api/new/store", val)
      }
    const fetchDataa = async () => {
        const headers = { 'autho': `Bearer ${type.id}`};
        const val = {
            "user":type.name,
            "headers":headers
        }
    return await axios.post(`/api/gett`,val)
            .then((response) => setdata(response.data));
    }
    useEffect(() => {
        // const headers = { 'autho': `Bearer ${type.id}`};
        // const val = {
        //     method:'post',
        //     "user":type.name,
        //     "headers":headers
        // }
        // fetch('/api/gett', val)
        //     .then(response => response.json())
        //     .then(data => setdata(data));
        fetchDataa()
    }, []);
    console.log(data);
    return(
        <div>
            <div>Welcome {type.name}</div>
            <input value={title} onChange={(e)=>{settitle(e.target.value)}}></input>
            <textarea value={notes} onChange={(e)=>{setnotes(e.target.value)}}></textarea>
            <button onClick={postm}>create new notes</button>
            {data.map((e,i)=>{
                return(
                    <Link to={`/new1/edit/${type.id}/${type.name}/${e._id}/`}><div style={{backgroundColor:"grey",margin:"10px"}}>
                        <div>{e.title}</div>
                        <div>{e.notes}</div>
                    </div></Link>
                )
            })}
            
        </div>
    )
}

export default Home