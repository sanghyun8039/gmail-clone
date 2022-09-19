import { React, useState, useEffect } from "react";
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
import { db } from "../firebase";
function EmailListPage() {
  const [emails, setEmails] = useState([]);

  useEffect(() => {
    db.collection("emails")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) =>
        setEmails(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        )
      );
  }, []);
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
        {emails.map(({ id, data: { to, subject, message, timestamp } }) => (
          <EmailRow
            id={id}
            key={id}
            title={to}
            subject={subject}
            description={message}
            time={new Date(timestamp?.seconds * 1000).toUTCString()}
          />
        ))}
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
        />{" "}
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
        />{" "}
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
        />{" "}
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
  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
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

const EMailList = styled.div`
  padding-bottom: 20%;
`;
export default EmailListPage;
