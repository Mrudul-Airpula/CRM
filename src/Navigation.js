import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from './Login';
import Signup from "./Signup";
import Admin from "./Admin"

export default function Navigation(){
    return<>
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/Signup" element={<Signup />}></Route>
        <Route path="/Admin" element={ <Admin />}></Route>
    </Routes>
    </BrowserRouter>
    </>
}