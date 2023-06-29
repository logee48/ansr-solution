import { useEffect, useState } from "react"
import axios from "axios"
import { Link } from "react-router-dom"

function Login (){
    const [email,setemail] = useState("")
    const [password, setpassword] = useState("")
    const [token,settoken] = useState("")
    const [mess,setmess] = useState("")
    // const logincheck = async()=>{
    //     await axios.delete(`/api/login`)
    // }
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
            <input value={email} onChange={(e)=>{setemail(e.target.value)}}></input>
            <input value={password} onChange={(e)=>{setpassword(e.target.value)}}></input>
            <button onClick={fetchDataa}>submit</button>
            {mess==="password wrong"?<div>enter correct password</div>:mess==="no user found"?<Link to="/new1/reg"><div>regester</div></Link>:mess===""?<></>:<div><Link to={`/new1/home/${token}/${email}`}><div>verified</div></Link><div>{token}</div></div>}
        </div>
    )
}

export default Login