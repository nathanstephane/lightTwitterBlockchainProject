import React from "react";
import "./Sidebar.css";
import TwitterIcon from "@material-ui/icons/Twitter";
import SidebarOption from "./SidebarOption";
import HomeIcon from "@material-ui/icons/Home";



import PermIdentityIcon from "@material-ui/icons/PermIdentity";

import { Button } from "@material-ui/core";

function Sidebar() {

  return (
    <div className="sidebar">
      <TwitterIcon className="sidebar__twitterIcon" />

      <SidebarOption Icon={HomeIcon} text="Home" />
      
      
      
      <SidebarOption Icon={PermIdentityIcon} text="Profile"/>
     

      {/* Button -> Tweet */}
      <Button variant="outlined" className="sidebar__tweet" fullWidth>
        Tweet
      </Button>
    </div>
  );
}

export default Sidebar;