import React from "react";
import "./SideBar.css";
import TwitterIcon from "@material-ui/icons/Twitter";
import HomeIcon from "@material-ui/icons/Home";
import NotificationsIcon from "@material-ui/icons/Notifications";
import SearchIcon from "@material-ui/icons/Search";
import ExploreIcon from "@material-ui/icons/Explore";
import MessageIcon from "@material-ui/icons/Message";
import BookmarkIcon from "@material-ui/icons/Bookmark";
import ListIcon from "@material-ui/icons/List";
import ProfileIcon from "@material-ui/icons/Person";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import SidebarOption from "./SidebarOption";
function SideBar() {
  return (
    <div className="sidebar">
      {/* Twitter Icon */}

      <TwitterIcon />
      <SidebarOption text="Home" Icon={HomeIcon} />
      <SidebarOption text="Explore" Icon={ExploreIcon} />
      <SidebarOption text="Notifications" Icon={NotificationsIcon} />
      <SidebarOption text="Search" Icon={SearchIcon} />
      <SidebarOption text="Message" Icon={MessageIcon} />
      <SidebarOption text="Bookmark" Icon={BookmarkIcon} />
      <SidebarOption text="List" Icon={ListIcon} />
      <SidebarOption text="Profile" Icon={ProfileIcon} />
      <SidebarOption text="More" Icon={MoreHorizIcon} />
      {/* SideBar Option */}
      {/* SideBar Option */}
      {/* SideBar Option */}
      {/* SideBar Option */}
      {/* SideBar Option */}
      {/* SideBar Option */}

      {/* Button */}
    </div>
  );
}

export default SideBar;
