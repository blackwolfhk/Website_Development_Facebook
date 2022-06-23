import React from "react";
import "./Sidebar.css";
import SidebarRow from "./SidebarRow";

import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import EmojiFlagsIcon from "@mui/icons-material/EmojiFlags";
import PeopleIcon from "@mui/icons-material/People";
import ChatIcon from "@mui/icons-material/Chat";
import StorefrontIcon from "@mui/icons-material/Storefront";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <SidebarRow
        Icon={undefined}
        src="https://qph.cf2.quoracdn.net/main-qimg-fff84fac61437bac1019459baaab41c3-lq"
        title="Ken Chan"
      />

      <SidebarRow
        Icon={LocalHospitalIcon}
        title="COVID-19 Information Center"
        src={undefined}
      />

      <SidebarRow Icon={EmojiFlagsIcon} title="Pages" src={undefined} />
      <SidebarRow Icon={PeopleIcon} title="Friends" src={undefined} />
      <SidebarRow Icon={ChatIcon} title="Messenger" src={undefined} />
      <SidebarRow Icon={StorefrontIcon} title="Marketplace" src={undefined} />
      <SidebarRow Icon={VideoLibraryIcon} title="Videos" src={undefined} />
      <SidebarRow Icon={ExpandMoreIcon} title="Marketplace" src={undefined} />
    </div>
  );
}
