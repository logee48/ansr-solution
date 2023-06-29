import { useState } from "react"
import axios from "axios"
import { Link } from "react-router-dom"

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
        <div style={{display:"flex",alignContent:"center",justifyContent:"center",padding:"250px"}}>
            <div style={{display:"grid",gridTemplateColumns:"auto"}}>
                <div style={{display:"flex",justifyContent:"center",alignContent:"center", padding:"8px",fontSize:"50px"}}>Login</div>
                <div style={{padding:"8px"}}><input style={{width:"400px",padding:"10px"}} value={email} placeholder="username..." onChange={(e)=>{setemail(e.target.value)}}></input></div>
                <div style={{padding:"8px"}}><input style={{width:"400px",padding:"10px"}} value={password} placeholder="password..." onChange={(e)=>{setpassword(e.target.value)}}></input></div>
                <div style={{display:"flex",justifyContent:"center",alignContent:"center", padding:"8px"}}><button style={{width:"400px",padding:"10px"}} onClick={fetchDataa}>check credientials</button></div>
                <div style={{display:"flex",justifyContent:"center",alignContent:"center", padding:"8px"}}>{mess==="password wrong"?<div>enter correct password</div>:mess==="no user found"?<Link to="/new1/reg"><button style={{width:"400px",padding:"10px",backgroundColor:"red"}}>create new account</button></Link>:mess===""?<></>:<div><Link to={`/new1/home/${token}/${email}`}><button style={{width:"400px",padding:"10px",backgroundColor:"lightgreen"}}>verified, click here</button></Link></div>}</div>
            </div>
        </div>
    )
}

export default Login