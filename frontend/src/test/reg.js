import axios from "axios"
import { useState } from "react"
import { Link } from "react-router-dom"
import img1 from './img/img1.png'

function Reg (){
    const [name,setname] = useState("")
    const [email,setemail] = useState("")
    const [password, setpassword] = useState("")
    const [mess,setmess] = useState("")
    const regg = async () => {
        const a = {
            name:name,
            email:email,
            password:password
        }
        return await axios.post(`/api/reg`,a)
              .then((response) => setmess(response.data.message));
      }
    

    return(
        <div>
        {/* <div style={{display:"flex",alignContent:"center",justifyContent:"center",padding:"250px"}}>
            <div style={{display:"grid",gridTemplateColumns:"auto"}}>
                <div style={{display:"flex",justifyContent:"center",alignContent:"center", padding:"8px",fontSize:"50px"}}>register</div>
                <div style={{padding:"8px"}}><input style={{width:"400px",padding:"10px"}} value={name} placeholder="email..." onChange={(e)=>{setname(e.target.value)}}></input></div>
                <div style={{padding:"8px"}}><input style={{width:"400px",padding:"10px"}} value={email} placeholder="username..." onChange={(e)=>{setemail(e.target.value)}}></input></div>
                <div style={{padding:"8px"}}><input style={{width:"400px",padding:"10px"}} value={password} placeholder="password..." onChange={(e)=>{setpassword(e.target.value)}}></input></div>
                <div style={{display:"flex",justifyContent:"center",alignContent:"center", padding:"8px"}}><button style={{width:"400px",padding:"10px"}} onClick={regg}>submit</button></div>
                <div style={{display:"flex",justifyContent:"center",alignContent:"center", padding:"8px"}}>{mess === "error boiii"?<div>server error</div>:mess === ""?<div></div>:<Link to="/new1/login"><button style={{width:"400px",padding:"10px",backgroundColor:"lightgreen"}}>account created go to login</button></Link>}</div>
            </div>
        </div> */}
        <div style={{display:"flex",height:"100vh"}}>
            <div style={{backgroundColor:"rgb(58,58,58)",width:"400px",display:"flex",justifyContent:'center',alignContent:"center"}}>
                <div style={{position:"relative",top:"25vh"}}>
                    <div style={{fontSize:"40px",marginBottom:"20px",color:"white",display:"flex",justifyContent:"center"}}>noteit</div>
                    <div><input placeholder="email..." style={{height:"30px",width:"300px",marginBottom:"20px"}} onChange={(e)=>{setname(e.target.value)}}></input></div>
                    <div><input placeholder="username..." style={{height:"30px",width:"300px",marginBottom:"20px"}} onChange={(e)=>{setemail(e.target.value)}}></input></div>
                    <div><input placeholder="password..." style={{height:"30px",width:"300px",marginBottom:"20px"}} onChange={(e)=>{setpassword(e.target.value)}}></input></div>
                    <div><button style={{height:"40px",width:"300px",borderRadius:"50px",borderStyle:"none",backgroundColor:"#BC3081",color:"white",marginBottom:"20px"}} onClick={regg}>sign-in</button></div>
                <div style={{}}>{mess === "error boiii"?<div style={{color:"white"}}>server error</div>:mess === ""?<div></div>:<Link to="/new1/login"><button style={{height:"40px",width:"300px",borderRadius:"50px",borderStyle:"none",backgroundColor:"lightgreen",color:"black",marginBottom:"20px"}}>account created go to login</button></Link>}</div>
                </div>
            </div>
            <div>
                <img src={img1} alt="img" width="1100px" height="100%"></img>
            </div>
        </div>
        </div>
    )
}

export default Reg