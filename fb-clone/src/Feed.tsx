import React from "react";
import "./Feed.css";
import MessageSender from "./MessageSender";
import StoryReel from "./StoryReel";

export default function Feed() {
  return (
    <div className="feed">
      <StoryReel />
      {/* <MessageSender /> */}
    </div>
  );
}
