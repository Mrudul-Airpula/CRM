import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from './Login';
import Signup from "./Signup";
import AdminDash from "./AdminDash";
import Otp from './Otp';
import ManagerDash from "./ManagerDash";

export default function Navigation(){
    return<>
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/admindash" element={ <AdminDash />}></Route>
        <Route path="/otp" element={ <Otp />}></Route>
        <Route path="/managerdash" element={ <ManagerDash />}></Route>
    </Routes>
    </BrowserRouter>
    </>
}