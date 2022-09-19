import React from "react";
import styled from "styled-components";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import AppsIcon from "@mui/icons-material/Apps";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { IconButton, Avatar } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { logout, selectUser } from "../features/userSlice";
import { auth } from "../firebase";
function Header() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const signOut = () => {
    auth.signOut().then(() => {
      dispatch(logout());
    });
  };
  return (
    <Wrapper>
      <HeaderLeft>
        <IconButton>
          <MenuIcon />
        </IconButton>

        <img
          src="https://i.pinimg.com/originals/ae/47/fa/ae47fa9a8fd263aa364018517020552d.png"
          alt=""
        />
      </HeaderLeft>
      <HeaderMiddle>
        <CustomSearchIcon />
        <input placeholder="Search mail" type="text" />
        <ArrowDropDownIcon />
      </HeaderMiddle>
      <HeaderRight>
        <IconButton>
          <AppsIcon />
        </IconButton>
        <IconButton>
          <NotificationsIcon />
        </IconButton>
        <Avatar onClick={signOut} src={user?.photoUrl} />
      </HeaderRight>
    </Wrapper>
  );
}

export default Header;
const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid whitesmoke;
`;
const HeaderLeft = styled.div`
  display: flex;
  align-items: center;
  img {
    object-fit: contain;
    height: 80px;
    margin-left: 5px;
  }
`;
const HeaderMiddle = styled.div`
  display: flex;
  align-items: center;
  flex: 0.7;
  background-color: whitesmoke;
  padding: 10px;
  border-radius: 5px;
  input {
    border: none;
    width: 100%;
    padding: 10px;
    outline-width: 0;
    font-size: medium;
    background-color: transparent;
  }
`;

const CustomSearchIcon = styled(SearchIcon)`
  color: grey;
`;
const HeaderRight = styled.div`
  display: flex;
  align-items: center;
  padding-right: 20px;
`;
