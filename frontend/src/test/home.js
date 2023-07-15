import { Link, useParams } from "react-router-dom";
import axios from "axios";
import imgg from './img/img2.png'


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
        <div>
        {/* <div style={{display:"flex",alignContent:"center",justifyContent:"center"}}>
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
            
        </div> */}
            <div style={{backgroundColor:"#FFD9EF"}}>
                <div style={{fontSize:"60px",color:"grey",display:"flex",justifyContent:"center",position:"relative",top:"10px"}} id="fontthingy">Noteit</div>
                <div style={{display:"flex"}}>
                    <div style={{marginLeft:"100px"}}>
                        <div style={{fontSize:"40px",marginBlock:"10px"}} id="fontthingy2">welcome {type.name}</div>
                        <div><input placeholder="title..." value={title} onChange={(e)=>{settitle(e.target.value)}} style={{width:"450px",height:"20px",border:"none",marginBottom:"20px",padding:"10px",fontSize:"15px"}}></input></div>
                        <div><textarea placeholder="notes..." value={notes} onChange={(e)=>{setnotes(e.target.value)}} style={{width:"450px",height:"100px",border:"none",marginBottom:"20px",padding:"10px",fontSize:"15px"}}></textarea></div>
                        <div id="fontthingy1" style={{display:"flex", justifyContent:"center"}}><button onClick={postm} style={{height:"40px",width:"450px",borderRadius:"50px",borderStyle:"none",backgroundColor:"#E766B0",color:"white",marginBottom:"20px"}}>create new note</button></div>
                    </div>
                    <div style={{position:"relative",left:"250px",bottom:"-40px"}}>
                        <img src={imgg} style={{borderRadius:"80px",width:"400px"}}></img>
                    </div>
                </div>
                <div style={{marginLeft:"100px"}}>
                    <div id="fontthingy1"style={{fontSize:"40px",marginBottom:"10px"}}>your notes:</div>
                    <div><button style={{height:"40px",width:"100px",borderRadius:"50px",borderStyle:"none",backgroundColor:"#E766B0",color:"white",marginBottom:"20px"}} onClick={refresh} id="fontthingyj">refresh</button></div>
                    <div style={{display:"grid",gridTemplateColumns:"auto auto",width:"80vw",overflow:"scroll",height:"300px"}}>
                {data.map((e,i)=>{
                    return(
                        <Link style={{textDecoration: 'none'}} to={`/new1/edit/${type.id}/${type.name}/${e._id}/`}>
                            <div style={{backgroundColor:"white",margin:"10px",padding:"10px",borderRadius:"10px",height:"100px"}}>
                                <div style={{fontSize:"40px",color:"lightgray",position:"relative",left:"20px"}} id="fontthingy1">{e.title}</div>
                                <div style={{fontSize:"30px",color:"black",position:"relative",left:"20px"}} id="fontthingy1">{e.notes.slice(0,10)+"..."}</div>
                            </div>
                        </Link>
                    )
                })}
                </div>
                </div>
            </div>
        </div>
    )
}

export default Home