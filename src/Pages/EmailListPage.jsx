import React from "react";
import styled from "styled-components";
import { Checkbox, IconButton } from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import RedoIcon from "@mui/icons-material/Redo";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import KeyboardHideIcon from "@mui/icons-material/KeyboardHide";
import SettingsIcon from "@mui/icons-material/Settings";
import InboxIcon from "@mui/icons-material/Inbox";
import PeopleIcon from "@mui/icons-material/People";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import Section from "../components/Section";
import EmailRow from "../components/EmailRow";
function EmailListPage() {
  return (
    <Wrapper>
      <EMailListSettings>
        <EMailListSettingsLeft>
          <Checkbox />
          <IconButton>
            <ArrowDropDownIcon />
          </IconButton>
          <IconButton>
            <RedoIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </EMailListSettingsLeft>
        <EMailListSettingsRight>
          <IconButton>
            <ChevronLeftIcon />
          </IconButton>
          <IconButton>
            <ChevronRightIcon />
          </IconButton>
          <IconButton>
            <KeyboardHideIcon />
          </IconButton>
          <IconButton>
            <SettingsIcon />
          </IconButton>
        </EMailListSettingsRight>
      </EMailListSettings>
      <EMailListSections>
        <Section Icon={InboxIcon} title="primary" color="orange" selected />
        <Section Icon={PeopleIcon} title="Social" color="blue" />
        <Section Icon={LocalOfferIcon} title="Promotions" color="green" />
      </EMailListSections>
      <EMailList>
        <EmailRow
          title="Twitch"
          subject="Hey fellow streamer!!!"
          description="This is a test"
          time="10pm"
        />
        <EmailRow
          title="Twitch"
          subject="Hey fellow streamer!!!"
          description="This is a test"
          time="10pm"
        />
        <EmailRow
          title="Twitch"
          subject="Hey fellow streamer!!!"
          description="This is a testThis is a testThis is a testThis is a testThis is a testThis is a testThis is a testThis is a test"
          time="10pm"
        />
      </EMailList>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  flex: 1;
  overflow: scroll;
`;
const EMailListSettings = styled.div`
  display: flex;
  justify-content: space-between;
  position: sticky;
  border-bottom: 1px solid whitesmoke;
  background-color: white;
  z-index: 999;
  padding-right: 10px;
`;
const EMailListSettingsLeft = styled.div``;
const EMailListSettingsRight = styled.div``;
const EMailListSections = styled.div`
  position: sticky;
  top: 0;
  display: flex;
  border-bottom: 1px slid whitesmoke;
  background-color: white;
  z-index: 999;
`;

const EMailList = styled.div``;
export default EmailListPage;
