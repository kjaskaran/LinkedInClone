import React, { forwardRef } from "react";
import "./Post.css";
import Avatar from "@mui/material/Avatar";
import InputOption from "./InputOption";
import ThumbUpAltOutlinedIcon from "@mui/icons-material/ThumbUpAltOutlined";
import CommentOutlinedIcon from "@mui/icons-material/CommentOutlined";
import ShortcutOutlinedIcon from "@mui/icons-material/ShortcutOutlined";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";

const Post = forwardRef(({ name, description, message, photoUrl }, ref) => {
  return (
    <div ref={ref} className="post">
      <div className="post__header">
        <Avatar src={photoUrl}>{name[0]}</Avatar>
        <div className="post__info">
          <h2>{name}</h2>
          <p>{description}</p>
        </div>
      </div>

      <div className="post__body">
        <p>{message}</p>
      </div>

      <div className="post__buttons">
        <InputOption title="Like" Icon={ThumbUpAltOutlinedIcon} color="gray" />
        <InputOption title="Comment" Icon={CommentOutlinedIcon} color="gray" />
        <InputOption title="Share" Icon={ShortcutOutlinedIcon} color="gray" />
        <InputOption title="Send" Icon={SendOutlinedIcon} color="gray" />
      </div>
    </div>
  );
});

export default Post;
