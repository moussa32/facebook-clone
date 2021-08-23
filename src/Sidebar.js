import React from "react";
import SidebarRow from "./SidebarRow";
import EmojiFlagsIcon from "@material-ui/icons/EmojiFlags";
import PeopleIcon from "@material-ui/icons/People";
import ChatIcon from "@material-ui/icons/Chat";
import StorefrontIcon from "@material-ui/icons/Storefront";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <SidebarRow
        src="https://johannesippen.com/img/blog/humans-not-users/header.jpg"
        lable="Moussa Ibrahiem"
      />
      <SidebarRow Icon={EmojiFlagsIcon} lable="Pages" />
      <SidebarRow Icon={PeopleIcon} lable="Friends" />
      <SidebarRow Icon={ChatIcon} lable="Messenger" />
      <SidebarRow Icon={StorefrontIcon} lable="Marketplace" />
      <SidebarRow Icon={VideoLibraryIcon} lable="Videos" />
      <SidebarRow Icon={ExpandMoreIcon} lable="" />
    </aside>
  );
};

export default Sidebar;
