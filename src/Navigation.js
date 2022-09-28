import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from './Login';
import Signup from "./Signup";
import Admin from "./Admin";
import Otp from './Otp';

export default function Navigation(){
    return<>
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/Admin" element={ <Admin />}></Route>
        <Route path="/otp" element={ <Otp />}></Route>
    </Routes>
    </BrowserRouter>
    </>
}