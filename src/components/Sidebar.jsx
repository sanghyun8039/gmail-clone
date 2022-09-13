import React from "react";
import SidebarOption from "./SidebarOption";
import styled from "styled-components";
import { Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import InboxIcon from "@mui/icons-material/Inbox";
import StarIcon from "@mui/icons-material/Star";
function Sidebar() {
  return (
    <Wrapper>
      <CustomButton startIcon={<AddIcon />}>Compose</CustomButton>
      <SidebarOption
        Icon={InboxIcon}
        Title="Inbox"
        Number={54}
        Selected={false}
      />
      <SidebarOption
        Icon={StarIcon}
        Title="Starred"
        Number={54}
        Selected={true}
      />
    </Wrapper>
  );
}

export default Sidebar;
const Wrapper = styled.div``;

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
