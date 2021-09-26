import React from "react";
import SidebarRow from "./SidebarRow";
import EmojiFlagsIcon from "@material-ui/icons/EmojiFlags";
import PeopleIcon from "@material-ui/icons/People";
import ChatIcon from "@material-ui/icons/Chat";
import StorefrontIcon from "@material-ui/icons/Storefront";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { useStateValue } from "./Context/StateProvider";
import "./Sidebar.css";

const Sidebar = () => {
  const [{ user }, dispatch] = useStateValue();

  return (
    <aside className="sidebar">
      <SidebarRow src={user.photoURL} lable={user.displayName} />
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
