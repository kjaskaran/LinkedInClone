import React from "react";
import { Avatar } from "@mui/material";
import "./Sidebar.css";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";

function SideBar() {
  const user = useSelector(selectUser);

  const recentItem = (topic) => {
    return (
      <div className="sidebar__recentItem">
        <span className="sidebar__hash">#</span>
        <p>{topic}</p>
      </div>
    );
  };

  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <img
          src="https://th.bing.com/th/id/OIP.vuyRATxnOBN_B8r16BrGtwHaEK?pid=ImgDet&rs=1"
          alt="Laptop with a notepad and mouse"
        />
        <Avatar className="sidebar__avatar" src={user?.photoUrl}>
          {user?.displayName?.[0]}
        </Avatar>
        <h2>{user.displayName}</h2>
        <h4>{user.email}</h4>
      </div>

      <div className="sidebar__stats">
        <div className="sidebar__stat">
          <p>Who's viewed your profile</p>
          <p className="sidebar__statNumber">156</p>
        </div>

        <div className="sidebar__stat">
          <p>Impressions of your post</p>
          <p className="sidebar__statNumber">8,017</p>
        </div>
      </div>

      <div className="sidebar__bottom">
        <p>Recent</p>
        {recentItem("programming")}
        {recentItem("futurism")}
        {recentItem("jobsincanada")}
        {recentItem("innovation")}
        {recentItem("reactjs")}
      </div>
    </div>
  );
}

export default SideBar;
