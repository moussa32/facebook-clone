import React from "react";
import StoryReal from "./StoryReal";
import MessageSender from "./MessageSender";
import Post from "./Post";
import "./Feed.css";

const Feed = () => {
  return (
    <div className="feed">
      <StoryReal />
      <MessageSender />

      <Post
        key={1}
        profilePic="https://assets.entrepreneur.com/content/3x2/2000/20190502194704-ent19-june-editorsnote.jpeg"
        message="ازيكم يا شباب؟"
        timestamp="1/12/2021"
        username="Moussa Ibrahiem"
        image="https://assets.entrepreneur.com/content/3x2/2000/20190502194704-ent19-june-editorsnote.jpeg"
      />
      <Post />
      <Post />
      <Post />
    </div>
  );
};

export default Feed;
