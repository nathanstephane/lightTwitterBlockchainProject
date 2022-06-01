import React, { forwardRef } from "react";
import "./Post.css";
import "./TweetBox"
import Avatar from 'avataaars';
import { generateRandomAvatarOptions } from './avatar';

import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";

import DeleteIcon from '@material-ui/icons/Delete';

const Post = forwardRef(
  ({ displayName, TEXT, personal, onClick }, ref) => {
    console.log(TEXT);

    return (
      <div className="post" ref={ref}>
        <div className="post__avatar">
          <Avatar
            style={{ width: '100px', height: '100px' }}
            avatarStyle='Circle'
            {...generateRandomAvatarOptions() }
          />
        </div>
        <div className="post__body">
          <div className="post__header">
            <div className="post__headerText">
              <h3>
                {displayName}{" "}
              </h3>
            </div>
            <div className="post__headerDescription">
              <p></p>
              <p>{TEXT}</p>
            </div>
          </div>
          <div className="post__footer">
            <ChatBubbleOutlineIcon fontSize="small" />
            
            {/* If own account DELETE TWEET */}
            {personal ? (
              
              <DeleteIcon fontSize="small" onClick={onClick}/>
            ) : ("")}
          </div>
        </div>
      </div>
    );
  }
);

export default Post;