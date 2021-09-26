import React, { useState, useEffect } from "react";
import { Avatar } from "@material-ui/core";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import NearMeIcon from "@material-ui/icons/NearMe";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ReactTimeAgo from "react-time-ago";
import db from "./firebase";
import { useStateValue } from "./Context/StateProvider";
import "./Post.css";

const Post = ({ id, profilePic, image, username, timestamp, message, likes }) => {
  const [isLiked, setIsLiked] = useState(false);
  const [likeList, setLikeList] = useState([]);
  const [{ user }, dispatch] = useStateValue();

  useEffect(() => {
    setLikeList(likes);
    console.log(likes);
  }, []);

  const personisLiked = () => {
    likeList.forEach((person, index) => {
      if (person.name === user.uid) {
        console.log("Yes he is liked");
        return true;
      }
    });
  };

  const handleLikePost = () => {
    const newLikeList = likeList;
    setIsLiked(!isLiked);
    const yes = personisLiked();

    if (yes) {
      newLikeList.push({ name: user.uid });
      db.collection("posts")
        .doc(id)
        .update({ likes: newLikeList })
        .then(() => {
          console.log(user.uid);
          console.log("done");
        });
    }
    console.log(isLiked, "Post id", id);
  };

  return (
    <div className="post" id={id}>
      <div className="post__top">
        <Avatar src={profilePic} className="post__avatar" />
        <div className="post__topInfo">
          <h3>{username}</h3>
          {timestamp && (
            <ReactTimeAgo date={new Date(timestamp?.toDate()).toUTCString()} locale="en-US" />
          )}
        </div>
      </div>
      <div className="post__bottom">{message}</div>
      <div className="post__image">
        <img src={image} />
      </div>

      <div className="post__options">
        <div className={`post__option ${isLiked && "post__Like-active"}`} onClick={handleLikePost}>
          <ThumbUpIcon />
          <p>Like</p>
        </div>
        <div className="post__option">
          <ChatBubbleOutlineIcon />
          <p>Comment</p>
        </div>
        <div className="post__option">
          <NearMeIcon />
          <p>Share</p>
        </div>
        <div className="post__option">
          <AccountCircleIcon />
          <ExpandMoreIcon />
        </div>
      </div>
    </div>
  );
};

export default Post;
