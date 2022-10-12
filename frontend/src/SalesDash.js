import "./SalesDash.css";
import { AiOutlineDown } from "react-icons/ai";
import { BsThreeDots } from "react-icons/bs";
import { RiBookmarkFill } from "react-icons/ri"
import { HiUser } from "react-icons/hi";
export default function SalesDash() {
    return <>
        <div className="SalesOuter">
            <div className="SalesInner1">
                <div className="Inner1_row1">
                    <AiOutlineDown className="dropdownicon" />
                    <label>TODO</label>
                </div>
                <div className="Inner_row2">
                    <div className="Inner_row2_row1">
                        < AiOutlineDown />
                        <label>Test Task First One</label>
                        < BsThreeDots className="threedotsicon" />
                    </div>
                    <ul>
                        <li>
                            <div className="eventicon_outer">
                                < RiBookmarkFill className="eventicon" />
                            </div>
                            <label>Event</label>
                        </li>
                        <li>
                            <div className="taskicon_outer">
                                < RiBookmarkFill className="taskicon" />
                            </div>
                            <label>Task</label>
                        </li>
                        <li>
                            <div className="leadicon_outer">
                                < HiUser className="leadicon" />
                            </div>
                            <label>Lead</label>
                        </li>
                    </ul>
                </div>
                <div className="Inner_row3">
                    <AiOutlineDown />
                    <label>Test Task First One</label>
                    < BsThreeDots className="threedotsicon" />
                </div>
                <div className="Inner_row4">
                    <label>+</label>
                </div>
            </div>
            <div className="SalesInner2">
                <div className="Inner2_row1">
                    <AiOutlineDown className="dropdownicon" />
                    <label>PROGRESS</label>
                </div>
                <div className="Inner_row2">
                    <div className="Inner_row2_row1">
                        < AiOutlineDown />
                        <label>Test Task First One</label>
                        < BsThreeDots className="threedotsicon" />
                    </div>
                    <ul>
                        <li>
                            <div className="eventicon_outer">
                                < RiBookmarkFill className="eventicon" />
                            </div>
                            <label>Event</label>
                        </li>
                        <li>
                            <div className="taskicon_outer">
                                < RiBookmarkFill className="taskicon" />
                            </div>
                            <label>Task</label>
                        </li>
                        <li>
                            <div className="leadicon_outer">
                                < HiUser className="leadicon" />
                            </div>
                            <label>Lead</label>
                        </li>
                    </ul>
                </div>
                <div className="Inner_row3">
                    <AiOutlineDown />
                    <label>Test Task First One</label>
                    < BsThreeDots className="threedotsicon" />
                </div>
                <div className="Inner_row4">
                    <label>+</label>
                </div>
            </div>
            <div className="SalesInner3">
                <div className="Inner3_row1">
                    <AiOutlineDown className="dropdownicon" />
                    <label>COMPLETED</label>
                </div>
                <div className="Inner_row2">
                    <div className="Inner_row2_row1">
                        < AiOutlineDown />
                        <label>Test Task First One</label>
                        < BsThreeDots className="threedotsicon" />
                    </div>
                    <ul>
                        <li>
                            <div className="eventicon_outer">
                                < RiBookmarkFill className="eventicon" />
                            </div>
                            <label>Event</label>
                        </li>
                        <li>
                            <div className="taskicon_outer">
                                < RiBookmarkFill className="taskicon" />
                            </div>
                            <label>Task</label>
                        </li>
                        <li>
                            <div className="leadicon_outer">
                                < HiUser className="leadicon" />
                            </div>
                            <label>Lead</label>
                        </li>
                    </ul>
                </div>
                <div className="Inner_row3">
                    <AiOutlineDown />
                    <label>Test Task First One</label>
                    < BsThreeDots className="threedotsicon" />
                </div>
                <div className="Inner_row4">
                    <label>+</label>
                </div>
            </div>
        </div>
    </>
}