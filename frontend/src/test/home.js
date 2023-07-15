import { Link, useParams } from "react-router-dom";
import axios from "axios";


const { useEffect, useState } = require("react")

function Home(){
    const [data,setdata] = useState([])
    const [title,settitle] = useState("")
    const [notes,setnotes] = useState("")
    const type = useParams()
    const postm = async () =>{
        const val = {
            "user": type.name,
            "title":title,
            "notes":notes
        }
        settitle("")
        setnotes("")
        return await axios.post("/api/new/store", val)
      }
    const fetchDataa = async () => {
        const headers = { 'autho': `Bearer ${type.id}`};
        const val = {
            "user":type.name,
            "headers":headers
        }
     await axios.post(`/api/gett`,val)
            .then((response) => setdata(response.data));
    }
    const refresh = ()=>{
        fetchDataa()
    }
    useEffect(() => {
        fetchDataa()
    }, []);
    return(
        <div style={{display:"flex",alignContent:"center",justifyContent:"center"}}>
        {/* // <div> */}
            <div style={{display:"grid",gridTemplateColumns:"auto"}}>
                <div style={{display:"flex",justifyContent:'center',alignContent:"center",fontSize:"50px"}}>Welcome {type.name}</div>
                <div style={{display:"flex",justifyContent:'center',alignContent:"center",padding:"10px"}}><input style={{width:"400px",padding:"5px"}} placeholder="title..." value={title} onChange={(e)=>{settitle(e.target.value)}}></input></div>
                <div style={{display:"flex",justifyContent:'center',alignContent:"center",padding:'10px'}}><textarea style={{width:"400px",padding:"5px",height:"150px"}} placeholder="notes..." value={notes} onChange={(e)=>{setnotes(e.target.value)}}></textarea></div>
                <div style={{display:"flex",justifyContent:'center',alignContent:"center",padding:"10px"}}><button onClick={postm}>create new notes</button></div>
                <button onClick={refresh} style={{width:"100px"}}>refresh</button>
                <div style={{padding:"10px",fontSize:"35px"}}>your notes:</div>
                <div style={{display:"grid",gridTemplateColumns:"auto auto",width:"80vw",overflow:"scroll",height:"200px"}}>
                {data.map((e,i)=>{
                    return(
                        <Link style={{textDecoration: 'none'}} to={`/new1/edit/${type.id}/${type.name}/${e._id}/`}>
                            <div style={{backgroundColor:"rgb(137, 167, 217)",margin:"10px",padding:"10px",borderRadius:"10px"}}>
                                <div style={{fontSize:"30px",color:"lightgray"}}>{e.title}</div>
                                <div style={{fontSize:"20px",color:"black"}}>{e.notes.slice(0,10)+"..."}</div>
                            </div>
                        </Link>
                    )
                })}
                </div>
            </div>
            
        </div>
    )
}

export default Home