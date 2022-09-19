import React from "react";
import styled from "styled-components";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import LabelImportantIcon from "@mui/icons-material/LabelImportant";
import { Checkbox, IconButton } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { selectMail } from "../features/mailSlice";
function EmailRow(props) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const openMail = () => {
    dispatch(
      selectMail({
        id: props.id,
        title: props.title,
        subject: props.subject,
        description: props.description,
        time: props.time,
      })
    );
    navigate("/mail");
  };
  return (
    <Wrapper onClick={openMail}>
      <EMailRowOptions>
        <Checkbox />
        <IconButton>
          <StarBorderIcon />
        </IconButton>
        <IconButton>
          <LabelImportantIcon />
        </IconButton>
      </EMailRowOptions>
      <EMailRowTitle>{props.title}</EMailRowTitle>
      <EMailRowMesssage>
        <h4>
          {props.subject}{" "}
          <EMailRowDescription> - {props.description}</EMailRowDescription>
        </h4>
      </EMailRowMesssage>
      <EMailRowTime>
        <p>{props.time}</p>
      </EMailRowTime>
    </Wrapper>
  );
}

export default EmailRow;
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  height: 50px;
  border-bottom: 1px solid whitesmoke;
  cursor: pointer;
  z-index: 999;
  &:hover {
    border-top: 1px solid whitesmoke;
    box-shadow: 0px 4px 4px -2px rgba(0, 0, 0, 0.24);
  }
`;
const EMailRowOptions = styled.div`
  display: flex;
`;
const EMailRowTitle = styled.h3`
  font-size: 13px;
  flex: 0.3;
`;
const EMailRowMesssage = styled.div`
  display: flex;
  flex: 0.8;
  align-items: center;
  font-size: 13px;
  h4 {
    display: flex;
    width: 400px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    padding-left: 5px;
    padding-right: 5px;
  }
`;
const EMailRowDescription = styled.span`
  font-weight: 400;
  color: gray;
  margin-left: 5px;
`;
const EMailRowTime = styled.div`
  padding-right: 15px;
  font-size: 9px;
  font-weight: bold;
`;
