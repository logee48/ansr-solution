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
        <div>
            <input value={name} onChange={(e)=>{setname(e.target.value)}}></input>
            <input value={email} onChange={(e)=>{setemail(e.target.value)}}></input>
            <input value={password} onChange={(e)=>{setpassword(e.target.value)}}></input>
            <button onClick={regg}>submit</button>
            {mess === "error boiii"?<div>server error</div>:mess === ""?<div></div>:<Link to="/new1/login"><div>go to login</div></Link>}
        </div>
    )
}

export default Reg