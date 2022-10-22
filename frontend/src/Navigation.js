import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Login from './Login';
// import Signup from "./Signup";
// import Otp from './Otp';
import AdminDash from "./AdminPage/AdminDash";
import ManagerDash from "./ManagerPage/ManagerDash";

export default function Navigation(){
    return<>
    <BrowserRouter>
    <Routes>
        {/* <Route path="/" element={<Login />}></Route> */}
        {/* <Route path="/signup" element={<Signup />}></Route>
        <Route path="/admindash" element={ <AdminDash />}></Route> */}
        {/* <Route path="/otp" element={ <Otp />}></Route> */}
        <Route path="/" element={<AdminDash />}></Route>
        <Route path="/managerdash" element={ <ManagerDash />}></Route>
    </Routes>
    </BrowserRouter>
    </>
}