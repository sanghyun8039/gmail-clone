import React from "react";
import styled from "styled-components";
import CloseIcon from "@mui/icons-material/Close";
import { Button } from "@mui/material";
import { useForm } from "react-hook-form";
function SendMail() {
  const { register, handleSubmit, watch, erros } = useForm();
  return (
    <Wrapper>
      <SendMailHeader>
        <h3>New Message</h3>
        <CustomCloseIcon />
      </SendMailHeader>

      <form>
        <input name="to" placeholder="To" type="text" ref />
        <input name="subject" placeholder="Subject" type="text" />
        <SendMailMessage name="message" placeholder="Message..." type="text" />
        <SendMailOptions>
          <CustomButton variant="contained" color="primary" type="submit">
            Send
          </CustomButton>
        </SendMailOptions>
      </form>
    </Wrapper>
  );
}

export default SendMail;

const Wrapper = styled.div`
  position: absolute;
  bottom: 0px;
  right: 50px;
  background-color: #404040;
  width: 40%;
  height: 40%;
  max-width: 500px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  display: flex;
  flex-direction: column;
  border: 1px solid whitesmoke;
  box-shadow: 0px 5px 7px 0px rgba(0, 0, 0, 0.24);
  form {
    display: flex;
    flex: 1;
    flex-direction: column;
    input {
      height: 30px;
      padding: 10px;
      border: none;
      border-bottom: 1px solid whitesmoke;
      outline: none;
    }
  }
`;
const SendMailHeader = styled.div`
  padding: 13px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: gray;
  h3 {
    color: whitesmoke;
    font-size: 13px;
  }
`;
const CustomCloseIcon = styled(CloseIcon)`
  cursor: pointer;
`;
const SendMailMessage = styled.input`
  flex: 1;
`;
const SendMailOptions = styled.div``;
const CustomButton = styled(Button)`
  background-color: #3079ed;
  text-transform: capitalize;
  margin: 15px !important;
`;
