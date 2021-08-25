import React from "react";
import StoryReal from "./StoryReal";
import MessageSender from "./MessageSender";
import "./Feed.css";

const Feed = () => {
  return (
    <div className="feed">
      <StoryReal />
      <MessageSender />
      {/* MessageSender */}
    </div>
  );
};

export default Feed;
