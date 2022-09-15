import React from "react";
import SidebarOption from "./SidebarOption";
import styled from "styled-components";
import { Button, IconButton } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import InboxIcon from "@mui/icons-material/Inbox";
import StarIcon from "@mui/icons-material/Star";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import LabelImportantIcon from "@mui/icons-material/LabelImportant";
import NearMeIcon from "@mui/icons-material/NearMe";
import NoteIcon from "@mui/icons-material/Note";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import PersonIcon from "@mui/icons-material/Person";
import DuoIcon from "@mui/icons-material/Duo";
import PhoneIcon from "@mui/icons-material/Phone";
function Sidebar() {
  return (
    <Wrapper>
      <CustomButton startIcon={<AddIcon />}>Compose</CustomButton>
      <SidebarOption Icon={InboxIcon} Title="Inbox" Number={54} />
      <SidebarOption
        Icon={StarIcon}
        Title="Starred"
        Number={54}
        Selected={true}
      />
      <SidebarOption Icon={AccessTimeIcon} Title="Snoozed" Number={54} />
      <SidebarOption Icon={LabelImportantIcon} Title="Important" Number={54} />
      <SidebarOption Icon={NearMeIcon} Title="Sent" Number={54} />
      <SidebarOption Icon={NoteIcon} Title="Drafts" Number={54} />
      <SidebarOption Icon={ExpandMoreIcon} Title="More" Number={54} />

      <SidebarFooter>
        <SidebarFooterIcons>
          <IconButton>
            <PersonIcon />
          </IconButton>
          <IconButton>
            <DuoIcon />
          </IconButton>
          <IconButton>
            <PhoneIcon />
          </IconButton>
        </SidebarFooterIcons>
      </SidebarFooter>
    </Wrapper>
  );
}

export default Sidebar;
const Wrapper = styled.div`
  flex: 0.3;
  max-width: 300px;
  padding-right: 20px;
`;

const CustomButton = styled(Button)`
  margin-top: 15px !important;
  margin-left: 10px !important;
  margin-bottom: 15px !important;
  text-transform: capitalize !important;
  color: gray;
  padding: 15px !important;
  border-radius: 30px !important;
  box-shadow: 0px 2px 5px -2px rgba(0, 0, 0, 0.75);
`;

const SidebarFooter = styled.div`
  display: flex;
  justify-content: center;
`;
const SidebarFooterIcons = styled.div``;
