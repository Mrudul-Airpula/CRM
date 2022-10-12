import { IoIosArrowDown } from "react-icons/io";
import { AiOutlinePlus } from "react-icons/ai";
import "./salesDashboard.css";
import React, { useState } from "react";

export default function SalesDashboard() {
  const [show, setShow] = useState(false);
  function HandleClick() {
    setShow(!show);
  }
  return (
    <div className="outer">
      <div className="inner">
        <div className="inner_head">
          <label>Tasks</label>
        </div>
        <div className="content">
          <div className="content_left">
              <div className="content_left_head">
                <IoIosArrowDown />
                <label>TODO</label>
              </div>
              <div className="content_left_head0">
              <div className="content_left_task">
                <div className="content_left_task_head">
                  <IoIosArrowDown onClick={HandleClick} />
                  <label>Task</label>
                </div>
                {show ? (
                  <div className="content_left_task_list">
                    <label>Event</label>
                    <label>Task</label>
                    <label>Lead</label>
                  </div>
                ) : (
                  <></>
                )}
              </div>
            </div>
            <div className="content_left_task_listAdd">
              <AiOutlinePlus />
            </div>
          </div>
          <div className="content_left">
            <div className="content_left_head">
              <IoIosArrowDown />
              <label>TODO</label>
            </div>
            <div className="content_left_task">
              <div className="content_left_task_head">
                <IoIosArrowDown />
                <label>Task</label>
              </div>
              <div className="content_left_task_list">
                <label>Event</label>
                <label>Task</label>
                <label>Lead</label>
              </div>
            </div>
            <div className="content_left_task_listAdd">
              <AiOutlinePlus />
            </div>
          </div>
          <div className="content_left">
            <div className="content_left_head">
              <IoIosArrowDown />
              <label>TODO</label>
            </div>
            <div className="content_left_task">
              <div className="content_left_task_head">
                <IoIosArrowDown />
                <label>Task</label>
              </div>
              <div className="content_left_task_list">
                <label>Event</label>
                <label>Task</label>
                <label>Lead</label>
              </div>
            </div>
            <div className="content_left_task_listAdd">
              <AiOutlinePlus />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}