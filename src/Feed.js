import React from "react";
import CreateIcon from "@mui/icons-material/Create";
import ImageIcon from "@mui/icons-material/Image"
import inputOption  from './inputOption'
import './Feed.css'

const Feed = () => {
  return (
    <div className="feed">
      <div className="feed__inputContainer">
        <div className="feed__input">
          <CreateIcon />
          <form>
            <input type="text" />
            <button type="submit">Send</button>
          </form>
        </div> 
        <div className="feed__inputOptions">
            <inputOption Icon={ImageIcon} title='Photo'  color="#70B5f9"/>
        </div>
      </div>
    </div>
  );
};

export default Feed;
