import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function App() {
  const [user, setUser] = useState([]);
  const [title, settitle] = useState("")
  const [notes, setnotes] = useState("")

  const postm = async () =>{
    const val = {
      "title":title,
      "notes":notes
    }
    await axios.post("/api/store", val)
  }

  const fetchDataa = async () => {
    return await axios.get("/api/mongo")
          .then((response) => setUser(response.data));
  }
  console.log(user);

  useEffect(() => {
    fetchDataa()
  },[])

  return (
    <div>
      {/* <div>{JSON.stringify(user)}</div> */}
      <input value={title} onChange={(e)=>{settitle(e.target.value)}}></input>
      <textarea value={notes} onChange={(e)=>{setnotes(e.target.value)}}></textarea>
      <button onClick={postm}>create new record</button>

{Object.keys(user).map((id,index)=>{
          return (
            <div style={{backgroundColor:"grey",margin:'100px'}}>
              <Link to={`/new/${user[id]._id}`}><div>{user[id].title}</div>
              <div>{user[id].notes}</div></Link>
            </div>
          )
        })}
    </div>
  );
}

export default App;