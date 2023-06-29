import { Route, Routes } from "react-router-dom";
import App from './App';
import Neww from './Neww'
import Share from "./Share";
import Home from './test/home'
import Login from './test/login'
import Reg from './test/reg'
import Edit from './test/edit'


function Routee()
{
    return (
        <>
            <Routes>
                <Route path="/" element={<App/>}/>
                <Route path="/new/:id" element={<Neww/>}/>
                <Route path="/share/:id" element={<Share/>}/>
                <Route path="/new1/login" element={<Login/>}/>
                <Route path="/new1/reg" element={<Reg/>}/>
                <Route path="/new1/home/:id/:name" element={<Home/>}/>
                <Route path="/new1/edit/:user/:name/:id" element={<Edit/>}/>
                <Route path="*" element={<p>404 page not found</p>} />
            </Routes>
        </>
    )
}

export default Routee;