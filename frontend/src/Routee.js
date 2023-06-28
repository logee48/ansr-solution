import { Route, Routes } from "react-router-dom";
import App from './App';
import Neww from './Neww'
import Share from "./Share";


function Routee()
{
    return (
        <>
            <Routes>
                <Route path="/" element={<App/>}/>
                <Route path="/new/:id" element={<Neww/>}/>
                <Route path="/share/:id" element={<Share/>}/>
            </Routes>
        </>
    )
}

export default Routee;