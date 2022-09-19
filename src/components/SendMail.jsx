import React from "react";
import styled from "styled-components";
import CloseIcon from "@mui/icons-material/Close";
import { Button } from "@mui/material";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { closeSendMessage } from "../features/mailSlice";
import { db } from "../firebase";
import firebase from "firebase/compat/app";
function SendMail() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (formData) => {
    console.log(formData);
    db.collection("emails").add({
      to: formData.to,
      subject: formData.subject,
      message: formData.message,
      timestamp: firebase.firestore.Timestamp.now(),
    });

    dispatch(closeSendMessage());
  };

  const dispatch = useDispatch();
  return (
    <Wrapper>
      <SendMailHeader>
        <h3>New Message</h3>
        <CustomCloseIcon onClick={() => dispatch(closeSendMessage())} />
      </SendMailHeader>

      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          placeholder="To"
          type="email"
          {...register("to", { required: true })}
        />
        {errors.to && <SendMailError>To is Required!</SendMailError>}
        <input
          placeholder="Subject"
          type="text"
          {...register("subject", { required: true })}
        />
        {errors.subject && <SendMailError>subject is Required!</SendMailError>}

        <SendMailMessage
          placeholder="Message..."
          type="text"
          {...register("message", { required: true })}
        />
        {errors.message && <SendMailError>message is Required!</SendMailError>}

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
  padding: 0;
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
const SendMailError = styled.div`
  background-color: white;
  color: red;
  text-align: right;
  padding: 2px;
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
