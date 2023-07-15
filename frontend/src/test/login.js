import { useState } from "react"
import axios from "axios"
import { Link } from "react-router-dom"
import img1 from './img/img1.png'
import './App.css'

function Login (){
    const [email,setemail] = useState("")
    const [password, setpassword] = useState("")
    const [token,settoken] = useState("")
    const [mess,setmess] = useState("")
    const fetchDataa = async () => {
        const a = {
            email:email,
            password:password
        }
        return await axios.post(`/api/login`,a)
              .then((response) => [setmess(response.data.message),settoken(response.data.token)]);
      }
    console.log(mess,token);
    return(
        <div>
        {/* <div style={{display:"flex",alignContent:"center",justifyContent:"center",padding:"250px"}}>
            <div style={{display:"grid",gridTemplateColumns:"auto"}}>
                <div style={{display:"flex",justifyContent:"center",alignContent:"center", padding:"8px",fontSize:"50px"}}>Login</div>
                <div style={{padding:"8px"}}><input style={{width:"400px",padding:"10px"}} value={email} placeholder="username..." onChange={(e)=>{setemail(e.target.value)}}></input></div>
                <div style={{padding:"8px"}}><input style={{width:"400px",padding:"10px"}} value={password} placeholder="password..." onChange={(e)=>{setpassword(e.target.value)}}></input></div>
                <div style={{display:"flex",justifyContent:"center",alignContent:"center", padding:"8px"}}><button style={{width:"400px",padding:"10px"}} onClick={fetchDataa}>check credientials</button></div>
                <div style={{display:"flex",justifyContent:"center",alignContent:"center", padding:"8px"}}>{mess==="password wrong"?<div>enter correct password</div>:mess==="no user found"?<Link to="/new1/reg"><button style={{width:"400px",padding:"10px",backgroundColor:"red"}}>create new account</button></Link>:mess===""?<></>:<div><Link to={`/new1/home/${token}/${email}`}><button style={{width:"400px",padding:"10px",backgroundColor:"lightgreen"}}>verified, click here</button></Link></div>}</div>
            </div>
        </div> */}
        <div style={{display:"flex",height:"100vh"}}>
            <div style={{backgroundColor:"rgb(58,58,58)",width:"400px",display:"flex",justifyContent:'center',alignContent:"center"}}>
                <div style={{position:"relative",top:"25vh"}}>
                    <div id="fontthingy" style={{fontSize:"60px",marginBottom:"20px",color:"white",display:"flex",justifyContent:"center"}}>Noteit</div>
                    <div><input placeholder="email..." style={{height:"30px",width:"300px",marginBottom:"20px"}} onChange={(e)=>{setemail(e.target.value)}}></input></div>
                    <div><input placeholder="password..." style={{height:"30px",width:"300px",marginBottom:"20px"}} onChange={(e)=>{setpassword(e.target.value)}}></input></div>
                    <div><button style={{height:"40px",width:"300px",borderRadius:"50px",borderStyle:"none",marginBottom:"20px",backgroundColor:"#E766B0",color:"white"}} onClick={fetchDataa}>log-in</button></div>
                    <div style={{}}>{mess==="password wrong"?<div style={{color:"white"}}>enter correct password</div>:mess==="no user found"?<div style={{color:"white"}}>no such user found</div>:mess===""?<></>:<div><Link to={`/new1/home/${token}/${email}`}><button style={{height:"40px",width:"300px",borderRadius:"50px",borderStyle:"none",backgroundColor:"lightgreen",color:"black",marginBottom:"20px"}}>verified, click here</button></Link></div>}</div>
                    <Link to="/new1/reg"><div><button style={{height:"40px",width:"300px",borderRadius:"50px",borderStyle:"none",backgroundColor:"#BC3081",color:"white"}}>sign-in</button></div></Link>
                </div>
            </div>
            <div>
                <img src={img1} alt="img" width="1100px" height="100%"></img>
            </div>
        </div>

        </div>
    )
}

export default Login