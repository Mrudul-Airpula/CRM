import axios from "axios";
import { useState } from "react";
import { BsThreeDotsVertical, BsBellFill } from "react-icons/bs";
import "./List.css";
export default function List() {
    const [user, setUser] = useState([]);
    const url = "http://localhost:3000/dev/getuserlist";
    // const url = "https://y64ha1qk80.execute-api.us-east-1.amazonaws.com/dev/getuserlist";
    const data = {};
    const header = {};
    axios.post(url, data, { headers: header })
        .then((res) => {
            setUser((res.data))
            console.log("Response => " + JSON.stringify(res.data))
        })
        .catch((err) => {
            console.log("Error => " + err)
        })

    return <>
        <div className="list">
            <div className="list_title">
                <label>User List</label>
                <BsThreeDotsVertical />
            </div>
            {user.map((item, index) => {
                return (
                    <div className="list_singlerow">
                        <div className="list_singlerow_circle">
                            <BsBellFill />
                        </div>
                        <div className="list_singlerow_name_and_icon">
                            {
                                <label>{(item.txtFirstName)}</label>
                            }
                            <button>Pending</button>
                        </div>
                    </div>
                );
            })
            }

        </div>
    </>
}
