import { Avatar } from "@mui/material";
import React from "react";
import "./HeaderOption.css";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";

function HeaderOption({ title, Icon, avatar, onClick }) {
  const user = useSelector(selectUser);

  return (
    <div onClick={onClick} className="headerOption">
      {Icon && <Icon className="headerOption__icon" />}
      {avatar && <Avatar className="headerOption__avatar" src={user?.photoUrl}> {user?.displayName[0]}</Avatar>}
      <h3 className="headerOption__title">{title}</h3>
    </div>
  );
}

export default HeaderOption;
