import axios from "axios"
import { useState } from "react"
import { Link } from "react-router-dom"

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
        <div style={{display:"flex",alignContent:"center",justifyContent:"center",padding:"250px"}}>
            <div style={{display:"grid",gridTemplateColumns:"auto"}}>
                <div style={{display:"flex",justifyContent:"center",alignContent:"center", padding:"8px",fontSize:"50px"}}>regester</div>
                <div style={{padding:"8px"}}><input style={{width:"400px",padding:"10px"}} value={name} placeholder="email..." onChange={(e)=>{setname(e.target.value)}}></input></div>
                <div style={{padding:"8px"}}><input style={{width:"400px",padding:"10px"}} value={email} placeholder="username..." onChange={(e)=>{setemail(e.target.value)}}></input></div>
                <div style={{padding:"8px"}}><input style={{width:"400px",padding:"10px"}} value={password} placeholder="password..." onChange={(e)=>{setpassword(e.target.value)}}></input></div>
                <div style={{display:"flex",justifyContent:"center",alignContent:"center", padding:"8px"}}><button style={{width:"400px",padding:"10px"}} onClick={regg}>submit</button></div>
                <div style={{display:"flex",justifyContent:"center",alignContent:"center", padding:"8px"}}>{mess === "error boiii"?<div>server error</div>:mess === ""?<div></div>:<Link to="/new1/login"><button style={{width:"400px",padding:"10px",backgroundColor:"lightgreen"}}>account created go to login</button></Link>}</div>
            </div>
        </div>
    )
}

export default Reg